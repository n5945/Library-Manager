
exports.up = (knex) => {
    return knex.schema.createTable("books", (table) => {
        table.increments('id').primary();
        table.string("title").notNullable();
        table.string("author").notNullable();
        table.string("category").notNullable();
        table.string("pages").notNullable();
        table.string("publicated").notNullable();
        table.boolean("availability").defaultTo("false")
               
    })
     
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists("books")
};
