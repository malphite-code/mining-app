import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import lodash from 'lodash';

// Read or create db.json
const defaultData = {
  users: [],
  accounts: [
    {
      "id": "aea36f5c-faa4-4961-bbe5-129aebe4be1e",
      "email": "czfphpi@aluimport.com",
      "password": "Changeme2023..",
      "url": "https://aea36f5c-faa4-4961-bbe5-129aebe4be1e.ide.ahdev.cloud",
      "context_id": null,
      "group": 1,
      "status": 0
    },
    {
      "id": "fbfbe523-05a5-4d8b-90f5-9e3c4b2bbbe9",
      "email": "az1apte@ipxwan.com",
      "password": "Changeme2023..",
      "url": "https://fbfbe523-05a5-4d8b-90f5-9e3c4b2bbbe9.ide.ahdev.cloud",
      "context_id": null,
      "group": 1,
      "status": 0
    },
    {
      "id": "e817cf24-ba19-41e7-b21d-35f238b1b805",
      "email": "tm93tmxb@ipxwan.com",
      "password": "Changeme2023..",
      "url": "https://e817cf24-ba19-41e7-b21d-35f238b1b805.ide.ahdev.cloud",
      "context_id": null,
      "group": 1,
      "status": 0
    },
    {
      "id": "218e5508-7ed0-45e3-a669-bbdb4827cb71",
      "email": "m9bybehn@videotoptop.com",
      "password": "Changeme2023..",
      "url": "https://218e5508-7ed0-45e3-a669-bbdb4827cb71.ide.ahdev.cloud",
      "context_id": null,
      "group": 1,
      "status": 0
    },
    {
      "id": "2bca1095-4904-4787-81ec-4edc501efc74",
      "email": "m4p2lcn@leechchannel.com",
      "password": "Changeme2023..",
      "url": "https://2bca1095-4904-4787-81ec-4edc501efc74.ide.ahdev.cloud",
      "context_id": null,
      "group": 1,
      "status": 0
    },
    {
      "id": "212627eb-a675-4693-a7d3-e84424d69fb4",
      "email": "mtlikei@bookgame.org",
      "password": "Changeme2023..",
      "url": "https://212627eb-a675-4693-a7d3-e84424d69fb4.ide.ahdev.cloud",
      "context_id": null,
      "group": 1,
      "status": 0
    },
    {
      "id": "5e0406ad-c89c-444b-be3a-9eae1dddec6a",
      "email": "duabmpw@mp3oxi.com",
      "password": "Changeme2023..",
      "url": "https://5e0406ad-c89c-444b-be3a-9eae1dddec6a.ide.ahdev.cloud",
      "context_id": null,
      "group": 1,
      "status": 0
    },
    {
      "id": "a0ea086a-b45a-415c-89d7-c16cb12a1a9c",
      "email": "m9twnimy@videotoptop.com",
      "password": "Changeme2023..",
      "url": "https://a0ea086a-b45a-415c-89d7-c16cb12a1a9c.ide.ahdev.cloud",
      "context_id": null,
      "group": 1,
      "status": 0
    },
    {
      "id": "45cb431a-66bb-45a3-9eac-8663e3385a9e",
      "email": "czi2parfx@mp3oxi.com",
      "password": "Changeme2023..",
      "url": "https://45cb431a-66bb-45a3-9eac-8663e3385a9e.ide.ahdev.cloud",
      "context_id": null,
      "group": 1,
      "status": 0
    },
    {
      "id": "c365a81b-9989-48dc-b566-d7883c64c9b7",
      "email": "azyakk@videotoptop.com",
      "password": "Changeme2023..",
      "url": "https://c365a81b-9989-48dc-b566-d7883c64c9b7.ide.ahdev.cloud",
      "context_id": null,
      "group": 1,
      "status": 0
    },
    {
      "id": "0bfd7453-1a3e-4abc-ac72-083940fe9704",
      "email": "az8lav@pertera.com",
      "password": "Changeme2023..",
      "url": "https://0bfd7453-1a3e-4abc-ac72-083940fe9704.ide.ahdev.cloud",
      "context_id": null,
      "group": 1,
      "status": 0
    },
    {
      "id": "92f6a527-74e5-4f89-9bf9-2d6628f16094",
      "email": "m9wngwx@likemovie.net",
      "password": "Changeme2023..",
      "url": "https://92f6a527-74e5-4f89-9bf9-2d6628f16094.ide.ahdev.cloud",
      "context_id": null,
      "group": 1,
      "status": 0
    },
    {
      "id": "c5fd2e69-e161-48df-b600-0a11663e6ff2",
      "email": "duakvzt@aluimport.com",
      "password": "Changeme2023..",
      "url": "https://c5fd2e69-e161-48df-b600-0a11663e6ff2.ide.ahdev.cloud",
      "context_id": null,
      "group": 1,
      "status": 0
    },
    {
      "id": "01d8d4e9-6a41-4984-a64f-93040b6587a2",
      "email": "az2wnezb@1sworld.com",
      "password": "Changeme2023..",
      "url": "https://01d8d4e9-6a41-4984-a64f-93040b6587a2.ide.ahdev.cloud",
      "context_id": null,
      "group": 1,
      "status": 0
    }
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