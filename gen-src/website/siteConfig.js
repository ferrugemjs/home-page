/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/test-site/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  users,
  title: 'FerrugemJS 1.1.0' /* title for your website */,
  tagline: 'A reactive and non-intrusive library.',
  url: 'https://ferrugemjs.github.io' /* your website url */,
  baseUrl: '/home-page/' /* base url for your project */,
  projectName: 'FerrugemJS',
  headerLinks: [
    {doc: 'readme', label: 'About'},
    {doc: 'getting-started', label: 'Doc'},
    {href: 'https://github.com/ferrugemjs/library', label: 'GitHub'},
    {href: 'https://gitter.im/ferrugemjs/questions', label: 'Help'},
    //{page: 'help', label: 'Help'},
    //{blog: false, label: 'Blog'},
  ],
  /* path to images for header/footer */
  headerIcon: 'img/header-logo.png',
  footerIcon: 'img/header-logo.png',
  favicon: 'img/favicon/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#157c75',
    secondaryColor: '#156f81',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' FerrugemJS ',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'tomorrow-night-bright',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/ferrugemjs/library'
};

module.exports = siteConfig;
