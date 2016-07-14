'use strict';
var mysql = require('mysql');
var createConnection = mysql.createConnection;

var connectionOpts = {
	host     : 'localhost',
	user     : 'beer_admin',
	database : 'beer_tasting_app',
	password : '_B33rZ!_'
};

var connection = createConnection(connectionOpts);

module.exports = class MySQLOb {
	constructor(SQL) {
		this.log = false;
		this.connection = connection;
		this.SQL = SQL;
	}
	query(sql, values, cb) {
		try {
			if(!values){
				this.connection.query(sql, cb);
			} else {
				this.connection.query({
					sql: sql,
					values: values
				}, cb);
			}
		} catch(e) {
			this.connected = false;
			// use try-catch to prevent from program exiting caused by mysql
			cb(e);
		}

		return this;
	}
	doSql(stmtRef,params,cb) {
		var stmt = this.SQL[stmtRef];
		if(typeof params === 'function') {
			cb = params;
			params = null;
		}
		if( this.log ) {
			console.log(mysql.format(stmt,params).replace(/\t/g,' '));
		}
		this.query(stmt,params,function(err,rows) {
			if(err) {
				cb(err);
			}
			if(stmt.indexOf('LIMIT 1;') !== -1 && rows.length ) {
				rows = rows[0];
			}
			if( cb ) {
				cb(null,rows);
			}

		});
	}
}
