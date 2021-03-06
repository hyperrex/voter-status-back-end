
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary()
      table.integer('remote_id') // assuming I can connect to an endpoint, I might be able to get this
      table.string('email').notNullable().unique('email')
      table.string('password').notNullable()
      // replace above line with: table.specificType('hashedPassword', 'char(60)').notNullable();
      table.integer('bd_month')
      table.integer('bd_day')
      table.integer('bd_year')
      table.integer('last_four_ssn') // later, also add in CDL
      table.string('address')
      /*
      table.integer('street_number')
      table.string('direction_prefix')
      table.string('street')
      table.string('street_type')
      table.string('city')
      table.string('state')
      table.integer('zipcode')
      */
      table.boolean('voter_status')
      table.string('registration_date')
      table.boolean('vote_by_mail')
      table.string('party')
      table.string('language')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
}
