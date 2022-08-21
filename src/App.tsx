import { DefaultTheme, ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'

import themeDefault from './styles/themes/default'
import dcoimbra from './styles/themes/dcoimbra'
import { usePersistentState } from './utils/usePersistedState'

export function App() {
  const [theme, setTheme] = usePersistentState<DefaultTheme>(
    'theme',
    themeDefault,
  )

  const toggleTheme = () => {
    setTheme(theme.title === 'themeDefault' ? dcoimbra : themeDefault)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions toggleTheme={toggleTheme} />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
