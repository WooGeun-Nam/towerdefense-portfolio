/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/game-portfolio'  // 여기에 당신의 레포지토리 이름을 넣으세요
}

module.exports = nextConfig
