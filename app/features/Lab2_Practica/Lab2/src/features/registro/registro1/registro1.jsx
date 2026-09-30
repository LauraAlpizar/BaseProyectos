import { REGISTRO_TEXT } from '../constants/registro.constants';
import { CONTADOR_TEXT, CAPACIDAD_MAXIMA } from '../../contador/constants/contador.constants';
import { useRegistro } from '../hooks/useRegistro';

export function Registro1() {
    const {
        nombre,
        setNombre,
        participantes,
        error,
        totalRegistrados,
        cuposDisponibles,
        estaLleno,
        handleAgregar
    } = useRegistro();

    return (
        <form onSubmit={handleAgregar}>
            <h2>{REGISTRO_TEXT.TITULO}</h2>
            
            {/* Usamos las constantes importadas correctamente */}
            <p>{CONTADOR_TEXT.CAPACIDAD_MAXIMA} <strong>{CAPACIDAD_MAXIMA}</strong></p>
            <p>{CONTADOR_TEXT.REGISTRADOS} <strong>{totalRegistrados}</strong></p>
            <p>{CONTADOR_TEXT.CUPOS_DISPONIBLES} <strong>{cuposDisponibles}</strong></p>

            <input 
                type="text" 
                placeholder={REGISTRO_TEXT.PLACEHOLDER_NOMBRE} 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                disabled={estaLleno}
            />

            <button type="submit" disabled={estaLleno}>
                {REGISTRO_TEXT.BOTON_REGISTRAR}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <h3>{REGISTRO_TEXT.LISTA_TITULO}</h3>
            <ul>
                {participantes.map((participante, index) => (
                    <li key={index}>{participante}</li>
                ))}
            </ul>
        </form>
    );
}