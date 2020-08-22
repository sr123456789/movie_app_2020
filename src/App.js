import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    console.log('add');
  };
  minus = () => {
    console.log('minus');
  };

  render() {
    return (
      <div>
        <h1>The number is: </h1>
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
