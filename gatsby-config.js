module.exports = {
  siteMetadata: {
    title: 'How to Make Snake Game',
    title1: '뱀 게임 만드는 법',
    description:
      '시작하는 프로그래머를 위한 인터랙티브 튜토리얼. JavaScript를 배웠고 React의 ' +
      'setState도 알지만 "프로그램을 짜는 법"을 배우진 못했다고 느끼나요? 고전 게임을 만들면서 ' +
      '프로그램을 조감하는 기분을 만끽해보세요.',
    author: '@kimdhoe',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-emotion',
      options: {},
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
