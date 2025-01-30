
import { render, screen } from '@testing-library/react';
import PanelVuelo from './PanelVuelo';

describe('PanelVuelo', () => {
  const item = {
    destino: "Madrid",
    date: "2025-01-30",
    time: "10:00",
    seats: 100,
    "plazas disponibles": 50,
    "plazas ocupadas": 50,
    number: 1,
  };

  test('Debe renderizar los botones Ocupar y Liberar', () => {
    render(
      <PanelVuelo 
        item={item} 
        handlerIncrementar={() => {}} 
        handlerDecrementar={() => {}} 
      />
    );

    // Verificar que los botones con el texto adecuado existan
    expect(screen.getByText(/Ocupar/i)).toBeInTheDocument();
    expect(screen.getByText(/Liberar/i)).toBeInTheDocument();
  });
});

