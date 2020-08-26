import TinyUrl from 'tinyurl';

// Encurtando a URL do site Globo
test('Shortening Globo`s URL', async () => {
  const shortUrl = await TinyUrl.shorten('https://www.globo.com/');
  expect(shortUrl).toBe('https://tinyurl.com/yxaj6osz');
});

// Resolvendo a URL encurtada do site Globo
test('Resolvening Globo`s URL', async () => {
  const shortUrl = await TinyUrl.resolve('https://tinyurl.com/yxaj6osz');
  expect(shortUrl).toBe('https://www.globo.com/');
});

// Teste com erro proposital. Não deve passar.
test('Resolvening Globo`s URL with error', async () => {
  const shortUrl = await TinyUrl.resolve('https://tinyurl.com/yxaj6osz');
  // Removido parte da URL para forçar o erro
  expect(shortUrl).toBe('https://www.glob');
});
