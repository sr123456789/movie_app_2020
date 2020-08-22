import React from 'react';

function Food({ fav, picture }) {
  // 인자로 props를 넣어도 되고 {fav}도 됨
  // console.log(props); //object
  // console.log(props.fav); //kimchi
  // props.fav === {fav} es6 문법
  return (
    <div>
      <h2>I like {fav}</h2>
      <img src={picture} alt={fav} />
    </div>
  );
}

// food의 object 의 배열
const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image:
      'https://contents.lotteon.com/itemimage/LD/13/34/17/29/7_/0/LD133417297_0_1.jpg/dims/resizef/256x256',
  },
  {
    id: 2,
    name: 'ramen',
    image:
      'https://img1.daumcdn.net/relay/cafe/original/?fname=http%3A%2F%2Fkid.chosun.com%2Fsite%2Fdata%2Fimg_dir%2F2014%2F08%2F24%2F2014082402054_0.jpg',
  },
  {
    id: 3,
    name: 'bread',
    image: 'https://t1.daumcdn.net/cfile/blog/2555774C58EC9C3D11',
  },
  {
    id: 4,
    name: 'apple',
    image:
      'https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg',
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image}></Food>
      ))}
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
 *
 *
 * <Food fav='kimchi />
 * <Food fav='kimbab />
 * ....
 * 비효율적, 새로운 음식을 추가할 때마다 복붙 해야함
 * food 컴포넌트에 동적으로 데이터 추가하기
 * 배열을 만들고(foodILike) app 컴포넌트에서 매핑으로 출력되게 만듦
 *
 *
 * 이렇게도 정리 가능
 * function renderFood(dish) {
 *   return <Food name={dish.name} picture={dish.image}></Food>;
 * }
 *
 * function App() {
 *   return (
 *     <div>
 *       {console.log(foodILike.map(renderFood))}
 *       {foodILike.map(renderFood)}
 *     </div>
 *   );
 * }
 *
 *
 * img src 태그에 alt도 설정을 해줘야
 * img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
 * 이런 문구가 콘솔창에 뜨지 않음
 *
 */
