const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
  purge: {
    enabled: !dev,
    content: [
      './src/**/*.svelte',
      './src/**/*.html',
    ],
    options: {
      defaultExtractor: content => {
        const tokens = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        return tokens.map(m => {
          if (!m.startsWith('class:')) return m;
          const equalIndex = m.indexOf('=');
          if (equalIndex !== -1) return m.slice(6, equalIndex);
          const slashIndex = m.indexOf('/');
          if (slashIndex !== -1) return m.slice(6, slashIndex);
          return m.slice(6);
        });
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
