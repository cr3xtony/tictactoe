import './App.css';
import React, { useState, useEffect } from 'react';
import Square from './components/Square';

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('X');
  const [result, setResult] = useState('');
  const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    checkWin();
    if (result) {
      alert(`${result} Wins!!!`);
    }
  }, [board, result]);

  useEffect(() => {
    if (result) {
      setResult('');
      restart();
    }
  }, [result]);

  const restart = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setPlayer('X');
  };
  const checkWin = () => {
    let countX = 0;
    let countO = 0;
    patterns.forEach((element) => {
      element.forEach((el) => {
        if (board[el] == 'X') {
          countX++;
        }
        if (board[el] == 'O') {
          countO++;
        }
      });
      console.log('CountX', countX);
      console.log('CountO', countO);
      if (countX === 3) {
        setResult('X');
      }
      if (countO === 3) {
        setResult('O');
      } else {
        countX = 0;
        countO = 0;
      }
    });
  };
  const chooseSquare = (square) => {
    setBoard(
      board.map((val, index) => {
        if (index == square && val == '') {
          return player;
        }
        return val;
      })
    );
    if (player == 'X' && board[square] == '') {
      setPlayer('O');
    } else if (player == 'O' && board[square] == '') {
      setPlayer('X');
    }
  };
  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
