import React, { useState, useRef } from 'react';

function MultiplicationButton() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [product, setProduct] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(parseInt(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(parseInt(event.target.value));
  };

  const handleMultiply = () => {
    setProduct(num1 * num2);
  };

  return (
    <div>
      <h3> Multiplicar </h3>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={handleMultiply}>Multiply</button>
      <p>Product: {product}</p>
    </div>
  );
}

const Calculadora = () => {
  const numberOneRef = useRef(null);
  const numberTwoRef = useRef(null);
  const [suma, setSuma] = useState(0);

  const handleSuma = () => {
    setSuma(+numberOneRef.current.value + +numberTwoRef.current.value);
  };

  return (
    <div className='App'>
      <h2>Calculadora</h2>
      <h3> Suma </h3>
      <label>Number 1</label>
      <input type="number" placeholder="numero 1" name="numero1" ref={numberOneRef} />
      <label>Number 2</label>
      <input type="number" placeholder="numero 2" name="numero2" ref={numberTwoRef} />
      <button className='btn btn-success' onClick={handleSuma}>Sumar</button>
      <br/>
      Resultado: {suma}
      
      <MultiplicationButton />
    </div>
  );
}

export default Calculadora;