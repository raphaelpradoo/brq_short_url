import Sequelize, { Model } from 'sequelize';

class Site extends Model {
  static init(sequelize) {
    super.init(
      {
        hits: Sequelize.INTEGER,
        url: Sequelize.STRING,
        short_url: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Site;
