import { useState } from 'react';
import { Registro1 } from './registro1/registro1';

export function LayoutRegistro() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Registro1 count={count} setCount={setCount} />
        </>
    );
}