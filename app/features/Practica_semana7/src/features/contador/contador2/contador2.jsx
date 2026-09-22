import { CONTADOR_TEXT } from '../constants/contador.constants'
import useContador from '../hooks/useContador'

export function Contador2({count, setCount}) {

    const { handleDecrementar } = useContador(setCount)

    return (
        <>
            <h2>Contador</h2>
            <p>{count}</p>
            <button onClick ={handleDecrementar} disabled={count <= 0}>{CONTADOR_TEXT.DECREMENTAR}</button>
        </>
    )
}