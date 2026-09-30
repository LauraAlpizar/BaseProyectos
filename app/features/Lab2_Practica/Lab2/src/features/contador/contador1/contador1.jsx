import { CONTADOR_TEXT } from '../constants/contador.constants';

export function Contador1({ count, cuposDisponibles, CAPACIDAD_MAXIMA, mensaje }) {
    return (
        <div>
            <h2>Estado del Taller</h2>
            <div>
                <p>{CONTADOR_TEXT.CAPACIDAD_MAXIMA} <strong>{CAPACIDAD_MAXIMA}</strong></p>
                <p>{CONTADOR_TEXT.REGISTRADOS} <strong>{count}</strong></p>
                <p>{CONTADOR_TEXT.CUPOS_DISPONIBLES} <strong>{cuposDisponibles}</strong></p>
            </div>
            {mensaje && <p style={{ color: 'red' }}>{mensaje}</p>}
        </div>
    );
}