import { HeaderContainer, HeaderContent, NewTransationButton } from './styles'
import Logo from '../../assets/logo.svg'
import dtmoney from '../../assets/dtmoney.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Can } from '../../contexts/authorization/authorizationContext'

export function Header() {
  const { title } = useContext(ThemeContext)
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={title === 'themeDefault' ? Logo : dtmoney} alt="" />

        <Can I="create" a="Transaction">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransationButton>Nova transação</NewTransationButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </Can>
      </HeaderContent>
    </HeaderContainer>
  )
}
