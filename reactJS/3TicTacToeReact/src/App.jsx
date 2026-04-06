import { useState } from 'react'
import './App.css'

function Square({value, onSquareClick}){
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

function ResetButton({clickReset}){
  return <button className='resetBtn' onClick={clickReset}>Reset</button>
}

function Board({ xIsNext, squares, onPlay, clickReset }) {
  function handleClick(i){
    if (calculateWinner(squares) || squares[i]) return

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O'

    onPlay(nextSquares);
  }
  
  const winner = calculateWinner(squares)
  console.log(winner)
  console.log(squares)
  let status

  if(winner) { status = `Pemenang ${winner}` }
  else if(!squares.includes(null)) {status = `Permainan SERI`}
  else { status = `Pemain selanjutnya ${xIsNext ? 'X' : 'O'}` }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {(() => {
          let kotak = [];
          for (let i = 0; i < 9; i++) {
            kotak.push(<Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />);
          }
          return kotak
        })()}
        <ResetButton clickReset={clickReset}/>
      </div>
    </>
  );
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.length <= 1 ? [] : history.map((squares, move) => {
    let description = move > 0 ? `Pergi ke langkah #${move}` : `Pergi ke awal permainan`

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function resetHandler(){
    setHistory([Array(9).fill(null)])
    setCurrentMove(0)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} clickReset={resetHandler} />
      </div>
      <div className="game-info">
        <p>History Permainan</p>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

