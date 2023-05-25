import React, { useMemo, useState, memo } from "react";
import Image from "next/image";

import {
  Modal,
  Box,
  Stack,
  Tabs,
  Tab,
} from "@mui/material";
import { useTheme } from '@mui/material/styles'

import InfoTab from "../info-tab";

const Dialog =({ open, handleClose, data }) => {
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const handleChange = (_, newValue) => {
    setValue(newValue)
  }

  const statArr = useMemo(() => {
    if(data?.stats) return Object.values(data.stats)
    else return null
  }, [data])

  const numberId = '#' + String(data?.id).padStart(3, '0')

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        borderRadius: "0.5rem",
        color: '#fff',
        background: theme.color[data.types[0].type.name]
      }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ padding: '1rem' }}
        >
          <Stack style={{ cursor: 'default' }}>
            <div
              style={{
                marginBottom: '1rem',
                fontSize: '2rem',
                fontWeight: 500,
                textTransform: 'capitalize'
              }}
            >
              {data?.name}
            </div>
            <Stack
              direction="row"
              gap={1}
            >
              {data?.types?.map(item => (
                <div
                  style={{
                    textTransform: 'capitalize',
                    fontWeight: 700,
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem'
                  }}
                  key={item.type.name}
                >
                  {item?.type?.name}
                </div>
              ))}
            </Stack>
          </Stack>
          <Stack
            style={{
              fontWeight: 700,
              fontSize: '1.5rem',
              cursor: 'default'
            }}
          >
            {numberId}
          </Stack>
        </Stack>

        <Image
          src="/pokemon-logo.png"
          alt="logo"
          width={200}
          height={200}
          style={{
            opacity: 0.2,
            zIndex: 2,
            position:
            'absolute',
            marginLeft: 300,
          }}
        />

        <Stack alignItems="center">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id}.png`}
            alt={data?.name}
            style={{
              width: '230px',
              height: '250px',
              zIndex: 5,
            }}
          />
        </Stack>
        <Stack
          style={{
            height: 250,
            padding: '1rem',
            background: theme.color.white,
            marginTop: -50,
            color: theme.color.black,
            borderRadius: '0.5rem',
          }}
        >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              mt: '1rem'
            }}>
            <Tabs
              value={value}
              onChange={handleChange}
            >
              <Tab label="About" />
              <Tab label="Base Stats" />
            </Tabs>
          </Box>
          <div>
            <Box sx={{ p: 3 }}>
              {value === 0 && (
                <InfoTab
                  data={[{
                    label: 'Species',
                    value: data?.name,
                  }, {
                    label: 'Height',
                    value: data?.height,
                  }, {
                    label: 'Weight',
                    value: data?.weight,
                  }, {
                    label: 'Abilities',
                    value: data?.abilities?.map(item => item.ability.name).join(', '),
                  }]}
                />
              )}
              {value === 1 && (
                <InfoTab
                  displayProgressBar={true}
                  data={[{
                    label: 'HP',
                    value: statArr?.find(item => item.stat.name === 'hp').base_stat || 0,
                  }, {
                    label: 'Attack',
                    value: statArr?.find(item => item.stat.name === 'attack').base_stat || 0,
                  }, {
                    label: 'Defense',
                    value: statArr?.find(item => item.stat.name === 'defense').base_stat || 0,
                  }, {
                    label: 'Sp. Atk',
                    value: statArr?.find(item => item.stat.name === 'special-attack').base_stat || 0,
                  }, {
                    label: 'Sp. Def',
                    value: statArr?.find(item => item.stat.name === 'special-defense').base_stat || 0,
                  }, {
                    label: 'Speed',
                    value: statArr?.find(item => item.stat.name === 'speed').base_stat || 0,
                  }]}
                />
              )}
            </Box>
          </div>
        </Stack>
      </Box>
    </Modal>
  )
}

export default memo(Dialog)
