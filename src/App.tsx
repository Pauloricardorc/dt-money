import { DefaultTheme, ThemeProvider } from 'styled-components'
import { buildAbility } from './contexts/authorization/ability'
import { GuardContext } from './contexts/authorization/authorizationContext'
import { getAbilityByUser } from './contexts/authorization/userAbilities'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'

import themeDefault from './styles/themes/default'
import dtmoney from './styles/themes/dtmoney'
import { usePersistentState } from './utils/usePersistedState'

export function App() {
  const [theme, setTheme] = usePersistentState<DefaultTheme>(
    'theme',
    themeDefault,
  )
  const useAbility = getAbilityByUser('admin')
  const ability = buildAbility(useAbility)

  const toggleTheme = () => {
    setTheme(theme.title === 'themeDefault' ? dtmoney : themeDefault)
  }

  return (
    <ThemeProvider theme={theme}>
      <GuardContext.Provider value={ability}>
        <GlobalStyle />

        <TransactionsProvider>
          <Transactions toggleTheme={toggleTheme} />
        </TransactionsProvider>
      </GuardContext.Provider>
    </ThemeProvider>
  )
}
