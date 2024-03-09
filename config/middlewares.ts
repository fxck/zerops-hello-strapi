export default [
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', '*.storage-prg1.zerops.dev'],
          'media-src': ["'self'", 'data:', 'blob:', '*.storage-prg1.zerops.dev'],
          upgradeInsecureRequests: null
        }
      }
    }
  },
  'strapi::logger',
  'strapi::errors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::cors',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
