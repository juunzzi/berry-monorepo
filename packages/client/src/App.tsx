import generateRandomNumber from 'common';

function App() {
  const randomNumber = generateRandomNumber();

  return <div className="App">{randomNumber}</div>;
}

export default App;
