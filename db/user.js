import { db } from "../db.js";

class User {
  email = null;
  password = null;

  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }

  // Save the account to the database
  async save() {
    return await db.chain.get('users').push(this).write();
  }

  static async all() {
    return await db.chain.get('users').value();
  }

  // create
  static async create(body) {
    const record = await User.where({ email: body.email });

    if (record) {
      await db.chain.get('users').find({ email: record.email }).assign(body).value();
      await db.write();
    } else {
      await db.chain.get('users').push(body).value();
      await db.write();
    }
  }

    
  // Find account by ID
  static async findById(id) {
    return await db.chain.get('users').find({ id }).value();
  }

  static async where(query = {}) {
    return await db.chain.get('users').find(query).value();
  }

  static async update(data = {}, query = {}) {
    const body = {...data, ...query};
    const record = await User.where({ id: query.id });
    if (record) {
      await db.chain.get('users').find({ id: query.id }).assign(body).value();
      await db.write();
    }
  }
}

export default User;