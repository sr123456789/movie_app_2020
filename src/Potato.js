/**
 * 컴포넌트 만드는 방법
 * 1. 컴포넌트를 작성할 때마다 import React from "react" 써줘야함
 * 이걸 안쓰면 react는 여기에 jsx가 있는 컴포넌트를 사용하는 것을 이해하지 못함
 * 2. 시작은 대문자로
 * 3. 컴포넌트 만든 후 export default Potato
 * 4. App.js 로 가서 import potato 후 App 컴포넌트 안에 Potato 컴포넌트 집어넣기
 */
import React from 'react';

function Potato() {
  return <h3>I love potato.</h3>;
}

export default Potato;
