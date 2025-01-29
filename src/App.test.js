import { render, screen } from '@testing-library/react';
import App from './App';
import Vuelos from './Vuelos'; // Importamos Vuelos para verificar si se renderiza.

test('debería renderizar el componente time dentro de App', () => {
  render(<App />);

  // Comprobamos que el componente time se renderiza
  const vuelosElement = screen.getByText(/time/i); 
  expect(vuelosElement).toBeInTheDocument();
});

test('debería renderizar el componente Vuelos dentro de App', () => {
  render(<App />);

  // Verificamos que el componente Vuelos esté presente en el documento
  expect(screen.getByText(/Vuelos/i)).toBeInTheDocument();
});


