import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: 'cyan',
        secondary: 'lightgreen',
        third: 'lightgray',
      },
      textColor: {
        primary: '#3490dc',
        secondary: 'green',
        info: 'blue',
      },
    },
  },
});
