export default {
  meta: {
    // title: 'Project title',
    name: 'Project name',
    author: 'Novanet Studio <info@novanet.studio>',
    description: 'Project description',
    theme_color: '#fff',
    lang: 'es',
  },
  manifest: {
    name: 'Project name',
    short_name: 'Project short_name',
    description: 'Project description',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#fff',
  },
  icon: { source: 'static/favicon.png' },
  workbox: {
    enabled: false,
  },
};
