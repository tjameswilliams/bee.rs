'use strict';
let MySQLOb = require('./mysqlob');

var SQL = {
	upsertUser: `INSERT INTO users (id,session_id,name,user_type,ip_address)
		VALUES (?,?,?,?,?) ON DUPLICATE KEY UPDATE
		name = VALUES(name),
		user_type = VALUES(user_type)`,
	deleteUser: `DELETE FROM users WHERE id = ?`,
	getHostForSession: `SELECT * FROM users
		WHERE user_type = 'host'
		AND session_id = ?
		LIMIT 1;`,
	getUser: `SELECT u.*
		FROM users u
		JOIN sessions s ON s.id = u.session_id
		WHERE u.id = ?
		AND s.session_open = 1
		LIMIT 1;`,
	getUserByIp: `SELECT u.*
		FROM users u
		JOIN sessions s ON s.id = u.session_id
		WHERE u.ip_address = ?
		AND s.session_open = 1
		LIMIT 1;`,
	getUsers: `SELECT u.*
		FROM users u
		JOIN sessions s ON s.id = u.session_id
		WHERE s.session_open = 1
		AND u.user_type != 'host'`
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
			user.user_type,
			user.ip_address
		],cb);
	}
	getHost(sessionId,cb) {
		this.doSql('getHostForSession',[sessionId],cb);
	}
	getUser(userId,ip_address,cb) {
		if(userId) {
			this.doSql('getUser',[userId],cb);
		} else {
			this.doSql('getUserByIp',[ip_address],cb);
		}
	}
	getUsers(cb) {
		this.doSql('getUsers',cb);
	}
}
