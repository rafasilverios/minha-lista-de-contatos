import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros></S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
