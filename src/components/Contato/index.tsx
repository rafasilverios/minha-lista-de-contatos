import * as S from './styles'

const Contato = () => (
  <S.Card>
    <S.Nome>Nome da Pessoa</S.Nome>
    <S.BarraConteúdo>
      <S.TituloTextarea>E-mail:</S.TituloTextarea>
      <S.Email />
      <S.TituloTextarea>Telefone:</S.TituloTextarea>
      <S.Telefone />
    </S.BarraConteúdo>
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Contato
