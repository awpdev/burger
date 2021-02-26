
const connection = require("./connection");

const orm = {
  selectAll: (tableInput, cb) => {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) throw err;
      console.log('r');
      return cb(result);
    })
  },

  
  insertOne: (tableInput, newVal, cb) => {
    const queryString = `INSERT INTO ${tableInput} SET ?`;
    connection.query(queryString, newVal, (err) => {
      if (err) throw err;
      console.log('c');
      return cb();
    })
  }
/*
  updateOne: (tableInput, id, updateVal, cb) => {
    const queryString = ``;

    connection.query(queryString, updateVal, (err, result) => {
      if (err) throw err;
      console.log('u');
      return cb(result);
    });
  } */
};

module.exports = orm;
