import React from 'react';
import { render, screen } from '@testing-library/react';
import PanelVuelo from './PanelVuelo'; // Assuming PanelVuelo is in the same directory

const flightData = {
    destino: 'Málaga',
    date: '2023-11-21',
    time: '10:00',
    seats: 100,
    'plazas disponibles': 80,
    'plazas ocupadas': 20,
    number: 1, // Unique identifier for the flight
};

test('PanelVuelo renders correctly and displays flight details', () => {
    render(<PanelVuelo item={flightData} />);

    expect(screen.getByText('Málaga')).toBeInTheDocument();
    expect(screen.getByText('2023-11-21')).toBeInTheDocument();
    expect(screen.getByText('10:00')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('80')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
});
