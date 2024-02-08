import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  About,
  CNCMicroMac,
  Contact,
  ECMMachine,
  FilamentMaker,
  Home,
  SPDMetalPrinter,
} from './pages';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/filament-maker" element={<FilamentMaker />} />
      <Route path="/ecm-machine" element={<ECMMachine />} />
      <Route path="/spd-metal-printer" element={<SPDMetalPrinter />} />
      <Route path="/cnc-micro-machine" element={<CNCMicroMac />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
