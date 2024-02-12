import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [emailOriginal, telefoneOriginal])

  const handleChange = (event: { target: { value: any } }) => {
    const { value } = event.target
    const newValue = formatarTelefone(value)
    setTelefone(newValue)
  }

  function formatarTelefone(telefone: string) {
    let tel = telefone.replace(/\D/g, '')
    tel = tel.slice(0, 11)
    if (tel.length <= 10) {
      tel = tel.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3')
    } else {
      tel = tel.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
    }
    return tel
  }

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.BarraConteúdo>
        <S.TituloTextarea>E-mail:</S.TituloTextarea>
        <S.Email
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <S.TituloTextarea>Telefone:</S.TituloTextarea>
        <S.Telefone
          disabled={!estaEditando}
          value={telefone}
          onChange={handleChange}
        />
      </S.BarraConteúdo>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    telefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
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
