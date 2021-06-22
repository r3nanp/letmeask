import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`

export const Aside = styled.aside`
  flex: 7;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7.5rem 5rem;

  ${({ theme }) => css`
    background: ${theme.colors.purple};
    color: ${theme.colors.white};

    strong {
      font: ${theme.font.bold} ${theme.font.sizes.xlarge} ${theme.font.heading};
      line-height: 2.9rem;
      margin-top: ${theme.spacings.small};
    }

    p {
      font-size: ${theme.font.sizes.medium};
      line-height: 2rem;
      margin-top: ${theme.spacings.small};
      color: ${theme.colors.details};
    }
  `}

  > img {
    max-width: 20rem;
  }
`

export const MainContent = styled.main`
  flex: 8;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 20rem;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  ${({ theme }) => css`
    .create-room {
      margin-top: 3rem;
      height: 3.2rem;
      border-radius: 8px;
      font-weight: 500;
      background: ${theme.colors.danger};
      color: ${theme.colors.white};

      display: flex;
      align-items: center;
      justify-content: center;
      transition: filter ${theme.transition.fast};

      &:hover {
        filter: brightness(0.9);
      }

      > .logo-google {
        margin-right: 8px;
        width: 1.5rem;
      }
    }

    .separator {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray.medium};

      margin: 2rem 0;
      display: flex;
      align-items: center;

      &::before {
        content: '';
        flex: 1;
        height: 1px;
        background: ${theme.colors.gray.medium};
        margin-right: 1rem;
      }

      &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: ${theme.colors.gray.medium};
        margin-right: 1rem;
      }
    }

    form {
      input {
        height: 3.125rem;
        border-radius: 8px;
        padding: 0 ${theme.spacings.xxsmall};
        border: 1px solid ${theme.colors.gray.medium};

        &:focus {
          outline: 2px solid ${theme.colors.purple};
        }
      }

      button {
        margin-top: ${theme.spacings.xxsmall};
      }

      input,
      button {
        width: 100%;
      }
    }
  `}
`
