
import { render, screen, fireEvent } from '@testing-library/react';
import NuevoVuelo from './NuevoVuelo';

describe('NuevoVuelo', () => {
  const mockHandler = jest.fn();

  test('Debe renderizar los campos del formulario sin interacción', () => {
    render(<NuevoVuelo handler={mockHandler} />);

    // Verificar que los campos del formulario estén presentes
   
    expect(screen.getByRole('button')).toBeInTheDocument();
  });


});
