const users = [
  {
    id: 1,
    name: 'John',
    age: 24,
  },
  {
    id: 2,
    name: 'Jane',
    age: 22,
  },
  {
    id: 3,
    name: 'Bob',
    age: 23,
  }
];

function getUserById( id, callback ) {
  const user = users.find( function(user){
    return user.id === id;
  });

  if( !user ) {
    return callback(`User not found with id ${id}`);
  }

  return callback(null, user);
}

module.exports = {
  getUserById
}