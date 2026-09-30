import { useState } from 'react';
import { CAPACIDAD_MAXIMA } from '../constants/contador.constants';

export const useContador = (setCountPadre) => {
    const [mensaje, setMensaje] = useState('');

    const handleIncrementar = (countActual) => {
        const estaLleno = countActual >= CAPACIDAD_MAXIMA;
        if (!estaLleno) {
            setCountPadre(prev => prev + 1);
            setMensaje('');
        } else {
            setMensaje('Se ha alcanzado la capacidad máxima del taller.');
        }
    };

    return {
        CAPACIDAD_MAXIMA,
        mensaje,
        handleIncrementar
    };
};