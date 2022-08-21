import { CircleHalf } from 'phosphor-react'
import { useContext } from 'react'
import Favicon from 'react-favicon'
import { ThemeContext } from 'styled-components'
import HeadIcon from '../../assets/head.svg'
import DefaultIcon from '../../assets/react.svg'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dataFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import {
  Button,
  PriceHeighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

interface PropsTheme {
  toggleTheme(): void
}

export function Transactions({ toggleTheme }: PropsTheme) {
  const { transactions } = useContext(TransactionsContext)
  const { title } = useContext(ThemeContext)

  return (
    <div>
      <Favicon url={title === 'themeDefault' ? DefaultIcon : HeadIcon} />
      <Header />
      <Button onClick={toggleTheme}>
        <CircleHalf size={25} />
      </Button>
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHeighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHeighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dataFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
