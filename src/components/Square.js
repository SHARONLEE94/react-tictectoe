import React, { Component } from 'react' // rcc +  tab 자동완성
import './Square.css'

export default class Square extends Component {

  // props
  // 1. props는 properties의 줄임말
  // 2. props는 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터등을 전달하는 방법
  // 3. props는 읽기 전용(immutable)으로 자녀 컴포넌트 입장에서는 변하지 않는다.
  // (변하게 하고자 하면 부모 컴포넌트에서 state로 변경시켜줘야 한다.)


  // state
  // 1. 부모 컴포넌트에서 자녀 컴포넌트로 데이터를 보내는게 아닌 해당 컴포넌트 내부에서 데이터를 전달할 때 사용
  // 2. 예를 들어 검색 창에 글을 입력할 때 글이 변하는 것은 state을 바꾸는 코드로 작성
  // 3. state는 변경 가능(mutable
  // 4. state가 변하면 re-render 된다.

  // state 생성
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      value : props.value, 
    }
  }

  render() {
    return (
      <button 
        className='square' 
        // state 변경
        onClick={()=> {
          console.log('전 : ' , this.state.value)
          this.setState({value:'X'})
        }}>
          {/* state 이용 */}
          {console.log('후 : ', this.state.value)}
          {this.state.value} 
      </button>
    )
  }
}
