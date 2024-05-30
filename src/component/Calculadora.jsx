import React, { useState } from 'react';

function Calculadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleOperacion = (operacion) => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);
    let resultado = 0;

    if (isNaN(numero1) || isNaN(numero2)) {
      setResultado('Por favor ingrese números válidos');
      return;
    }

    switch (operacion) {
      case 'sumar':
        resultado = numero1 + numero2;
        break;
      case 'restar':
        resultado = numero1 - numero2;
        break;
      case 'multiplicar':
        resultado = numero1 * numero2;
        break;
      case 'dividir':
        if (numero2 === 0) {
          setResultado('No se puede dividir por 0');
          return;
        }
       resultado = numero1 / numero2;

      break;

       case 'pontenciar':
        resultado = Math.pow(numero1, numero2);
        break;
       case 'raíz':
        if (numero1 < 0){
          setResultado('No se puede calcular la raíz cuadrada de un número negativo');
          return
        }
        resultado = Math.sqrt(numero1);
        break;
      case 'modulo':
        resultado= numero1 % numero2;
        break;
      default:
        break;
    }

    setResultado(resultado);
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <div>
        <label>
          Número 1:
          <input
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Número 2:
          <input
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button onClick={() => handleOperacion('sumar')}>Sumar</button>
        <button onClick={() => handleOperacion('restar')}>Restar</button>
        <button onClick={() => handleOperacion('multiplicar')}>Multiplicar</button>
        <button onClick={() => handleOperacion('dividir')}>Dividir</button>
        <button onClick={() => handleOperacion ('potenciar')}>Potenciación</button> 
        <button onClick={() => handleOperacion ('raíz')}>Raíz</button> 
        <button onClick={() => handleOperacion ('módulo')}>Módulo</button> 
      </div>
      {resultado !== null && (
        <div>
          <h2>Resultado: {resultado}</h2>
        </div>
      )}
    </div>
  );
}

export default Calculadora;