import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover } from '../../store/reducer/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaeditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.BarraConteúdo>
        <S.TituloTextarea>E-mail:</S.TituloTextarea>
        <S.Email value={email} />
        <S.TituloTextarea>Telefone:</S.TituloTextarea>
        <S.Telefone value={telefone} />
      </S.BarraConteúdo>
      <S.BarraAcoes>
        {estaeditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
