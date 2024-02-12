import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container, ResultadoPesquisa } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <ResultadoPesquisa>
        <h2>Lista de Contatos</h2>
        <p>
          Você está pesquisando por:{' '}
          <span>
            {termo !== undefined && termo.length > 0 ? `"${termo}"` : ''}
          </span>
        </p>
      </ResultadoPesquisa>
      <ul>
        {filtraContatos().map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              nome={t.nome}
              email={t.email}
              telefone={t.telefone}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
