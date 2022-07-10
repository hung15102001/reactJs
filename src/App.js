import React, { useState } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import styled from "styled-components";
import Square from "./components/square";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlay, setXPlay] = useState(true);
  const handlePlay = (index) => {
    const temp = board.slice();
    if(xPlay){
      temp[index] = "x";
    }else{
      temp[index] = "o"
    }
    setBoard(temp);
    setXPlay(!xPlay);
  }

  const refreshPage = () =>{
    window.location.reload(false);
  }
  const winners = winner(board);
  return (
    <Container>
      {winners ? <h2>{winners} is win</h2> : "Next Player: " + (xPlay ? "X" : "O")}
      <Board>
          {board.map((item, index)=><Square handlePlay={()=> handlePlay(index)} value={item} /> )}
      </Board>
      {winners ? <Button className="" onClick={refreshPage}>Reset</Button> : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Board = styled.div`
  background: lightgray;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  max-width: 250px;
  margin: auto;
`;

const Button = styled.button`
    width: 150px;
    height:40px;
    margin-top: 24px;
    background: green;
    text-align: center;
    font-weight: bold;
    color: white;
    border-radius: 8px;
`

const winner = (board) => {
  const whowin =  [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
  ]

  for(let i = 0; i< whowin.length; i++){
    const [a,b,c] = whowin[i];
    if(board[a] === board[b] && board[a] === board[c]){
   
        return board[a];
    }else{
      // alert('Hòa');
      // setTimeout(()=>{
      //  window.location.reload(false);
      // },5000)
    }
  }
  return null
}

export default App;
