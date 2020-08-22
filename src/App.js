import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
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
 * => setState()를 호출할때마다 react는 다시 render 함!!!!!
 */
/**
 * life cycle
 * react class component는 단순히 render 메소드 말고 더 많은 걸 가지고 있음
 * life cycle method
 * 기본적으로 react component를 생성하는, 그리고 없애는 방법
 *
 * component 가 생성될 때 render 전 호출되는 function
 * component가 render 후 호출되는 function
 * add를 눌러서 component가 update 될 때 호출되는 function
 * 1. mounting 태어날 때
 * constructor() -> js class
 * render()
 * componentDidMount() => component가 render 할 때!
 * 이 컴포넌트는 처음 랜더됐어!
 *
 * 2. updating 업데이트 될때
 * 업데이트의 원인은 나!
 * add, minus 클릭해서 state를 변경할 때! 그게 업데이트
 * render()
 * componentDidUpdate()
 *
 * 3. unmounting 죽을 때 ex) 페이지 바뀔 때
 * componentWillUnmount()
 */
