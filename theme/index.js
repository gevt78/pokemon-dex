import { createTheme } from '@mui/material/styles'

const color = {
  normal: '#929DA3',
  fighting: '#CE416B',
  flying: '#8FA9DE',
  poison: '#AA6BC8',
  ground: '#D97845',
  rock: '#D3C496',
  bug: '#91C12F',
  ghost: '#5269AD',
  steel: '#5A8EA2',
  fire: '#FF9D55',
  water: '#5090D6',
  grass: '#63BC5A',
  electric: '#F4D23D',
  psychic: '#FA7179',
  fairy: '#EC8FE6',
  ice: '#73CEC0',
  dark: '#5A5465',
  dragon: '#0A6CC2',
  physical: '#EA551E',
  special: '#1F4E94',
  status: '#999999',
  white: '#ffffff',
  black: '#000000'
}

const muiTheme = {
  color,
}

export default createTheme(muiTheme)