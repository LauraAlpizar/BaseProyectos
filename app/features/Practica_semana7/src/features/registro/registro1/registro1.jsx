import { REGISTRO_TEXT } from '../constants/registro.constants';
import useContador from '../../contador/hooks/useContador';
import useRegistro from '../hooks/useRegistro';

export function Registro1({ count, setCount }) {
    const { handleIncrementar } = useContador(setCount);
    const { 
        nombre, 
        setNombre, 
        edad, 
        setEdad, 
        registrosMap, 
        handleAgregar 
    } = useRegistro(handleIncrementar);

    return (
        <form onSubmit={handleAgregar}>
            <h2>Registrar usuarios</h2>
            
            <input 
                type="text" 
                placeholder={REGISTRO_TEXT.NOMBRE} 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
            />

            <input 
                type="number" 
                placeholder={REGISTRO_TEXT.EDAD} 
                value={edad} 
                onChange={(e) => setEdad(e.target.value)} 
            />

            <p>Contador: {count}</p>
            
            <button type="submit">{REGISTRO_TEXT.AGREGAR}</button>

            <ul>
                {Array.from(registrosMap.entries()).map(([key, value]) => (
                    <li key={key}>
                        {key}: {value.edad} años
                    </li>
                ))}
            </ul>
        </form>
    );
}