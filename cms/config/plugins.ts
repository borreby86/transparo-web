export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
  i18n: {
    config: {
      defaultLocale: 'da',
      locales: ['da', 'en'],
    },
  },
})
