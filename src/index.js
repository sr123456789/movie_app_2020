import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 * 소스코드에서는 <div id="root"></div> 말고는 보이지 않음
 * component show data.
 * <App /> 은 컴포넌트를 사용하려할 때의 컴포넌트 형태
 * 컴포넌트는 html을 반환하는 함수!
 * jsx는 javascript 안의 HTML, 카멜케이스로
 * react app은 하나의 컴포넌트만을 랜더링 해야함 -> 여기선 <App />
 * 두개 이상 하면 에러
 *  <App /> 안에 많은 컴포넌트를 넣을 수 있음
 * 그 컴포넌트 안에 또 여러개의 컴포넌트들을 import 할 수 있음
 * 결과물 : 개쩌는 동적인 application
 */
