/** @format */

import React, { useState } from "react";

export default function App() {
  // setTimeout ocorre apenas uma vez em um periodo de tempo

  //   setTimeout(() => {
  //     alert("Boa noite");
  //   }, 4000);

  // setInterval executa repetidamente a cada periodo de tempo

  //   setInterval(() => {
  //     console.log("Boa noite");
  //   }, 3000);

  //  clearInterval serve para poder paras os metodos

  //Utilizando o setTimeout exiba uma mensagem após 2 segundos

  //   setTimeout(() => {
  //     alert("Boa noite");
  //   }, 2000);

  //Utilizando o setInterval exiba uma mensagem no console a cada 3 segundos

  //   setInterval(() => {
  //     console.log("Boa noite pessoal");
  //   }, 3000);

  //Crie um contador que conte de 2 em 2 atravez de um click e não passe do numero 10

  //   const [numero, setNumero] = useState(0);

  //   function adicionar() {
  //     if (numero < 10) {
  //       setNumero(numero + 2);
  //     }
  //   }

  //contando...
  const [valor, setValor] = useState(0);
  //parando...
  const [pare, setPare] = useState();

  function start() {
    let time = setInterval(() => {
      setValor((valor) => valor + 1);
    }, 1000);

    setPare(time);
  }

  function pause() {
    clearInterval(pare);
  }

  function reset() {
    setValor(0);
  }

  return (
    <div>
      <h2>Tempo: {valor}</h2>
      <button onClick={start}>start</button>
      <button onClick={pause}>pause</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
