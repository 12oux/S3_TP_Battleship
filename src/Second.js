import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Square( {value , click} ) {
  return (<div className="board-square" onClick={click}>{value}</div>);
}

export default function Second () {
  const [ squares, setSquares] = useState(Array(100).fill(null));
 
  const nextSymbole = "X" ;

  function onClickSquare(position) {
    let maCopie = squares.slice();
    maCopie[position] = nextSymbole;
    setSquares(maCopie);
    console.log(position);
  }

  function fabriqueSquare(position) {
    return (<Square value={squares[position] } click={() => onClickSquare(position)}/>);
  }

  return (
  <div className="main">
    <div className="first">
      <div className="header">
        <header class="jumbotron">
          <br />
          <h2 class="text-center">Enemy</h2>
        </header>
      </div>

      <div className="container">
          <div className="game">
              <div className="game-board">
                  <div className="board-top">
                    <Square value= "*\#"/>
                    <Square value= "1"/>
                    <Square value= "2"/>
                    <Square value= "3"/>
                    <Square value= "4"/>
                    <Square value= "5"/>
                    <Square value= "6"/>
                    <Square value= "7"/>
                    <Square value= "8"/>
                    <Square value= "9"/>
                    <Square value= "10"/>
                    <div className="regles"> Règles </div>
                  </div>
                  <div className="board-row">
                    <div className="board-top"><Square value= "A"/></div>
                      {fabriqueSquare(0)}
                      {fabriqueSquare(1)}
                      {fabriqueSquare(2)}
                      {fabriqueSquare(3)}
                      {fabriqueSquare(4)}
                      {fabriqueSquare(5)}
                      {fabriqueSquare(6)}
                      {fabriqueSquare(7)}
                      {fabriqueSquare(8)}
                      {fabriqueSquare(9)}
                  </div>
                  <div className="board-row">
                    <div className="board-top"><Square value= "B"/></div>
                      {fabriqueSquare(10)}
                      {fabriqueSquare(11)}
                      {fabriqueSquare(12)}
                      {fabriqueSquare(13)}
                      {fabriqueSquare(14)}
                      {fabriqueSquare(15)}
                      {fabriqueSquare(16)}
                      {fabriqueSquare(17)}
                      {fabriqueSquare(18)}
                      {fabriqueSquare(19)}
                  </div>
                  <div className="board-row">
                      <div className="board-top"><Square value= "C"/></div>
                      {fabriqueSquare(20)}
                      {fabriqueSquare(21)}
                      {fabriqueSquare(22)}
                      {fabriqueSquare(23)}
                      {fabriqueSquare(24)}
                      {fabriqueSquare(25)}
                      {fabriqueSquare(26)}
                      {fabriqueSquare(27)}
                      {fabriqueSquare(28)}
                      {fabriqueSquare(29)}
                  </div>
                  <div className="board-row">
                      <div className="board-top"><Square value= "D"/></div>
                      {fabriqueSquare(30)}
                      {fabriqueSquare(31)}
                      {fabriqueSquare(32)}
                      {fabriqueSquare(33)}
                      {fabriqueSquare(34)}
                      {fabriqueSquare(35)}
                      {fabriqueSquare(36)}
                      {fabriqueSquare(37)}
                      {fabriqueSquare(38)}
                      {fabriqueSquare(39)}
                  </div>
                  <div className="board-row">
                      <div className="board-top"><Square value= "E"/></div>
                      {fabriqueSquare(40)}
                      {fabriqueSquare(41)}
                      {fabriqueSquare(42)}
                      {fabriqueSquare(43)}
                      {fabriqueSquare(44)}
                      {fabriqueSquare(45)}
                      {fabriqueSquare(46)}
                      {fabriqueSquare(47)}
                      {fabriqueSquare(48)}
                      {fabriqueSquare(49)}
                  </div>
                  <div className="board-row">
                      <div className="board-top"><Square value= "F"/></div>
                      {fabriqueSquare(50)}
                      {fabriqueSquare(51)}
                      {fabriqueSquare(52)}
                      {fabriqueSquare(53)}
                      {fabriqueSquare(54)}
                      {fabriqueSquare(55)}
                      {fabriqueSquare(56)}
                      {fabriqueSquare(57)}
                      {fabriqueSquare(58)}
                      {fabriqueSquare(59)}
                  </div>
                  <div className="board-row">
                      <div className="board-top"><Square value= "G"/></div>
                      {fabriqueSquare(60)}
                      {fabriqueSquare(61)}
                      {fabriqueSquare(62)}
                      {fabriqueSquare(63)}
                      {fabriqueSquare(64)}
                      {fabriqueSquare(65)}
                      {fabriqueSquare(66)}
                      {fabriqueSquare(67)}
                      {fabriqueSquare(68)}
                      {fabriqueSquare(69)}
                  </div>
                  <div className="board-row">
                      <div className="board-top"><Square value= "H"/></div>
                      {fabriqueSquare(70)}
                      {fabriqueSquare(71)}
                      {fabriqueSquare(72)}
                      {fabriqueSquare(73)}
                      {fabriqueSquare(74)}
                      {fabriqueSquare(75)}
                      {fabriqueSquare(76)}
                      {fabriqueSquare(77)}
                      {fabriqueSquare(78)}
                      {fabriqueSquare(79)}
                  </div>
                  <div className="board-row">
                      <div className="board-top"><Square value= "I"/></div>
                      {fabriqueSquare(80)}
                      {fabriqueSquare(81)}
                      {fabriqueSquare(82)}
                      {fabriqueSquare(83)}
                      {fabriqueSquare(84)}
                      {fabriqueSquare(85)}
                      {fabriqueSquare(86)}
                      {fabriqueSquare(87)}
                      {fabriqueSquare(88)}
                      {fabriqueSquare(89)}
                  </div>
                  <div className="board-row">
                      <div className="board-top"><Square value= "J"/></div>
                      {fabriqueSquare(90)}
                      {fabriqueSquare(91)}
                      {fabriqueSquare(92)}
                      {fabriqueSquare(93)}
                      {fabriqueSquare(94)}
                      {fabriqueSquare(95)}
                      {fabriqueSquare(96)}
                      {fabriqueSquare(97)}
                      {fabriqueSquare(98)}
                      {fabriqueSquare(99)}
                  </div>
              </div>
              <br />
          </div>
      </div>
    </div>
  </div>  
  );
}