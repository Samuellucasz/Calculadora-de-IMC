import { useState } from 'react'
import './App.css'
import FormularioIMC from './components/FormularioIMC'
import ResultadoIMC from './components/ResultadoIMC'
import TabelaIMC from './components/TabelaIMC'

function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState(null)

  function calcularIMC() {
    const pesoNumerico = Number(peso)
    const alturaNumerica = Number(altura)

    if (pesoNumerico <= 0 || alturaNumerica <= 0) {
      setResultado(null)
      return
    }

    const imc = pesoNumerico / (alturaNumerica * alturaNumerica)

    let classificacao = ''

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso'
    } else if (imc < 25) {
      classificacao = 'Peso normal'
    } else if (imc < 30) {
      classificacao = 'Sobrepeso'
    } else {
      classificacao = 'Obesidade'
    }

    setResultado({
      imc: imc,
      classificacao: classificacao
    })
  }

  return (
    <>
      <FormularioIMC
        peso={peso}
        setPeso={setPeso}
        altura={altura}
        setAltura={setAltura}
        calcularIMC={calcularIMC}
      />

      <ResultadoIMC resultado={resultado} />

      <TabelaIMC />
    </>
  )
}

export default App
