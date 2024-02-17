import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

import { ReactComponent as LeftArrowIcon } from './left-arrow-icon.svg'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    color: ${variaveis.corTexto}
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  position: relative; /* Adicione essa linha para posicionar o gradiente corretamente */
  background-color: ${variaveis.corContainer};
`
export const MainContainer = styled.main`
  padding: 0px 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.div`
  color: ${variaveis.corTexto};
  padding: 40px 0;

  h2 {
    font-size: 42px;
    margin-bottom: 16px;
    letter-spacing: 1.3px;
  }

  span {
    font-weight: bold;
    letter-spacing: 1.3px;
  }
`

export const Campo = styled.input`
  height: 42px;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  border: 1px solid ${variaveis.corTexto};
  width: 100%;

  &:focus {
    border-color: ${variaveis.corContorno};
    outline: 1px solid ${variaveis.corContorno};
  }
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.corTexto};
  border-radius: 8px;
  margin-right: 8px;
  letter-spacing: 1.1px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
