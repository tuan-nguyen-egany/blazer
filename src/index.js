const mongo = require('./mongodb');
const { UserMD, BlogMD } = require('./model');

const createUser = (name, email) => {
  return UserMD.create({ name, email });
};

const createBlog = (userId, title) => {
  return BlogMD.create({ userId, title });
};

mongo.connect().then(async () => {
  const userDoc = await createUser('Tuan', 'tuan.nguyen@egany.com');
  const blogDoc = await createBlog(userDoc._id, 'My Blog');
  console.log(blogDoc);
});
