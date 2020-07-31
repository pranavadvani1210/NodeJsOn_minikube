#!/bin/sh

mysql -uroot -p$MYSQL_PASS -e "ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';flush privileges;"
mysql -uroot -p$MYSQL_PASS -e "CREATE DATABASE nodemysqldb"
mysql -uroot -p$MYSQL_PASS nodemysqldb < /tmp/init_db/init_db.sql
