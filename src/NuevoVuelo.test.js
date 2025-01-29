import { render, screen, fireEvent } from '@testing-library/react';
import NuevoVuelo from './NuevoVuelo';

test('renderiza el formulario y actualiza los campos correctamente', () => {
    // Mock de la función handler
    const mockHandler = jest.fn();

    // Renderizamos el componente
    render(<NuevoVuelo handler={mockHandler} />);

    // Verificamos que los campos se rendericen
    expect(screen.getByLabelText(/Destino:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Seats:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time:/i)).toBeInTheDocument();

    // Simulamos cambios en los campos de entrada
    fireEvent.change(screen.getByLabelText(/Destino:/i), { target: { value: 'Madrid' } });
    fireEvent.change(screen.getByLabelText(/Seats:/i), { target: { value: '200' } });
    fireEvent.change(screen.getByLabelText(/Number:/i), { target: { value: 'IB234' } });
    fireEvent.change(screen.getByLabelText(/Date:/i), { target: { value: '2025-06-15' } });
    fireEvent.change(screen.getByLabelText(/Time:/i), { target: { value: '10:30' } });

    // Verificamos que los valores se actualizan
    expect(screen.getByLabelText(/Destino:/i).value).toBe('Madrid');
    expect(screen.getByLabelText(/Seats:/i).value).toBe('200');
    expect(screen.getByLabelText(/Number:/i).value).toBe('IB234');
    expect(screen.getByLabelText(/Date:/i).value).toBe('2025-06-15');
    expect(screen.getByLabelText(/Time:/i).value).toBe('10:30');

    // Simulamos el envío del formulario
    fireEvent.click(screen.getByText(/submit/i));

    // Verificamos que el handler ha sido llamado (sin comprobar los valores, ya que es sencillo)
    expect(mockHandler).toHaveBeenCalled();
});

  
