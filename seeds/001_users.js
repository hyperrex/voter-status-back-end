
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1,
          remote_id: '97583',
          email: 'guy.fleegman@NSEA-Protector.com',
          password: 'KlydenIsH0t',
          birthdate: '11/5/1968',
          last_four_ssn: 5567,
          voter_status: 1,
          registration_date: '6/5/2010',
          vote_by_mail: 0,
          party: 'Republican',
          language: 'English'
        },
        { id: 2,
          remote_id: 0,
          email: 'Commander.Bortus@USS-Orville.com',
          password: 'KlydenIsH0t',
          birthdate: '5/23/1977',
          last_four_ssn: 2592,
          voter_status: 1,
          registration_date: '3/7/2016',
          vote_by_mail: 1,
          party: 'No Preference',
          language: 'Moclan'
        },
        { id: 3,
          remote_id: '334561',
          email: 'Doctor@tardis.net',
          password: 'WhoMe???',
          birthdate: '4/18/1971',
          last_four_ssn: 9275,
          voter_status: 1,
          registration_date: '1/8/2008',
          vote_by_mail: 0,
          party: 'Democratic',
          language: 'English'
        }
      ])
    })
    .then( function() {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      )
    })
};
