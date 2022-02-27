// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Victory Token',
  tagline: 'Veterans Helping Veterans',
  url: 'https://VictoryToken.online',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'david.richard.patton@gmail.com', // Usually your GitHub org/user name.
  projectName: 'whitepaper', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/DavidRPatton/whitepaper',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/DavidRPatton/whitepaper',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Help Home',
        logo: {
          alt: 'Victory Logo',
          src: 'img/victory.png',
        },
        items: [
          {to: 'http://www.victorytoken.online', 
          label: 'Token Home', 
          position: 'left'},
          
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'How To Buy',
          },
          {to: 'docs/Whitepaper/intro', 
          label: 'Whitepaper', 
          position: 'left'},
          
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Whitepaper',
                to: 'docs/Whitepaper/intro',
              },
              {
                label: 'How To Buy',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Our Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/Victory_Token',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/k6jKrXC9Pe',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/victoryxtoken',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/MyVictoryToken/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/victory.token/',
              },
            ],
          },
          {
            title: 'More',
            items: [
             //{
             //   label: 'Blog',
             //   to: '/blog',
             // },
              {
                label: 'Token Home',
                href: 'http://VictoryToken.online',
              },
            ],
          },
        ],
        
        
        copyright: `Copyright © ${new Date().getFullYear()} Victory Token.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;




