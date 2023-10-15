const DATABASE_URL = process.env.DATABASE_URL || '';
const [_, username, password, host, port, dbname] = DATABASE_URL.match(/postgres:\/\/(.*):(.*?)@(.*?):(.*?)\/(.*)/) || [];

module.exports = {
    HOST: host || "db",
    USER: username || "postgres",
    PASSWORD: password || "postgres",
    DB: dbname || "postgres",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
