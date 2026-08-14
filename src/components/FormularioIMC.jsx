function FormularioIMC({
    peso,
    setPeso,
    altura,
    setAltura,
    calcularIMC
}) {
  return (
    <div>
        <h1>Calculadora de IMC</h1>

        <label>
            Peso (kg):
        </label>

        <input
            type="number"
            value={peso}
            onChange={(evento) => setPeso(evento.target.value)}
            placeholder="Ex: 70"
        />

        <label>
            Altura (m):
        </label>

        <input
            type="number"
            value={altura}
            onChange={(evento) => setAltura(evento.target.value)}
            placeholder="Ex: 1.75"
        />

        <button onClick={calcularIMC}>
            Calcular IMC
        </button>
    </div>
  )
}

export default FormularioIMC