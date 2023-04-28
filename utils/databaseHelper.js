var mysql = require('mysql');
var Promise = require("bluebird");
let db;
function getConnect() {
    if (!db) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'test'
        });



        connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            db = connection;
            console.log('connected as id ' + connection.threadId);
        });
    } else {
        return db;
    }
}

const select = (table, selectParams, condition) => {
    return new Promise(async (resolve, reject) => {
        try {
            let where = ` 1=1 ${condition ? ` ${condition}` : ''}`
            let qry = `SELECT ${selectParams} FROM ${table} WHERE ${where}`;
            console.log("===== SELECT ====", qry);
            db.query(qry, function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            })
        }
        catch (err) {
            reject(err);
        }
    })
}

const insert = (table, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.query(`INSERT INTO ${table} SET ? `, [data], function (error, results) {
                if (error) {
                    console.log("=== Insert error === ", error);
                    reject(error);
                } else {
                    resolve(results);
                }
            })
        }
        catch (err) {
            reject(err);
        }
    })
}


const update = (table, data, where) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.query(`UPDATE ${table} SET ? WHERE ${where}`, [data], function (error, results) {
                if (error) {
                    console.log("=== update error === ", error);
                    reject(error);
                } else {
                    resolve(results);
                }
            })
        }
        catch (err) {
            reject(err);
        }
    })
}


const deleteData = (table, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.query(`DELETE FROM ${table} WHERE ${data}  `, function (error, results) {
                if (error) {
                    console.log("=== delete error === ", error);
                    reject(error);
                } else {
                    resolve(results);
                }
            })
        }
        catch (err) {
            reject(err);
        }
    })
}

module.exports = {
    getConnect: getConnect,
    select: select,
    insert: insert,
    update: update,
    delete: deleteData
};