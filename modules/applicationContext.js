'use strict';
let MySQLOb = require('./mysqlob');

var SQL = {
	getOpenSessionAndHost: `SELECT
		s.id,
		s.name,
		h.name as host_name,
		b.id as beer_id
		FROM sessions s
		LEFT JOIN users h ON (
			h.user_type = "host" AND
			h.session_id = s.id
		)
		LEFT JOIN beers b ON (
			b.tasting_in_process = 1 AND
			b.session_id = s.id
		)
		WHERE s.session_open = 1
		ORDER BY s.created_at DESC
		LIMIT 1;`,
	getUserContext: `SELECT
		u.user_type,
		u.id,
		u.name,
		COUNT(b.id) as beer_count,
		SUM(b.tasting_complete) as tastings_complete,
		IF(SUM(b.tasting_complete) = COUNT(b.id), 1, 0) as all_tastings_complete,
		cb.id as current_beer_id
		FROM users u
		LEFT JOIN beers b ON b.session_id = u.session_id
		LEFT JOIN beers cb ON (
			cb.session_id = u.session_id AND
			cb.tasting_in_process = 1
		)
		WHERE u.id = ?
		GROUP BY b.session_id
		LIMIT 1;`
};

module.exports = class ApplicationContext extends MySQLOb {
	constructor() {
		super(SQL);
	}
	getRoute(userId,cb) {
		var self = this;
		// --> if a user id is not supplied, we check to see if a session exists.
		self.doSql('getOpenSessionAndHost',(err,session) => {
			if( err ) throw err;
			if( !userId ) {
				if( !session.id ) {
					// --> in this case we are starting from step 1, create a session.
					cb('');
				} else if( session.id && !session.host_name ) {
					// --> in this case, a session was created but there is no host.
					cb('/new-host');
				} else {
					// --> else, a session is created, a host is manifesting beers, route
					// other users to create new taster profiles.
					cb('/new-taster');
				}
			} else {
				self.doSql('getUserContext', [userId], (err,userContext) => {
					if(err) throw err;
					if( userContext.user_type === 'host' ) {
						if( !userContext.current_beer_id && (userContext.beer_count === 0 || userContext.tastings_complete === 0) ) {
							// --> in this case the host is still manifesting beers.
							cb('/beer-manifest');
						} else if( userContext.current_beer_id ) {
							// --> a tasting round is in process.
							cb('/host-round/'+userContext.current_beer_id );
						} else if( userContext.all_tastings_complete ) {
							// --> all tastings have been completed, go to summary
							cb('/summary');
						} else {
							// --> something actually went wrong here...
							// the host should be manifesting, driving the rounds or the session is complete
							cb('');
						}
					} else {
						if( !userContext.current_beer_id && (userContext.beer_count === 0 || userContext.tastings_complete === 0) ) {
							// --> in this case the host is still manifesting beers. Tasters will wait until
							// the host is ready to start!
							cb('/please-wait');
						} else if( userContext.current_beer_id ) {
							// --> a tasting round is in process.
							cb('/tasting-round/'+userContext.current_beer_id );
						} else if( userContext.all_tastings_complete ) {
							// --> all tastings have been completed, go to summary
							cb('/summary');
						} else {
							// --> something actually went wrong here...
							// route back to new session.
							cb('');
						}
					}

				});
			}
		});
	}
}
