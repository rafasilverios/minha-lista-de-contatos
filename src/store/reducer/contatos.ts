import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Rafael Silverio',
      email: 'rafael@rafael.com.br',
      telefone: 41999999999
    },
    {
      id: 2,
      nome: 'Monik Suszek',
      email: 'monik@monik.com.br',
      telefone: 41888888888
    },
    {
      id: 3,
      nome: 'Jodué Suszek Silverio',
      email: 'josue@josue.com.br',
      telefone: 41777777777
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
