import React from 'react';
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';
import ColorAdmin from './ColorAdmin';



createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ColorAdmin />
    </StyledEngineProvider>
  </React.StrictMode>,
);
