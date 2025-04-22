


// zustand 상태 관리 라이브러리
// zustand 는 리액트에서 사용하는 상태 관리 라이브러리로 Context API 혹은 useContext 와 같이
// 데이터를 컴포넌트에 저장하고 원하는 위치에서 불러서 사용하는 방식
// create() 함수를 사용하여 object 타입의 객체를 생성하고 상태 관리할 key와 value를 저장함
// 상태 관리 중인 객체의 데이터를 변경하기 위한 상태 변경 함수를 사용자가 입력하여 외부에서 데이터룰 수정할 수 있도록 함
// 단순히 조상 컴포넌트에서 여러 단계 아래의 자손 컴포넌트로 데이터를 전달 시 데이터 수정용 함수를 입력하지 않아도 됨

// create() : zustand 에서 제공하는 함수로 zustand 상태 관리 객체를 생성
// set() : zustand에서 제공하는 함수로 zustand 로 상태 관리 중인 객체의 데이터를 수정

// 사용법 :
// 선언 :
// zustand 라이브러리를 사용하기 위해 import
// > import { create } from 'zustand';

// 변수명을 선언, 기본적으로 커스텀 훅 이기 때문에 user를 붙임
// 접미사 Store는 상태관리 라이브러리 변수라는 의미로 사용함(필요시 제거하거나 원하는 것을 사용), Store는 관례적으로 사용함

// > const use변수명Store = create((set) => ({
// >      변수명: '초기값',       // key : value 형태로 사용
// >      데이터수정 함수명: (newValue) => set(() => ({변수명: newValue})),        // 데이터 수정용 함수이기 때문에 원하는 이름으로 사용 가능, 여러개를 추가하여 사용할 수 있음
// > }));

// 외부에서 출력될 변수명을 default export 로 설정
// > export default use변수명Store;

// 사용 :
// default export로 설정된 zustand 객체를 import 하여 사용
// > import use변수명Store from './stores/변수명Store';

// 타겟 컴포넌트에서 사용 시 객체 분해 할당 방식을 사용하여 zustand 객체에서 변수와 데이터 수정용 함수를 모두 가져옴
// 단순히 값만 필요 시 변수만 가져올 수 있음, 데이터 수정만 필요할 경우 데이터 수정용 함수만 가져올 수 있음
// 객체 분해 할당 시 반드시 뒤에 ()를 붙여서 함수를 실행해야 함
// > const { 변수명, 데이터수정 함수명 } = use변수명Store();

// 데이터가 수정되는 부분에서 수정되는 데이터를 계속 확인하기 위해서 useEffect()를 사용하고 의존성 배열에 포함하여 확인
// > useEffect(() => {
// >    데이터수정함수1('수정 데이터 1');
// >    데이터수정함수2('수정 데이터 2');
// > }, [데이터수정함수, 데이터수정함수2, ...])

import ThemeContext from "../contexts/ThemeContext.jsx";
import UserContext from "../contexts/UserContext.jsx";

// useContext 훅을 사용하기 위해서 import
import {useContext} from "react";

// zustand의 Store 객체를 사용하기 위해서 import
import useThemeStore from "../stores/ThemeStore.jsx";
import useNameStore from "../stores/NameStore.jsx";

function ProfilePage(props) {

  //   Context 객체에 저장된 내용 가져오기
  const contextTheme = useContext(ThemeContext);
  const contextUser = useContext(UserContext);

  // zustand의 Store 객체에 저장된 내용 가져오기, 객체 분할 할당 사용
  // 선언한 이름 그대로 사용하기
  const { theme } = useThemeStore();
  const { name } = useNameStore();

  return (
      <div>
        <h4>props로 받아온 user : {props.user}</h4>
        <h4>props로 받아온 theme : {props.theme}</h4>

        <hr/>

        <h4>userContext 로 받아온 user : {contextUser}</h4>
        <h4>userContext 로 받아온 theme : {contextTheme}</h4>

        <hr/>

          <h4>zustand 로 받아온 theme : {theme}</h4>
          <h4>zustand 로 받아온 name : {name}</h4>
      </div>
  );
}


export default ProfilePage