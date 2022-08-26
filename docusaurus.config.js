// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YellowBud Robot',
  tagline: '黄芽机器人官方网站',
  url: 'https://bot.yellowbud.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BC413', // Usually your GitHub org/user name.
  projectName: 'mtr', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'YellowBud Robot',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/BC413/mtr',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '条款',
            items: [
              {
                label: '使用条款',
                to: '/policies/tos',
              },
              {
                label: '免责声明',
                to: '/policies/privacy',
              },
              {
                label: '使用与转载规范',
                to: '/policies/repost',
              },
              {
                label: '版权与许可',
                to: '/policies/licenses',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'YellowBud 官方网站',
                href: 'https://www.yellowbud.net',
              },
              {
                label: 'Starsource 星之源',
                href: 'https://www.starsource.org.cn',
              },
              {
                label: 'NiuBoss123',
                href: 'https://www.niuboss123.com',
              },
            ],
          },
        ],
        copyright: `
        <p><small><br><br><br>
        Copyright © ${new Date().getFullYear()} <a href="https://bot.yellowbud.net">Yellowbud Robot Operation Team</a>. Built with <a href="https://docusaurus.io/">Docusaurus</a>.<br>
        </small></p>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
