import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex){
  //   setGameBoard((prevGameBoard) =>{
  //     const updatedBoard = [...prevGameBoard.map(innerArray => {return([...innerArray])})];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol ;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
       return (<li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => {
             return (<li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>)
            })}
          </ol>
        </li>)
      })}
    </ol>
  );
}
