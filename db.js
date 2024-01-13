import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import lodash from 'lodash';

// Read or create db.json
const defaultData = {
  accounts: [
    // Group 1
    {
      id: 'caf276f4',
      email: 'zasalcoym@nextsuns.com',
      password: 'Changeme2023..',
      url: 'https://caf276f4-bf80-4535-ab72-7c5a46109666.ide.ahdev.cloud',
      context_id: null,
      group: 1,
      status: 0 // 0: offline, 1: online
    },
    {
      id: 'fb281a10',
      email: 'zabhswu@datadudi.com',
      password: 'Changeme2023..',
      url: 'https://fb281a10-c9e3-4d85-aaf6-2db2bdd42187.ide.ahdev.cloud',
      context_id: null,
      group: 1,
      status: 0 // 0: offline, 1: online
    },
    {
      id: '6fd42fb8',
      email: 'ior4bqs@4save.net',
      password: 'Changeme2023..',
      url: 'https://6fd42fb8-7805-478e-9ce8-4356bd7b07bf.ide.ahdev.cloud',
      context_id: null,
      group: 1,
      status: 0 // 0: offline, 1: online
    },
    {
      id: '671aab12',
      email: 'm4fr5fns@coffeejadore.com',
      password: 'Changeme2023..',
      url: 'https://671aab12-e93a-4716-bf0a-21e3161e5180.ide.ahdev.cloud',
      context_id: null,
      group: 1,
      status: 0 // 0: offline, 1: online
    },

    // Group 2
    {
      id: 'c37f5cb0',
      email: 'czs9kvzfd@bigddns.org',
      password: 'Changeme2023..',
      url: 'https://c37f5cb0-a6ef-48de-a8db-4346e7cc95a9.ide.ahdev.cloud',
      context_id: null,
      group: 2,
      status: 0 // 0: offline, 1: online
    },
    {
      id: '6275d7d0',
      email: 'm48vlwvbq@coffeejadore.com',
      password: 'Changeme2023..',
      url: 'https://6275d7d0-f593-45f8-84f4-9e2b0e6d7f0c.ide.ahdev.cloud',
      context_id: null,
      group: 2,
      status: 0 // 0: offline, 1: online
    },
    {
      id: '4dc9da98',
      email: 'za5edwjx@camera47.net',
      password: 'Changeme2023..',
      url: 'https://4dc9da98-b3a8-4b9d-a519-77bf180c7058.ide.ahdev.cloud',
      context_id: null,
      group: 2,
      status: 0 // 0: offline, 1: online
    },
    {
      id: 'c0ec9662',
      email: 'm4e14rn@happy9toy.com',
      password: 'Changeme2023..',
      url: 'https://c0ec9662-5fea-450f-9032-bde5661174a8.ide.ahdev.cloud',
      context_id: null,
      group: 2,
      status: 0 // 0: offline, 1: online
    },
    {
      id: '9429776d',
      email: 'zayj8ifj@nickmxh.com',
      password: 'Changeme2023..',
      url: 'https://9429776d-37b0-4b4a-adad-0ae5ef78b84d.ide.ahdev.cloud',
      context_id: null,
      group: 2,
      status: 0 // 0: offline, 1: online
    },
    {
      id: '1dc0b12f',
      email: 'duexw@mikfarm.com',
      password: 'Changeme2023..',
      url: 'https://1dc0b12f-4fda-462f-aafb-d1206722dde7.ide.ahdev.cloud',
      context_id: null,
      group: 2,
      status: 0 // 0: offline, 1: online
    },
    {
      id: '8db16395',
      email: 'tmjaqtf@camera47.net',
      password: 'Changeme2023..',
      url: 'https://8db16395-cb7f-42d2-b6b4-1f9fcda5e2c1.ide.ahdev.cloud',
      context_id: null,
      group: 2,
      status: 0 // 0: offline, 1: online
    },
    {
      id: 'c70d36f1',
      email: 'tmsykt@camera47.net',
      password: 'Changeme2023..',
      url: 'https://c70d36f1-d9a7-4b1a-af54-8c6cdb6e1b5f.ide.ahdev.cloud',
      context_id: null,
      group: 2,
      status: 0 // 0: offline, 1: online
    },
    {
      id: '9f310f9f',
      email: 'tmmcjxwm@bigddns.org',
      password: 'Changeme2023..',
      url: 'https://9f310f9f-e952-4f20-8229-293bcfea062b.ide.ahdev.cloud',
      context_id: null,
      group: 2,
      status: 0 // 0: offline, 1: online
    },
    {
      id: '7d5ab4aa',
      email: 'ioqtyvha@nhmvn.com',
      password: 'Changeme2023..',
      url: 'https://7d5ab4aa-7537-4520-9503-c4894763a034.ide.ahdev.cloud',
      context_id: null,
      group: 2,
      status: 0 // 0: offline, 1: online
    },

    // Group 3
    {
      id: 'da257db5',
      email: 'du251mndg@vncctv.org',
      password: 'Changeme2023..',
      group: 3,
      url: 'https://da257db5-c975-4cc9-91bd-551908e25d18.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '3d0cddf6',
      email: 'dullfmc@bigddns.net',
      password: 'Changeme2023..',
      group: 3,
      url: 'https://3d0cddf6-a868-4f89-b6c9-8597a8f73ca6.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'eff92ab6',
      email: 'akreodxy@fastddns.net',
      password: 'Changeme2023..',
      group: 3,
      url: 'https://eff92ab6-5bbc-45ec-837b-5b8620c1b50a.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '0c09aec0',
      email: 'mtz9et@bigddns.org',
      password: 'Changeme2023..',
      group: 3,
      url: 'https://0c09aec0-1b20-46bd-86ac-4518ca33fd63.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '9d1ef843',
      email: 'mtjtf@acc1s.net',
      password: 'Changeme2023..',
      group: 3,
      url: 'https://9d1ef843-2c12-44e9-9fdd-2e976f544cf7.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '4a0c9ee8',
      email: 'm9yotku@pingddns.com',
      password: 'Changeme2023..',
      group: 3,
      url: 'https://4a0c9ee8-df67-41ad-978d-8eb65b21eaa6.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '040fd796',
      email: 'tmz9vmdu@bigddns.net',
      password: 'Changeme2023..',
      group: 3,
      url: 'https://040fd796-f2d5-4702-9a39-306b471b59f3.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '98f02eb0',
      email: 'ioi1ldsce@bigddns.net',
      password: 'Changeme2023..',
      group: 3,
      url: 'https://98f02eb0-de3a-4114-b873-6a6e2a89d6dd.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '9a8424aa',
      email: 'm9sdmcr@pingddns.org',
      password: 'Changeme2023..',
      group: 3,
      url: 'https://9a8424aa-3e50-4b2b-a111-3f08e3ccefaf.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'f05fb053',
      email: 'azrpjos@bigddns.net',
      password: 'Changeme2023..',
      group: 3,
      url: 'https://f05fb053-a8b8-4e40-9f39-5264a59b6aca.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },

    // Group 4
    {
      id: 'e5dfe976',
      email: 'iojlqafx@bigddns.com',
      password: 'Changeme2023..',
      group: 4,
      url: 'https://e5dfe976-48e0-4890-a675-cf6bbcc3f9dc.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '6510a2ad',
      email: 'tmcyri@libinit.com',
      password: 'Changeme2023..',
      group: 4,
      url: 'https://6510a2ad-11fb-45d5-8ef5-ffe8458e2721.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '85c044ef',
      email: 'zawhukiu@pingddns.org',
      password: 'Changeme2023..',
      group: 4,
      url: 'https://85c044ef-85f9-4d90-b584-6f0cfbea604e.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '6cb33c2e',
      email: 'cz0gcw@giodaingan.com',
      password: 'Changeme2023..',
      group: 4,
      url: 'https://6cb33c2e-5d4b-47b7-9636-5ff87da31c1d.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '6e59d52a',
      email: 'm9052gdap@acc1s.net',
      password: 'Changeme2023..',
      group: 4,
      url: 'https://6e59d52a-92ed-4a17-bf11-830b4363c3dd.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'fb3b377b',
      email: 'duelful@bigddns.net',
      password: 'Changeme2023..',
      group: 4,
      url: 'https://fb3b377b-27a3-48de-89ac-82befde9d362.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'e9538ba4',
      email: 'dufxrzb@giodaingan.com',
      password: 'Changeme2023..',
      group: 4,
      url: 'https://e9538ba4-1f8c-487a-9c45-a8cb61ddaf26.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '4b6833f1',
      email: 'ionlw@giodaingan.com',
      password: 'Changeme2023..',
      group: 4,
      url: 'https://4b6833f1-4b69-4524-88c4-cdd84059d6a5.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'df97327c',
      email: 'mtphytqan@nextsuns.com',
      password: 'Changeme2023..',
      group: 4,
      url: 'https://df97327c-64df-4233-ae27-2359dd7beb0f.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '176706b0',
      email: 'cz7ziw@likemovie.net',
      password: 'Changeme2023..',
      group: 4,
      url: 'https://176706b0-c6fa-450b-b7c9-3f67d18da054.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },

    // Group 5
    {
      id: '5d64987e',
      email: 'duqd9bk@acc1s.com',
      password: 'Changeme2023..',
      group: 5,
      url: 'https://5d64987e-c5ec-4229-add3-f046e5b32bcb.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '4a9e39b2',
      email: 'zahqnmit@giodaingan.com',
      password: 'Changeme2023..',
      group: 5,
      url: 'https://4a9e39b2-d4fa-4568-a153-77c226d22886.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '4d0a924b',
      email: 'du3rqs@pingddns.com',
      password: 'Changeme2023..',
      group: 5,
      url: 'https://4d0a924b-4dcf-4d54-9097-4245451053c9.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '4216063f',
      email: 'az46sbg@pingddns.net',
      password: 'Changeme2023..',
      group: 5,
      url: 'https://4216063f-8361-4096-8c32-e7d183115c0b.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '9412295f',
      email: 'azbgt@4save.net',
      password: 'Changeme2023..',
      group: 5,
      url: 'https://9412295f-dec8-496e-b8e5-0355d1796e01.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '4d1c9cc1',
      email: 'tmcdai@pingddns.net',
      password: 'Changeme2023..',
      group: 5,
      url: 'https://4d1c9cc1-0795-4430-901c-8684e4ffc02c.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '7f43ac0a',
      email: 'akq7twqb@fastddns.org',
      password: 'Changeme2023..',
      group: 5,
      url: 'https://7f43ac0a-8e0c-4cd7-aaa7-34d55736d066.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'a1f6efff',
      email: 'm9hhjy@vncctv.org',
      password: 'Changeme2023..',
      group: 5,
      url: 'https://a1f6efff-0433-4ee5-91ce-f32c75a0a1a9.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '4b9e3453',
      email: 'ioj1vdmoq@pingddns.net',
      password: 'Changeme2023..',
      group: 5,
      url: 'https://4b9e3453-724e-4b6e-8775-ed646bb03a50.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '5366d2a7',
      email: 'ak4ow@nextsuns.com',
      password: 'Changeme2023..',
      group: 5,
      url: 'https://5366d2a7-7852-4bc3-a659-d934e92a1219.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },

    // Group 6
    {
      id: '8916afa2',
      email: 'ak2pd@tatadidi.com',
      password: 'Changeme2023..',
      group: 6,
      url: 'https://8916afa2-6199-4391-a32d-e91c3fc52c48.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '151618e7',
      email: 'zafsxi@fastddns.net',
      password: 'Changeme2023..',
      group: 6,
      url: 'https://151618e7-78c7-4a42-af1f-f145192d9df5.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'd18c464b',
      email: 'zaucvzy@mp3oxi.com',
      password: 'Changeme2023..',
      group: 6,
      url: 'https://d18c464b-5081-45bd-99ba-9fcb228da0ba.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '993e0d6a',
      email: 'tm3qfwrb@coffeeazzan.com',
      password: 'Changeme2023..',
      group: 6,
      url: 'https://993e0d6a-466b-428f-b936-5c566a8b8eca.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'e9223fa0',
      email: 'ionyq@mikrotikx.com',
      password: 'Changeme2023..',
      group: 6,
      url: 'https://e9223fa0-eb67-4fac-b323-478b0b278332.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '01dda112',
      email: 'cz47abl@taxibmt.com',
      password: 'Changeme2023..',
      group: 6,
      url: 'https://01dda112-13de-4ce0-9f33-2dc4ce428641.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'a0dc9d7c',
      email: 'az3rype@vinakoop.com',
      password: 'Changeme2023..',
      group: 6,
      url: 'https://a0dc9d7c-173f-4e77-8bf6-8cf7327f6a50.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '5964b5aa',
      email: 'czuskvog@x1ix.com',
      password: 'Changeme2023..',
      group: 6,
      url: 'https://5964b5aa-c506-424a-aebe-95aeea654051.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '06122325',
      email: 'mte0krm@mikfarm.com',
      password: 'Changeme2023..',
      group: 6,
      url: 'https://06122325-fe9a-4e4b-92ff-cf818e6ced03.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '234ea7b8',
      email: 'ak71wglbr@coffeeazzan.com',
      password: 'Changeme2023..',
      group: 6,
      url: 'https://234ea7b8-a097-4512-bb88-5533503c34be.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },

    // Group 7
    {
      id: 'd304b65f',
      email: 'tmz0zf@vinakop.com',
      password: 'Changeme2023..',
      group: 7,
      url: 'https://d304b65f-c987-4651-bb77-98e4b92eaae9.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '22c7a2bd',
      email: 'akxbha@camera47.net',
      password: 'Changeme2023..',
      group: 7,
      url: 'https://22c7a2bd-2960-4fa2-9f10-e9053abc3a26.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '03ff18e4',
      email: 'mtwg7tk@diemhenvn.com',
      password: 'Changeme2023..',
      group: 7,
      url: 'https://03ff18e4-0c3a-4c03-9548-31754fe3b7bf.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'c0fb31cc',
      email: 'iogbrgh@fbhotro.com',
      password: 'Changeme2023..',
      group: 7,
      url: 'https://c0fb31cc-7bd8-4556-8e67-d775df08d535.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '288a1b16',
      email: 'azx2zzfmr@nextsuns.com',
      password: 'Changeme2023..',
      group: 7,
      url: 'https://288a1b16-aa69-4e1d-92d7-6b947243504b.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '0a2ab84f',
      email: 'du0yl@coffeejadore.com',
      password: 'Changeme2023..',
      group: 7,
      url: 'https://0a2ab84f-66af-47d8-ba38-75a311b8e27e.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '04b48d88',
      email: 'azc5xqbyq@likemovie.net',
      password: 'Changeme2023..',
      group: 7,
      url: 'https://04b48d88-eb42-4d15-bc69-f0f92e4c1084.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '9626b09d',
      email: 'czkqzim@bigddns.com',
      password: 'Changeme2023..',
      group: 7,
      url: 'https://9626b09d-4eac-4816-bd35-42c35dc24c52.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '3c209090',
      email: 'dupcvwzm@bigddns.org',
      password: 'Changeme2023..',
      group: 7,
      url: 'https://3c209090-51cf-4e4a-a54b-d3df93ebbe8c.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'bced742d',
      email: 'tmcgygfg@fbhotro.com',
      password: 'Changeme2023..',
      group: 7,
      url: 'https://bced742d-e7e5-4431-9554-2f4a04e739bc.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },

    // Group 8
    {
      id: '96feb0c3',
      email: 'iofxmzn@vinakop.com',
      password: 'Changeme2023..',
      group: 8,
      url: 'https://96feb0c3-795e-4abe-b59c-57c0dab33fd7.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '7a4edb2b',
      email: 'm4x1ybhz@nuoifb.com',
      password: 'Changeme2023..',
      group: 8,
      url: 'https://7a4edb2b-006f-44ae-ba12-7644d882a368.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '701968c9',
      email: 'm4yrtkp@hiemail.net',
      password: 'Changeme2023..',
      group: 8,
      url: 'https://701968c9-4447-429d-a3f1-7ff0232e75e7.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '46043284',
      email: 'tm4oc@pingddns.com',
      password: 'Changeme2023..',
      group: 8,
      url: 'https://46043284-9226-498f-9463-d6146387efd2.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'e65659f5',
      email: 'dujdd@acc1s.com',
      password: 'Changeme2023..',
      group: 8,
      url: 'https://e65659f5-a2e2-4770-91fc-62d9a95b3df2.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '86b96d75',
      email: 'm47k6tub@4save.net',
      password: 'Changeme2023..',
      group: 8,
      url: 'https://86b96d75-985d-4277-9cc5-a833fc30acb0.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '0f37df50',
      email: 'm4hef@nickmxh.com',
      password: 'Changeme2023..',
      group: 8,
      url: 'https://0f37df50-bd0d-4596-8d87-bfb5b6548cc9.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '1a6155c0',
      email: 'duy8xyve@xehop.org',
      password: 'Changeme2023..',
      group: 8,
      url: 'https://1a6155c0-7e73-4441-9d80-48be1a6c22ea.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'bebb8816',
      email: 'ioswmqgv@diemhenvn.com',
      password: 'Changeme2023..',
      group: 8,
      url: 'https://bebb8816-adef-4c26-8453-746a6278aa0f.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '6ce309d2',
      email: 'czctgn@giodaingan.com',
      password: 'Changeme2023..',
      group: 8,
      url: 'https://6ce309d2-6f3c-4a76-89e8-a6bf35af820f.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },

    // Group 9
    {
      id: 'd66b8c2d',
      email: 'iodygho@coffeejadore.com',
      password: 'Changeme2023..',
      group: 9,
      url: 'https://d66b8c2d-deac-494c-8daa-ca3a55530f21.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '23577b45',
      email: 'm9a2fdjf@taxibmt.net',
      password: 'Changeme2023..',
      group: 9,
      url: 'https://23577b45-1a16-4227-9f41-4ada8423a566.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '9ec4546c',
      email: 'mt5fn@pertera.com',
      password: 'Changeme2023..',
      group: 9,
      url: 'https://9ec4546c-2cf0-4329-b63f-35d982d79379.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'f0a0147c',
      email: 'azlhafatw@nickmxh.com',
      password: 'Changeme2023..',
      group: 9,
      url: 'https://f0a0147c-b37c-497d-b4ce-044333bdef93.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '049adb05',
      email: 'czxq6oo@taxibmt.com',
      password: 'Changeme2023..',
      group: 9,
      url: 'https://049adb05-e385-417e-b831-bb4ba47483cc.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '695d7bff',
      email: 'az5rgol@nextsuns.com',
      password: 'Changeme2023..',
      group: 9,
      url: 'https://695d7bff-bc78-44fd-896d-1595ed8cdb9c.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '762afaae',
      email: 'm9x1usjl@4save.net',
      password: 'Changeme2023..',
      group: 9,
      url: 'https://762afaae-a790-422c-8d60-1f63dc894089.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '1f490696',
      email: 'iogfxdbww@nickmxh.com',
      password: 'Changeme2023..',
      group: 9,
      url: 'https://1f490696-13d3-40cf-b64e-29d254e58faa.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'fc20501d',
      email: 'zawilqagf@mikrotikx.com',
      password: 'Changeme2023..',
      group: 9,
      url: 'https://fc20501d-fe30-4509-a39a-88d5ca161525.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: 'f8c8aed4',
      email: 'tmxkiqkg@pingddns.com',
      password: 'Changeme2023..',
      group: 9,
      url: 'https://f8c8aed4-fed3-4264-992d-f108b2ed9ee1.ide.ahdev.cloud',
      context_id: null,
      status: 0
    },
    {
      id: '1304ee01',
      email: 'duadx@bookgame.org',
      password: 'Changeme2023..',
      group: 9,
      url: 'https://1304ee01-2a9e-4dee-b911-b9dc89b56449.ide.ahdev.cloud',
      context_id: null,
      status: 0
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