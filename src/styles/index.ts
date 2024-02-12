import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  position: relative; /* Adicione essa linha para posicionar o gradiente corretamente */

  /* Adicione o gradiente como um elemento filho */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Certifique-se de que o gradiente está atrás do conteúdo */
    background: linear-gradient(
      -45deg,
      ${variaveis.laranja},
      ${variaveis.rosa},
      ${variaveis.azulClaro},
      ${variaveis.verdeClaro}
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export default EstiloGlobal
