import './App.css'
import Board from './components/Board';

function App() {
  return (
    <div className="game">
      <Board className="game-board"/>
      <div className="game-info">game-info</div>
    </div>
  );
}

export default App;
