import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraLateral mostrarPesquisa />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)

export default Home
