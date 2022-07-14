const knex = require("./knex");

class Base {
  constructor(props) {
    this.table = props;
  }

  knex() {
    return knex(this.table);
  }

  count(params = {}) {
    return knex(this.table).count({ count: "id" }).where(params);
  }

  all() {
    return knex(this.table).select();
  }

  insert(params) {
    return knex(this.table).insert(params);
  }

  delete(id) {
    return knex(this.table).where("id", "=", id).del();
  }

  update(id, params) {
    return knex(this.table).where("id", "=", id).update(params);
  }

  select(params, limit = 1000, offset = 0) {
    return knex(this.table).select().where(params).orderBy("id", "desc").limit(limit).offset(offset);
  }
}

module.exports = Base;
