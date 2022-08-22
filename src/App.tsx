import { useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { buildAbility } from './contexts/authorization/ability'
import { GuardContext } from './contexts/authorization/authorizationContext'
import {
  getAbilityByUser,
  UserType,
} from './contexts/authorization/userAbilities'
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
  const [user, setUser] = useState<UserType>('user')
  const useAbility = getAbilityByUser(user)
  const ability = buildAbility(useAbility)

  const toggleTheme = () => {
    setTheme(theme.title === 'themeDefault' ? dtmoney : themeDefault)
  }

  return (
    <ThemeProvider theme={theme}>
      <GuardContext.Provider value={ability}>
        <GlobalStyle />

        <button onClick={() => setUser(user === 'user' ? 'admin' : 'user')}>
          {user}
        </button>
        <TransactionsProvider>
          <Transactions toggleTheme={toggleTheme} />
        </TransactionsProvider>
      </GuardContext.Provider>
    </ThemeProvider>
  )
}
