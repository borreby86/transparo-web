export default {
  config: {
    locales: ['da', 'en'],
    translations: {
      da: {
        'app.components.LeftMenu.navbrand.title': 'Transparo CMS',
        'app.components.LeftMenu.navbrand.workplace': 'Dashboard',
        'Auth.form.welcome.title': 'Velkommen til Transparo',
        'Auth.form.welcome.subtitle': 'Log ind på dit CMS',
      },
    },
    theme: {
      light: {
        colors: {
          primary100: '#f0f4f8',
          primary200: '#d9e2ec',
          primary500: '#0a0a0a',
          primary600: '#000000',
          primary700: '#000000',
          buttonPrimary500: '#0a0a0a',
          buttonPrimary600: '#000000',
        },
      },
      dark: {
        colors: {
          primary100: '#1a1a1a',
          primary200: '#2a2a2a',
          primary500: '#ffffff',
          primary600: '#f5f5f5',
          primary700: '#e5e5e5',
        },
      },
    },
  },
  bootstrap() {},
}
