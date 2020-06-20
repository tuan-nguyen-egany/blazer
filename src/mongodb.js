const mongoose = require('mongoose');
const mongoConfig = {
  ConnectionString: "mongodb://localhost:27017/blazer"
}

exports.connect = () => {
  return mongoose.connect(mongoConfig.ConnectionString, {
    user: mongoConfig.UserName,
    pass: mongoConfig.Password,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
}

mongoose.connection.on('error', (err) => {
  console.error(err);
  throw err;
});

mongoose.connection.once('connected', () => {
  console.info('Mongodb connected');
});

mongoose.connection.once('disconnected', () => {
  console.warn('Mongodb disconnected');
});