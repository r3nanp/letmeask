import styled, { css } from 'styled-components'

export const Container = styled.button`
  ${({ theme }) => css`
    height: 3.2rem;
    border-radius: 8px;
    font-weight: 500;
    background: ${theme.colors.purple};
    color: ${theme.colors.white};
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter ${theme.transition.fast};

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}
`
