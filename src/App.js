import { useEffect, useState } from "react";
import TicToeBox from "./components/TicToeBox";
import "./styles.css";

const initialBox = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
const checkRows = (rows) => {
  let winner = "";
  rows.forEach((element) => {
    let prevValue = element[0];
    for (let index = 1; index < element.length; index++) {
      if (element[index] === prevValue) {
        prevValue = element[index];
      } else {
        return "no winner";
      }
    }
    winner = prevValue;
  });
  return winner;
};
export default function App() {
  const [ticToeValue, setTickToeValue] = useState(initialBox);
  const [symbol, setSymbol] = useState(true);
  useEffect(() => {
    const isAllChecked = ticToeValue.every((value) => {
      return value.every((value) => value === true || value === false);
    });
    if (isAllChecked) {
      const winner = checkRows(ticToeValue);
      console.log(winner);
      if (winner === true || winner === false) {
        const alertMessage = winner === true ? "O" : "X";
        return alert(alertMessage);
      }
    }
  }, [ticToeValue]);

  // function update(row, rowIndex, symbol) {
  //   const currentTicToeValue = ticToeValue;
  //   currentTicToeValue[row][rowIndex] = symbol;
  //   return currentTicToeValue;
  // }
  const handleTicToeBox = (row, rowIndex, symbol) => {
    //const currentTicToeValue = ticToeValue;
    // currentTicToeValue[row][rowIndex] = symbol;
    console.log("symbol", symbol);
    console.log("row", row, "type: ", typeof row);
    console.log("rowIndex", rowIndex, "type : ", typeof rowIndex);

    setTickToeValue((prev) => {
      for (let index = 0; index < prev.length; index++) {
        for (let column = 0; column < prev.length; column++) {
          if (index === row && column === rowIndex) {
            prev[index][column] = symbol;
          }
        }
      }
      return prev;
    });
    setSymbol((prevValue) => !prevValue);
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TicToeBox
          row={0}
          rowIndex={0}
          handleTicToe={handleTicToeBox}
          symbol={symbol}
          currentValue={ticToeValue}
        />
        <TicToeBox
          row={0}
          rowIndex={1}
          handleTicToe={handleTicToeBox}
          symbol={symbol}
          currentValue={ticToeValue}
        />
        <TicToeBox
          row={0}
          rowIndex={2}
          handleTicToe={handleTicToeBox}
          symbol={symbol}
          currentValue={ticToeValue}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TicToeBox
          row={1}
          rowIndex={0}
          handleTicToe={handleTicToeBox}
          symbol={symbol}
          currentValue={ticToeValue}
        />
        <TicToeBox
          row={1}
          rowIndex={1}
          handleTicToe={handleTicToeBox}
          symbol={symbol}
          currentValue={ticToeValue}
        />
        <TicToeBox
          row={1}
          rowIndex={2}
          handleTicToe={handleTicToeBox}
          symbol={symbol}
          currentValue={ticToeValue}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TicToeBox
          row={2}
          rowIndex={0}
          handleTicToe={handleTicToeBox}
          symbol={symbol}
          currentValue={ticToeValue}
        />
        <TicToeBox
          row={2}
          rowIndex={1}
          handleTicToe={handleTicToeBox}
          symbol={symbol}
          currentValue={ticToeValue}
        />
        <TicToeBox
          row={2}
          rowIndex={2}
          handleTicToe={handleTicToeBox}
          symbol={symbol}
          currentValue={ticToeValue}
        />
      </div>
    </div>
  );
}
