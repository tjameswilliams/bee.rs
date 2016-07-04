'use strict';
let MySQLOb = require('./mysqlob');

var SQL = {
	upsertUser: `INSERT INTO users (id,session_id,name,user_type)
		VALUES (?,?,?,?) ON DUPLICATE KEY UPDATE
		name = VALUES(name),
		user_type = VALUES(user_type)`,
	deleteUser: `DELETE FROM users WHERE id = ?`,
	getHostForSession: `SELECT * FROM users
		WHERE user_type = 'host'
		AND session_id = ?
		LIMIT 1;`,
	getUser: `SELECT * FROM users
		WHERE id = ?
		LIMIT 1;`
};

module.exports = class Users extends MySQLOb {
	constructor() {
		super(SQL);
	}
	upsertUser(user,cb) {
		this.doSql('upsertUser',[
			user.id,
			user.session_id,
			user.name,
			user.user_type
		],cb);
	}
	getHost(sessionId,cb) {
		this.doSql('getHostForSession',[sessionId],cb);
	}
	getUser(userId,cb) {
		this.doSql('getUser',[userId],cb);
	}
}
