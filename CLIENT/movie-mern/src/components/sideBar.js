import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function SideBar({ query, setQuery }) {
  const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

  return (
    <>
      <Sidebar
        visible={visibleCustomToolbar}
        onHide={() => setVisibleCustomToolbar(false)}
        style={{
          backgroundColor: '#243b55',
        }}
      >
        <img
          className='logo'
          src='https://media-private.canva.com/ADwn8/MAFghEADwn8/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230421%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230421T002509Z&X-Amz-Expires=19894&X-Amz-Signature=0adc59afcf6a893d961af662ee59a6c76bdf645ab228b2e553dc019090ec2b75&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2021%20Apr%202023%2005%3A56%3A43%20GMT'
          alt='logo'
        />
        <span className='p-float-label p-input-icon-left'>
          <i className='pi pi-search' />
          <InputText
            id='lefticon'
            value={query}
            setQuery={setQuery}
            onChange={(e) => setQuery(e.target.value)}
            style={{ width: '17.2rem' }}
          />
          <label htmlFor='lefticon'>Search for a movie</label>
        </span>
        <Button
          className='mt-3'
          style={{ width: '17.2rem' }}
        >
          Popular Movies
        </Button>
        <Button
          className='mt-3'
          style={{ width: '17.2rem' }}
        >
          Now Playing
        </Button>
        <Button
          className='mt-3'
          style={{ width: '17.2rem' }}
        >
          Upcoming
        </Button>
        <Button
          className='mt-3'
          style={{ width: '17.2rem' }}
        >
          Top Rated
        </Button>
      </Sidebar>
      <Button
        icon='pi pi-chevron-right'
        onClick={() => setVisibleCustomToolbar(true)}
        className='m-3 p-button-text'
      />
    </>
  );
}
