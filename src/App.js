import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    console.log('add');
    this.setState({ count: this.state.count + 1 });
    // 참고로 이건 좋은 코드가 아님, 너무 state 의존적
    // 아래 코드가 더 나은 코드
    //this.setState(current => ({count: current.count + 1}))
  };
  minus = () => {
    console.log('minus');
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;

/**
 * function component function, 뭔가를 return, screen에 표시
 * class component class, react component로부터 확장되고 screen에 표시
 * react는 자동적으로 모든 클래스 컴포넌트의 render method를 실행함
 *
 * class component 는  state를 가지고 있음!!!
 */
/**
 * state는 obj
 * component의 data를 넣을 공간이 있고 이 데이터는 변함
 * state 에는 바꾸고 싶은 데이터를 넣음
 */
/**
 * app에서 data를 어떻게 바꿀것인가
 * 클래스 내부에 js func 2개 만듦
 * func 호출하는 방법
 * button의 onClick prop 사용
 */
/**
 * state는 직접 변경하면 안됨 setState() 사용
 * setState()를 호출하면 react가 우리가 언제 setState()를 호출할지,
 * 또 내가 view를 refresh하고 render mehtod를 refresh 하길 원하는걸 앎
 */
