module.exports = {
    title: 'AgileTs',
    tagline: 'Global State and Logic Framework for reactive Applications',
    url: 'https://agile-ts.org',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'agile/agile-ts',
    projectName: 'agile',
    themes: ['@docusaurus/theme-live-codeblock'],
    plugins: ['docusaurus-plugin-sass' /* @docusaurus/plugin-google-analytics (Not necessary because it automatically gets added) */],
    themeConfig: {
        hideableSidebar: true,
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        announcementBar: {
            id: 'github-star',
            content:
                '⭐️ If you like AgileTs, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/agile-ts/agile">GitHub</a>! ⭐️',
            backgroundColor: "#9c9abf"
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula'),
        },
        navbar: {
            title: 'AgileTs',
            hideOnScroll: true,
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {to: 'blog', label: 'Blog', position: 'left'},
                // right
                {
                    href: 'https://github.com/agile-ts/agile',
                    position: 'right',
                    className: 'header-github-link header-icon-link',
                    'aria-label': 'GitHub repository',
                },
                {
                    href: 'https://discord.gg/FTqeMNCxw7',
                    position: 'right',
                    className: 'header-discord-link header-icon-link',
                    'aria-label': 'Discord',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Get Started',
                            to: 'docs/',
                        }
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/agile-ts',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/9Edsb3z',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/DevBenno',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/agile-ts/agile',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} BennoDev`,
        },
        googleAnalytics: {
            trackingID: 'G-QH7WTHYFN9',
            anonymizeIP: true, // Should IPs be anonymized?
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    path: 'docs',
                    admonitions: {
                        icons: "emoji"
                    },
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/agile-ts/documentation/tree/master',
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: true,
                    remarkPlugins: [
                        [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
                    ],
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        'https://github.com/agile-ts/documentation',
                },
                theme: {
                    customCss: [require.resolve('./src/css/custom.scss')],
                },
            },
        ],
    ],
};
