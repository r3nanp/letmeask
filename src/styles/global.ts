import {
  createGlobalStyle,
  DefaultTheme,
  css,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

export const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  input, button {
    border: none;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

    ${({ theme }) => css`
      body {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
      }

      body,
      input,
      button,
      textarea {
        font-weight: ${theme.font.normal};
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.xsmall};
      }
    `}
`
