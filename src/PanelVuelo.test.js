import { render, screen, fireEvent } from '@testing-library/react';
import PanelVuelo from './PanelVuelo';

test('debería renderizar correctamente los detalles de vuelo y manejar los botones de "Ocupar" y "Liberar"', () => {
  // Mock de los props
  const item = {
    destino: 'Barcelona',
    date: '2025-01-30',
    time: '12:00',
    seats: 100,
    'plazas disponibles': 30,
    'plazas ocupadas': 70,
    number: 1
  };

  const handlerIncrementar = jest.fn();
  const handlerDecrementar = jest.fn();

  // Renderizamos el componente
  render(<PanelVuelo item={item} handlerIncrementar={handlerIncrementar} handlerDecrementar={handlerDecrementar} />);

  // Comprobamos que el destino, la fecha 
  expect(screen.getByText(/Barcelona/i)).toBeInTheDocument();
  expect(screen.getByText(/2025-01-30/i)).toBeInTheDocument();
  expect(screen.getByText(/12:00/i)).toBeInTheDocument();


  // Simulamos el clic en los botones
  fireEvent.click(screen.getByText(/Ocupar/i));
  fireEvent.click(screen.getByText(/Liberar/i));

  // Verificamos que las funciones fueron llamadas
  expect(handlerIncrementar).toHaveBeenCalledWith(1); // Comprobamos que se pasó el número correcto
  expect(handlerDecrementar).toHaveBeenCalledWith(1); // Comprobamos que se pasó el número correcto
});
