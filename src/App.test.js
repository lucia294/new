import { render, screen } from '@testing-library/react';
import App from './App';
import Vuelos from './Vuelos'; // Importamos Vuelos para verificar si se renderiza.

test('debería renderizar el componente Vuelos dentro de App', () => {
  render(<App />);

  // Comprobamos que el componente Vuelos se renderiza
  const vuelosElement = screen.getByText(/time/i); // texto que está dentro de Vuelos.js
  expect(vuelosElement).toBeInTheDocument();
});



