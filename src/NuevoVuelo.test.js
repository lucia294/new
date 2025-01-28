import { render, screen } from '@testing-library/react';
import NuevoVuelo from './NuevoVuelo'; // Assuming NuevoVuelo is in the same directory

test('NuevoVuelo renders correctly with initial state', () => {
    render(<NuevoVuelo handler={jest.fn()} />);

    expect(screen.getByLabelText('Destino')).toHaveValue('');
    expect(screen.getByLabelText('Seats')).toHaveValue('');
    expect(screen.getByLabelText('Number')).toHaveValue('');
    expect(screen.getByLabelText('Date')).toHaveValue('2024-12-13');
    expect(screen.getByLabelText('Time')).toHaveValue('00:00');
});
