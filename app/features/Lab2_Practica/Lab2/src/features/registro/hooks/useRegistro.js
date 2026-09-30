import { useState } from 'react';
import { CAPACIDAD_MAXIMA } from '../../contador/constants/contador.constants'; 
import { REGISTRO_TEXT } from '../constants/registro.constants';

export const useRegistro = () => {
    const [nombre, setNombre] = useState('');
    const [participantes, setParticipantes] = useState([]);
    const [error, setError] = useState('');

    const totalRegistrados = participantes.length;
    const cuposDisponibles = CAPACIDAD_MAXIMA - totalRegistrados;
    const estaLleno = totalRegistrados >= CAPACIDAD_MAXIMA;

    const handleAgregar = (e) => {
        e.preventDefault();
        setError('');

        if (!nombre.trim()) {
            setError(REGISTRO_TEXT.ERROR_VACIO);
            return;
        }

        if (estaLleno) {
            setError(REGISTRO_TEXT.ERROR_LLENO);
            return;
        }

        setParticipantes([...participantes, nombre.trim()]);
        setNombre('');
    };

    return {
        nombre,
        setNombre,
        participantes,
        error,
        totalRegistrados,
        cuposDisponibles,
        estaLleno,
        handleAgregar,
        CAPACIDAD_MAXIMA
    };
};