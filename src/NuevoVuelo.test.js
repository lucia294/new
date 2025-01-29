import { render, screen, fireEvent } from '@testing-library/react';
import NuevoVuelo from './NuevoVuelo';



    test('renders the form with correct fields', () => {
        render(<NuevoVuelo handler={() => {}} />);
        
        // Verificar si los campos de formulario están presentes
        expect(screen.getByLabelText(/Destino:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Seats:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Date:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Time:/i)).toBeInTheDocument();
    });

  
