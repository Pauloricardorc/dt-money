import { HeaderContainer, HeaderContent, NewTransationButton } from './styles'
import Logo from '../../assets/logo.svg'
import DCoimbra from '../../assets/dcoimbra.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export function Header() {
  const { title } = useContext(ThemeContext)
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={title === 'themeDefault' ? Logo : DCoimbra} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransationButton>Nova transação</NewTransationButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
