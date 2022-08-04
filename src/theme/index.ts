import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: {
        default: '#f28db2',
        _dark: '#f2c9e0',
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode('#737373', '#f2f2f2')(props),
        bg: mode('#f2f2f2', '#737373')(props),
      },
    }),
  },
  shadows: {
    outline: '0 0 0 3px rgba(246, 173, 85, 0.6)',
  },
});

export default theme;
