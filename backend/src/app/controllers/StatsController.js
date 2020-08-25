import Site from '../models/Site';

class StatsController {
  // Index - Método para LISTAR
  async index(req, res) {
    // Quantidade de hits em todas as urls do sistema
    const hits = await Site.sum('hits');

    // Quantidade de urls cadastradas
    const urlCount = await Site.count();

    // 10 Urls mais acessadas
    const topUrls = await Site.findAll({
      limit: 10,
      order: [['hits', 'DESC']],
      attributes: ['id', 'hits', 'url', 'short_url'],
    });

    return res.json({ hits, urlCount, topUrls });
  }
}

export default new StatsController();
