import { useState } from 'react';
import './index.scss';

function App() {
  const [n1, setNum1] = useState(0)
  const [n2, setNum2] = useState(0)
  const [resultado, setResultado] = useState(0)


  const somar = () => {
    const resultado = n1 + n2;
    setResultado(resultado);
  };

  const subtrair = () => {
    const resultado = n1 - n2;
    setResultado(resultado);
  }

  const multiplicar = () => {
    const resultado = n1 * n2;
    setResultado(resultado);
  }

  const dividir = () => {
    const resultado = n1 / n2;
    setResultado(resultado)
  }

  const resetar = () => {
    setNum1(0);
    setNum2(0);
    setResultado(0);
  }

  return (
    <div className="index_calculadora">
      <div className='fundo'>
        <header>
          <h1 id='titulo'>Portifólio.my</h1>
        </header>
        <section className='interface'>
          <div className='calculadora'>
            <h3>Insira um número</h3>
            <div className='conteiner-1'>
              <label>1° número</label>
              <input type='number' value={n1} onChange={(e) => setNum1(Number(e.target.value))}></input>
            </div>
            <div className='conteiner-2'>
              <label>2° número</label>
              <input type='number' value={n2} onChange={(e) => setNum2(Number(e.target.value))}></input>
            </div>
            <div className='conteiner-3'>
              <label>Resultado: </label>
              {resultado}
            </div>
            <div className='conteiner-4'>
              <hr></hr>
              <button onClick={somar}>Somar</button>
              <button onClick={subtrair}>Subtrair</button>
              <button onClick={multiplicar}>Multiplicar</button>
              <button onClick={dividir}>Dividir</button>
              <button onClick={resetar}>Resetar</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
