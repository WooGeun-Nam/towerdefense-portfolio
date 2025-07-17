const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/towerdefense-portfolio' : '',
  assetPrefix: isProd ? '/towerdefense-portfolio/' : '',
  trailingSlash: true,
};
