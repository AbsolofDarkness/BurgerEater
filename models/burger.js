// Import ORM
const orm = require("../config/orm.js");

let burger = {
    selectAll: (callback) => {
        orm.selectAll("burgers", (res) => {
            callback(res);
        });
    },
    insertOne: (cols, vals, callback) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            callback(res);
        });
    },
    updateOne: (objColVals, con, callback) => {
        orm.updateOne("burgers", objColVals, con, (res) => {
            callback(res);
        });
    }
};

module.exports = burger;