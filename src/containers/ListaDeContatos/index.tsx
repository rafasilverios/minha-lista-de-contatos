import Contato from '../../components/Contato'
import { Container } from './styles'

const ListaDeContatos = () => (
  <Container>
    <p>2 Contatos marcados como: &quot;todos&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
    </ul>
  </Container>
)

export default ListaDeContatos
