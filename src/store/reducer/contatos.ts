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
      telefone: '(41) 99999-9999'
    },
    {
      id: 2,
      nome: 'Monik Suszek',
      email: 'monik@monik.com.br',
      telefone: '(41) 88888-8888'
    },
    {
      id: 3,
      nome: 'Jodué Suszek Silverio',
      email: 'josue@josue.com.br',
      telefone: '(41) 77777-7777'
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
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
