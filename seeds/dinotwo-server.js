
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dinotwo-server').del()
    .then(function () {
      // Inserts seed entries
      return knex('dinotwo-server').insert([
        {id: 1, name: 'T-Rex', image:'./assets/dino-1.png', skills:'[
          "stepping on things",
          "musing on life",
          "MS Office"
          ]'},
        {id: 2, name: 'Utahraptor', image:'./assets/dino3.png', skills:'[
          "being contrary"
          ]'},
        {id: 3, name: 'Dromiceiomimus', image:'./assets/dino-2.png', skills:'[
          "Java",
          "Ninja",
          "MongoDB",
          "Git and Github",
          "Agile"
          ]'}
      ]);
    });
};
