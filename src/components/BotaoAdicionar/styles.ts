import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 40px;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`
