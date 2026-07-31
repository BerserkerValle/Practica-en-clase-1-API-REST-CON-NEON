module.exports = {
  DATABASE_URL:
    process.env.DATABASE_URL ||
    'postgresql://neondb_owner:npg_sEpRQz9lU5V@ep-solitary-bonus-ayinz3y3-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};