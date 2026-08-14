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
    const imcArredondado = Number(imc.toFixed(2))

    let classificacao = ''

    if (imcArredondado < 18.5) {
      classificacao = 'Abaixo do peso'
    } else if (imcArredondado < 25) {
      classificacao = 'Peso normal'
    } else if (imcArredondado < 30) {
      classificacao = 'Sobrepeso'
    } else {
      classificacao = 'Obesidade'
    }

    setResultado({
      imc: imcArredondado,
      classificacao: classificacao
    })
  }

  return (
    <div className="app">
      <FormularioIMC
        peso={peso}
        setPeso={setPeso}
        altura={altura}
        setAltura={setAltura}
        calcularIMC={calcularIMC}
      />

      <ResultadoIMC resultado={resultado} />

      <TabelaIMC />
    </div>
  )
}

export default App
