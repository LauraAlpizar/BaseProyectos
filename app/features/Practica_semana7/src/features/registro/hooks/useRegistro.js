import { useState } from 'react';

export function useRegistro(handleIncrementar) {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [registrosMap, setRegistrosMap] = useState(new Map());

    const handleAgregar = (e) => {
        e.preventDefault();
        
        if (!nombre.trim() || !edad) return;

        setRegistrosMap((prevMap) => {
            const nuevoMap = new Map(prevMap);
            nuevoMap.set(nombre, { edad });
            return nuevoMap;
        });

        if (handleIncrementar) {
            handleIncrementar();
        }

        setNombre('');
        setEdad('');
    };

    return {
        nombre,
        setNombre,
        edad,
        setEdad,
        registrosMap,
        handleAgregar
    };
}

export default useRegistro;