import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import lodash from 'lodash';

// Read or create db.json
const defaultData = {
    accounts: [
      {
        id: 'caf276f4',
        email: 'zasalcoym@nextsuns.com',
        password: 'Changeme2023..',
        url: 'https://caf276f4-bf80-4535-ab72-7c5a46109666.ide.ahdev.cloud',
        context_id: null,
        status: 0 // 0: offline, 1: online
      },
      {
        id: 'fb281a10',
        email: 'zabhswu@datadudi.com',
        password: 'Changeme2023..',
        url: 'https://fb281a10-c9e3-4d85-aaf6-2db2bdd42187.ide.ahdev.cloud',
        context_id: null,
        status: 0 // 0: offline, 1: online
      },
      // {
      //   id: '6fd42fb8',
      //   email: 'ior4bqs@4save.net',
      //   password: 'Changeme2023..',
      //   url: 'https://6fd42fb8-7805-478e-9ce8-4356bd7b07bf.ide.ahdev.cloud',
      //   context_id: null,
      //   status: 0 // 0: offline, 1: online
      // },
      // {
      //   id: '671aab12',
      //   email: 'm4fr5fns@coffeejadore.com',
      //   password: 'Changeme2023..',
      //   url: 'https://671aab12-e93a-4716-bf0a-21e3161e5180.ide.ahdev.cloud',
      //   context_id: null,
      //   status: 0 // 0: offline, 1: online
      // },
    ]
}

class LowWithLodash extends Low {
  chain = lodash.chain(this).get('data')
}
const adapter = new JSONFile('db.json', defaultData);
const db = new LowWithLodash(adapter, defaultData);

await db.read();
await db.write();

export {
  db
};