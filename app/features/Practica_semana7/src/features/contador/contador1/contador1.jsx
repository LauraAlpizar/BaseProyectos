import { CONTADOR_TEXT } from '../constants/contador.constants'
import useContador from '../hooks/useContador'

export function Contador1({count, setCount}) {

    const { handleIncrementar, handleDecrementar } = useContador(setCount)

    return (
        <>
            <h2>Contador</h2>
            <p>{count}</p>
            <button onClick={count < 5 && handleIncrementar}>{CONTADOR_TEXT.INCREMENTAR}</button>
            <button onClick={count > 0 ? handleDecrementar : null}>{CONTADOR_TEXT.DECREMENTAR}</button>
        </>
    )
}