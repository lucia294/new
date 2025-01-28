import { render, screen } from '@testing-library/react';
import NuevoVuelo from './NuevoVuelo'; // Assuming NuevoVuelo is in the same directory

test('NuevoVuelo renders correctly with initial state', () => {
    render(<NuevoVuelo handler={jest.fn()} />);

    expect(screen.getByLabelText('destination')).toHaveValue('');
    expect(screen.getByLabelText('seats')).toHaveValue('');
    expect(screen.getByLabelText('number')).toHaveValue('');
    expect(screen.getByLabelText('date')).toHaveValue('2024-12-13');
    expect(screen.getByLabelText('time')).toHaveValue('00:00');
});
