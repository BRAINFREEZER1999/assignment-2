const DATABASE_URL = process.env.DATABASE_URL || '';
const [_, username, password, host, port, dbname] = DATABASE_URL.match(/postgres:\/\/(.*):(.*?)@(.*?):(.*?)\/(.*)/) || [];

module.exports = {
    HOST: "db",
    USER: "postgres",
    PASSWORD: "postgres",
    DB: "postgres",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
