import React, { useState } from 'react';
import axios from 'axios';

import { Grid } from '@mui/material';
import CustomCard from '../components/card';
import Dialog from '../components/dialog';

const Home = ({ sortList, error }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div
      style={{
        maxWidth: '1600px',
        margin: 'auto',
      }}
    >
      <div
        style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          padding: '2rem 0 1rem 0',
          fontWeight: 800,
        }}
      >
        Pokedex
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={4}
        style={{ padding: '2rem' }}
      >
        {sortList.map(pokemon => (
          <Grid
            key={pokemon.id}
            item
            lg={4}
            md={6}
            xs={12}
            style={{ marginBottom: '1rem' }}
          >
            <CustomCard
              data={pokemon}
              onClick={() => {
                setIsOpen(true);
                setSelected(pokemon)
              }}
            />
          </Grid>
        ))}
      </Grid>
      {!!selected && (
        <Dialog
          open={isOpen}
          handleClose={() => {
            setIsOpen(false);
            setSelected(null)
          }}
          data={selected}
        />
      )}
    </div>
  );
};

Home.getInitialProps = async ctx => {
  const BASE_URL = 'https://pokeapi.co/api/v2'
  let data = []

  try {
    const responseList = await axios.get(`${BASE_URL}/pokemon?limit=18&offset=0`);
    const list = responseList.data.results;

    await Promise.all(list.map(async item => {
      const detail = await axios.get(`${BASE_URL}/pokemon/${item.name}`)
      data.push(detail.data)
    }))

    const sortList = data.sort((a, b) => a.id - b.id);

    return { sortList };
  } catch (error) {
    return { error };
  }
};

export default Home;
