function ResultadoIMC({ resultado }) {
  if (resultado === null) {
    return (
      <div className="resultado">
        <p>Informe seu peso e sua altura para calcular o IMC.</p>
      </div>
    )
  }

  return (
    <div className="resultado">
      <h2>Resultado</h2>

      <p>
        Seu IMC é: {resultado.imc.toFixed(2)}
      </p>

      <p>
        Classificação: {resultado.classificacao}
      </p>
    </div>
  )
}

export default ResultadoIMC