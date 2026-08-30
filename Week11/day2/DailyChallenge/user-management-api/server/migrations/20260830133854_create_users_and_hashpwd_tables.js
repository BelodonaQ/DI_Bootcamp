exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("email", 255).notNullable().unique();
    table.string("username", 50).notNullable().unique();
    table.string("first_name", 100).notNullable();
    table.string("last_name", 100).notNullable();
  });

  await knex.schema.createTable("hashpwd", (table) => {
    table.increments("id");
    table.string("username", 50).notNullable().unique();

    // This column stores only a bcrypt hash—never plaintext.
    table.string("password", 60).notNullable();

    table
      .foreign("username")
      .references("username")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = async function (knex) {
  // The table containing the foreign key must be dropped first.
  await knex.schema.dropTableIfExists("hashpwd");
  await knex.schema.dropTableIfExists("users");
};
