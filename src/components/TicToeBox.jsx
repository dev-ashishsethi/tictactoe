const TicToeBox = (props) => {
  const { row, rowIndex, symbol, handleTicToe, currentValue } = props;
  console.log("currentValue", currentValue);
  const currentSymbol = currentValue[row][rowIndex];

  return (
    <button
      onClick={() => handleTicToe(row, rowIndex, symbol)}
      style={{
        width: "2rem",
        height: "2rem",
        border: "1px solid black"
      }}
      disabled={currentSymbol === true || currentSymbol === false}
    >
      {currentSymbol === true ? "O" : currentSymbol === false ? "X" : ""}
    </button>
  );
};
export default TicToeBox;
