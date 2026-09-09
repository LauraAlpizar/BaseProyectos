import {useState} from 'react'
import { CONTADOR_TEXT } from './constants/contador.constants'

export function LayoutContador() {

    const [contador, setContador] = useState(0)

    function handleIncrementar() {
        setContador(prev => prev + 1)
    }

    function handleDecrementar() {
        setContador(prev => prev - 1)
    }

    return (
        <>
            <h2>Contador</h2>
            <p>{contador}</p>
            <button onClick={contador < 5 && handleIncrementar}>{CONTADOR_TEXT.INCREMENTAR}</button>
            <button onClick={contador > 0 ? handleDecrementar : null}>{CONTADOR_TEXT.DECREMENTAR}</button>
        </>
    )
}