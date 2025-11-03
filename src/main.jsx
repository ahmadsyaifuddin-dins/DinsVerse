import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './styles/shiny-text.css';
import './styles/cursor.css';
import './styles/input-form.css';
import { BrowserRouter } from 'react-router-dom';
import { ProjectProvider } from './context/ProjectContext.jsx';
import { HelmetProvider } from 'react-helmet-async'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <ProjectProvider> {/* Bungkus App dengan Provider */}
        <App />
      </ProjectProvider>
    </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);