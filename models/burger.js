const orm = require("../config/orm");

const burger = {
  addBurger: (burgerName, cb) => {
    orm.insertOne('burgers', { burger_name: burgerName }, cb);
  },
  getAll: cb => {
    orm.selectAll('burgers', cb);
  } /*
  devourBurger: (burgerId, cb) => {
    orm.updateOne('burger', burgerId, { devoured: true }, cb);
  }*/
}

module.exports = burger;