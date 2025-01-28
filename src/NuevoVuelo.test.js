import { render, screen, fireEvent } from '@testing-library/react';
import NuevoVuelo from './NuevoVuelo';

test('NuevoVuelo renders correctly and submits form data', () => {
  const mockHandler = jest.fn();

  render(<NuevoVuelo handler={mockHandler} />);

  // Verificar que los campos del formulario estén renderizados
  expect(screen.getByLabelText(/Destino:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Seats:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Date:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time:/i)).toBeInTheDocument();

  // Llenar los campos con datos
  fireEvent.change(screen.getByLabelText(/Destino:/i), { target: { value: 'Paris' } });
  fireEvent.change(screen.getByLabelText(/Seats:/i), { target: { value: '120' } });
  fireEvent.change(screen.getByLabelText(/Number:/i), { target: { value: 'FR123' } });
  fireEvent.change(screen.getByLabelText(/Date:/i), { target: { value: '2025-02-20' } });
  fireEvent.change(screen.getByLabelText(/Time:/i), { target: { value: '15:00' } });

  // Enviar el formulario
  fireEvent.submit(screen.getByText(/submit/i));

  // Verificar que el handler fue llamado con los valores correctos
  expect(mockHandler).toHaveBeenCalledWith('Paris', '2025-02-20', '15:00', 'FR123', '120');
});

