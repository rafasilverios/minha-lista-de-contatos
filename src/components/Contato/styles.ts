import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 32px;
  margin-bottom: 32px;
  border-radius: 16px;
  border: 0.1px solid ${variaveis.corContorno};
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
  color: ${variaveis.corTextArea};
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  border-radius: 4px;
  background-color: transparent;

  &:focus {
    border-color: ${variaveis.corContorno};
    outline: 2px solid ${variaveis.corContorno};
  }
`

export const Telefone = styled.textarea`
  color: ${variaveis.corTextArea};
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  border-radius: 4px;
  background-color: transparent;

  &:focus {
    border-color: ${variaveis.corContorno};
    outline: 2px solid ${variaveis.corContorno};
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  padding: 12px;
  letter-spacing: 1.1px;
  background-color: ${variaveis.vermelho};
`
