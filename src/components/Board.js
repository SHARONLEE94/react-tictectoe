import React, { Component } from "react";
import Square from './Square';
import './Board.css'

export default class Board extends Component {

  // state만들기
  constructor(props) {
    super(props);
    this.state = {
      squares:Array(9).fill(null), 
    }
  }

  // square 컴포넌트 클릭시 변화 주기
  // => square 클릭시 square의 state 값을 X로 변경
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i]='X';
    this.setState({squares : squares});
  }


  renderSquare (i) {
    return <Square 
              value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
  }

  render () {
    return (
    <div>
      <div>game-board</div>
      <div className="status">Next Player : X , O</div>
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        </div>
    </div>
    )
  }
}