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
    },
    {
      id: 2,
      nome: 'Ana Oliveira',
      email: 'ana@example.com',
      telefone: '(11) 98765-4321'
    },
    {
      id: 3,
      nome: 'Carlos Silva',
      email: 'carlos@example.com',
      telefone: '(22) 87654-3210'
    },
    {
      id: 4,
      nome: 'Juliana Santos',
      email: 'juliana@example.com',
      telefone: '(33) 76543-2109'
    },
    {
      id: 5,
      nome: 'Pedro Souza',
      email: 'pedro@example.com',
      telefone: '(44) 65432-1098'
    },
    {
      id: 6,
      nome: 'Maria Lima',
      email: 'maria@example.com',
      telefone: '(55) 54321-0987'
    },
    {
      id: 7,
      nome: 'Lucas Pereira',
      email: 'lucas@example.com',
      telefone: '(66) 43210-9876'
    },
    {
      id: 8,
      nome: 'Fernanda Almeida',
      email: 'fernanda@example.com',
      telefone: '(77) 32109-8765'
    },
    {
      id: 9,
      nome: 'Ricardo Martins',
      email: 'ricardo@example.com',
      telefone: '(88) 21098-7654'
    },
    {
      id: 10,
      nome: 'Camila Costa',
      email: 'camila@example.com',
      telefone: '(99) 10987-6543'
    },
    {
      id: 11,
      nome: 'Gustavo Pereira',
      email: 'gustavo@example.com',
      telefone: '(11) 12345-6789'
    },
    {
      id: 12,
      nome: 'Patricia Oliveira',
      email: 'patricia@example.com',
      telefone: '(22) 23456-7890'
    },
    {
      id: 13,
      nome: 'Renato Silva',
      email: 'renato@example.com',
      telefone: '(33) 34567-8901'
    },
    {
      id: 14,
      nome: 'Aline Souza',
      email: 'aline@example.com',
      telefone: '(44) 45678-9012'
    },
    {
      id: 15,
      nome: 'Bruno Santos',
      email: 'bruno@example.com',
      telefone: '(55) 56789-0123'
    },
    {
      id: 16,
      nome: 'Carolina Lima',
      email: 'carolina@example.com',
      telefone: '(66) 67890-1234'
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
