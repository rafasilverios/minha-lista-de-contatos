import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { alteraTermo } from '../../store/reducers/filtro'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarPesquisa: boolean
}

const BarraLateral = ({ mostrarPesquisa }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        {mostrarPesquisa ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar aos Contatos</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
