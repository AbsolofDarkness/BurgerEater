// Connection file requirement
const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

const orm = {
    selectAll: (tableInput, callback) => {
        let queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;

            callback(res);
        });
    },
    insertOne: (table, cols, vals, callback) => {
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;

        console.log(queryString);

        connection.query(queryString, vals, (err, res) => {
            if (err) throw err;

            callback(res);
        });
    },
    updateOne: (table, objColVals, con, callback) => {
        let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${con}`;

        console.log(queryString);

        connection.query(queryString, (err, res) => {
            if (err) throw err;

            callback(res);
        });
    }
};

module.exports = orm;
