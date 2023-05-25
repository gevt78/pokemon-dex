import React, { memo } from "react";
import Image from "next/image";

import { useTheme, styled } from '@mui/material/styles'
import { Stack, Paper } from "@mui/material"

export const CustomPaper = styled(Paper)(() => ({
  display: 'flex',
  cursor: 'pointer',
  flexDirection: 'row',
  position: 'relative',
  boxShadow: 'unset',
  padding: '0.5rem',
  color: '#fff',
  border: '1rem solid transparent',
  transition: 'background 0.5s ease-in-out',
  '&:hover ': {
    border: '1rem solid rgba(241, 240, 241, 0.5)',
    '&:before': {
      margin: '-5px', /* !importanté */
      background: `linear-gradient(to top right, #176, #892)`,
      boxShadow: '1px 2px 20px #787',
    },
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    transition: 'margin 0.3s ease-in-out, box-shadow 0.7s ease-in-out',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    borderRadius: 'inherit',
    background: 'linear-gradient(45deg, transparent, transparent)',
  }
}))

const CustomCard = ({ data, onClick }) => {
  const theme = useTheme()

  return (
    <CustomPaper
      onClick={onClick}
      sx={{ background: theme.color[data.types[0].type.name] }}
    >
      <Stack
        direction="row"
        justifyItems="space-around"
        style={{ width: '100%' }}
      >
        <Stack>
          <div
            style={{
              marginTop: '2rem',
              marginBottom: '1rem',
              fontSize: '2rem',
              fontWeight: 500,
              textTransform: 'capitalize',
            }}
          >
            {data.name}
          </div>
          <Stack direction="row" gap={1}>
            {data.types.map(item => (
              <div
                key={item.type.name}
                style={{
                  textTransform: 'capitalize',
                  fontWeight: 700,
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                }}
              >
                {item.type.name}
              </div>
            ))}
          </Stack>
        </Stack>

        <Stack
          justifyContent="flex-end"
          alignItems="flex-end"
          style={{
            height: '250px',
            width: '100%',
            padding: '0.5rem',
          }}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
            alt={data.name}
            style={{
              maxWidth: 250,
              width: '100%',
              height: '90%',
              zIndex: 5,
            }}
          />

          <Image
            src="/pokemon-logo.png"
            alt="logo"
            width={200}
            height={200}
            style={{
              opacity: 0.2,
              zIndex: 2,
              position: 'absolute',
              marginBottom: -30,
              marginRight: -40,
            }}
          />
        </Stack>
      </Stack>
    </CustomPaper>
  )
}

export default memo(CustomCard)
