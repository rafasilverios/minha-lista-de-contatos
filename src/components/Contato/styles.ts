import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const BarraConteúdo = styled.div`
  padding: 16px 0;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0 16px;
`

export const TituloTextarea = styled.h5`
  font-size: 14px;
  font-weight: bold;
`

export const Email = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Telefone = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azul};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
