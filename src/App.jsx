import "./appStyle.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)
  // console.log(state);
  const checkWinner = () => {
    const winnerLogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ]
    for(let logic of winnerLogic){
      const [a,b,c] = logic
      if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
        // console.log("winner");
        return state[a];
      }
      if (state.every((cell) => cell !== null)) {
        return "draw"; 
      }
    }
    // console.log("draw");
    return false
  }


  const handleClick = (index) => {
    // console.log("clicked on ",index);
    const copyState = [...state];
    // console.log(copyState);
    copyState[index] = isXTurn ? "X" : "O"
    setState(copyState)
    isXTurn ? setIsXTurn(false) : setIsXTurn(true)
    
  }
  const isWinner = checkWinner();
  const gameOver = isWinner!==false
  const reset = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);

    }
  
  return (
    <>
    <div className="title">
      Tic-Tac-Toe Game
    </div>
     <div className="board">
        <div className="board-row">
          <button onClick={() => handleClick(0)} disabled={gameOver || state[0]}>
            {state[0]}
          </button>
          <button onClick={() => handleClick(1)} disabled={gameOver || state[1]}>
            {state[1]}
          </button>
          <button onClick={() => handleClick(2)} disabled={gameOver || state[2]}>
            {state[2]}
          </button>
        </div>
        <div className="board-row">
          <button onClick={() => handleClick(3)} disabled={gameOver || state[3]}>
            {state[3]}
          </button>
          <button onClick={() => handleClick(4)} disabled={gameOver || state[4]}>
            {state[4]}
          </button>
          <button onClick={() => handleClick(5)} disabled={gameOver || state[5]}>
            {state[5]}
          </button>
        </div>
        <div className="board-row">
          <button onClick={() => handleClick(6)} disabled={gameOver || state[6]}>
            {state[6]}
          </button>
          <button onClick={() => handleClick(7)} disabled={gameOver || state[7]}>
            {state[7]}
          </button>
          <button onClick={() => handleClick(8)} disabled={gameOver || state[8]}>
            {state[8]}
          </button>
        </div>
      </div>
      <div className="winner">
      {isWinner !== false ? (isWinner === "draw" ? "It's a draw!" : `${isWinner} won`) : ""}
        </div>
      <div className="reset">
      {gameOver || isWinner === "draw" ? <button className="reset" onClick={reset}>Play Again</button> : ""}

        </div>
   
    </>
  );
}

export default App;
