function useContador(setCount) {

    function handleIncrementar() {
        setCount(prev => prev + 1)
    }

    function handleDecrementar() {
        setCount(prev => prev - 1)
    }

        return {
            handleIncrementar,
            handleDecrementar
        }

}

export default useContador;