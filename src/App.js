import React from 'react';

function Food(props) {
  // 인자로 props를 넣어도 되고 {fav}도 됨
  // console.log(props); //object
  // console.log(props.fav); //kimchi
  // props.fav === {fav} es6 문법
  return <h3>I like {props.fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!!!!!</h1>
      <Food fav='kimchi'></Food>
      <Food fav='ramen'></Food>
      <Food fav='bread'></Food>
      <Food fav='apple'></Food>
    </div>
  );
}

export default App;

//react는 재사용 가능한 컴포넌트를 만들수 있음 -> 컴포넌트를 계속해서 반복 사용할 수 있다
/**
 * 컴포넌트에서 컴포넌트로, children 컴포넌트로 정보를 보내는 방법
 * App에서 Food 컴포넌트로 정보를 보내고 Food 에서 그정보를 어떻게 사용하는지
 * Food fav='kimchi' <- Food 컴포넌트에 정보를 보내는 방법
 * Food 컴포넌트에 fav 라는 이름의 property(props)를 kimchi 라는 value 로 줌
 * something = {true} papapapa = {['hello', 1, 3, 2, true]}
 * props에 원하는 건 뭐든지, 원하는 많은 props 전달 가능
 * 누군가 Food 컴포넌트로 정보를 보내려고하면 react는 모든 속성(props)를 가져옴
 * 그리고 Food func 컴포넌트의 argument로 넣음
 *
 *
 * 정리
 * app이 food에게 props 를 사용해서 data를 보내는 방법
 * props : 뭐든 컴포넌트에 넣게 되는 것들
 * props 는 어디로? food의 첫번째 argument
 * function food (props) {
 *   return <h1> i love {prop.fav}</h1>
 * }
 * 도 되지만 좀 더 멋있게 쓰고 싶으면
 * function food ({fav}) {
 *   return <h1>i love {fav}</h1>
 * }
 */
