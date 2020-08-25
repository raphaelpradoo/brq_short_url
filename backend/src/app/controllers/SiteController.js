import * as Yup from 'yup';
import TinyUrl from 'tinyurl';

import Site from '../models/Site';

class SiteController {
  // Store - Método para CRIAR
  async create(req, res) {
    const schema = Yup.object().shape({
      url: Yup.string().url().required().max(1000),
    });

    // Erro de validação. Alguns dos campos não estão no padrão
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validação falhou. Verifique os dados.' });
    }

    // Erro. Não é possível cadastrar um Site que já existe
    const siteExists = await Site.findOne({
      where: { url: req.body.url },
    });

    if (siteExists) {
      return res.status(400).json({ error: 'URL já cadastrada.' });
    }

    const shortUrl = await TinyUrl.shorten(req.body.url);

    // Tudo certo para CRIAR o Site
    const { id, hits, url, short_url } = await Site.create({
      hits: 0,
      url: req.body.url,
      short_url: shortUrl,
    });

    return res.json({
      id,
      hits,
      url,
      short_url,
    });
  }
}

export default new SiteController();
