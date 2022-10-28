import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  styles: {
    global: {
        body: {
            bg: 'black500'
        }
    }
  },
  colors: {
    black500: '#171717',
    yellow700: '#FFAD10',
    yellow400: '#ce8b0c'
  }
});