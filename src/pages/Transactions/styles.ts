import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  border: 0;
  border-radius: 50%;
  right: 5px;
  bottom: 5px;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary300};
`

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme.colors['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHeighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHeighlight = styled.span<PriceHeighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme.colors.primary300
      : props.theme.colors['red-300']};
`
