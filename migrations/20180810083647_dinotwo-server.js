
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dinotwo-server', (table) => {
        table.increments();
        table.text('name');
        table.text('image');
        table.text('skills');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dinotwo-server');
};
