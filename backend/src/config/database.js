module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'brq',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
