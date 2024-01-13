import { db } from "../db.js";

class Account {
  id = null;
  email = null;
  password = null;
  url = null;
  context_id = null;
  status = null;

  constructor({ id, email, password, url, context_id = null, status = 0 }) {
    this.id = id; // Generate a unique ID using uuid
    this.email = email;
    this.password = password;
    this.url = url;
    this.context_id = context_id;
    this.status = status;
  }

  // Save the account to the database
  async save() {
    return await db.chain.get('accounts').push(this).write();
  }

  static async all() {
    return await db.chain.get('accounts').value();
  }

  // create
  static async create(body) {
    const record = await Account.where({ id: body.id });

    if (record) {
      await db.chain.get('accounts').find({ id: record.id }).assign(body).value();
      await db.write();
    } else {
      await db.chain.get('accounts').push(body).value();
      await db.write();
    }
  }

    
  // Find account by ID
  static async findById(id) {
    return await db.chain.get('accounts').find({ id }).value();
  }

  static async where(query = {}) {
    return await db.chain.get('accounts').find(query).value();
  }

  static async update(data = {}, query = {}) {
    const body = {...data, ...query};
    const record = await Account.where({ id: query.id });
    if (record) {
      await db.chain.get('accounts').find({ id: query.id }).assign(body).value();
      await db.write();
    }
  }
}

export default Account;