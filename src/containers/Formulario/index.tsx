import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Center, Form } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(cadastrar({ nome, email, telefone }))
    navigate('/')
  }

  return (
    <MainContainer>
      <Center>
        <Titulo>
          <h2>Novo Contato</h2>
        </Titulo>
        <Form onSubmit={cadastrarContato}>
          <label htmlFor="nome">Nome:</label>
          <Campo
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            type="text"
            placeholder="Ex.: José da Silva"
          />
          <label htmlFor="email">E-mail:</label>
          <Campo
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            type="email"
            placeholder="exemplo@exemplo.com.br"
          />
          <label htmlFor="telefone">Telefone:</label>
          <Campo
            type="tel"
            placeholder="41999999999"
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
          />

          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </Form>
      </Center>
    </MainContainer>
  )
}

export default Formulario
