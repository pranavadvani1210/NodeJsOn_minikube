var mysql = require('mysql');
var connection = mysql.createConnection({
	  host: process.env.NODEJSAPP_MYSQL_SERVICE_SERVICE_HOST,
	  user: 'root',
	  password: 'password',
	  database: 'nodemysqldb'
});
connection.connect((err) => {
	  if (err) throw err;
	  console.log('Connected!');
});
module.exports = connection;
