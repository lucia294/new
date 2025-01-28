import { render, screen, fireEvent } from '@testing-library/react';
import PanelVuelo from './PanelVuelo';

describe('PanelVuelo', () => {
  const mockHandlerIncrementar = jest.fn();
  const mockHandlerDecrementar = jest.fn();

  const item = {
    destino: 'Paris',
    date: '2025-02-14',
    time: '14:30',
    seats: 100,
    'plazas disponibles': 20,
    'plazas ocupadas': 80,
    number: 1,
  };

  beforeEach(() => {
    render(
      <PanelVuelo
        item={item}
        handlerIncrementar={mockHandlerIncrementar}
        handlerDecrementar={mockHandlerDecrementar}
      />
    );
  });

  it('renders the flight details correctly', () => {
    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByText('2025-02-14')).toBeInTheDocument();
    expect(screen.getByText('14:30')).toBeInTheDocument();
    expect(screen.getByText('Plazas :100')).toBeInTheDocument();
    expect(screen.getByText('Plazas disponibles :20')).toBeInTheDocument();
    expect(screen.getByText('Plazas ocupadas :80')).toBeInTheDocument();
  });

  it('calls handlerIncrementar when "Ocupar" button is clicked', () => {
    const ocuparButton = screen.getByText('Ocupar');
    fireEvent.click(ocuparButton);
    expect(mockHandlerIncrementar).toHaveBeenCalledWith(item.number);
  });

  it('calls handlerDecrementar when "Liberar" button is clicked', () => {
    const liberarButton = screen.getByText('Liberar');
    fireEvent.click(liberarButton);
    expect(mockHandlerDecrementar).toHaveBeenCalledWith(item.number);
  });
});
