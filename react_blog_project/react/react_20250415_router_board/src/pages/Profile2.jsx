import { useNavigate, useParams } from 'react-router-dom';

function Profile2() {

  // useParams() 흑을 사용하여 파라미터로 전달된 데이터를 모두 가져옴
  const profile = useParams();
  console.log(`useParams() 로 가져온 데이터 `);
  console.log(profile);

  // useNavigate() 훅 사용 시 Link 컴포넌트 없이 소스코드를 통해서 원하는 페이지로 이동할 수 있음
  // useNavigate() 를 저장한 변수의 매개변수로 음수 값 사용 시 이전 페이지로 이동
  // useNavigate() 를 저장한 변수의 매개변수로 양수 값 사용 시 다음 페이지로 이동
  // useNavigate() 를 저장한 변수의 매개변수로 url 을 입력 시 지정한 페이지로 이동
  //    url은 Route 의 path 속성에 입력한 url 임
  const navi = useNavigate();

  const goPrev = () => navi(-1);
  const goNext = () => navi(1);
  const goAbout = () => navi('/about');

  return (
    <div>
      <h1>Profile2 페이지</h1>
      <p>URL 파라미터 방식으로 데이터를 가져오는 페이지</p>
      <br/><hr/><br/>
      <h4>useParams() 사용 파라미터 1 : {profile.username}</h4>
      <h4>useParams() 사용 파라미터 2 : {profile.age}</h4>

      <button type={'button'} className={'btn btn-primary'} onClick={goPrev}>뒤로 가기</button>
      <button type={'button'} className={'btn btn-success'} onClick={goNext}>앞으로 가기</button>
      <button type={'button'} className={'btn btn-info'} onClick={goAbout}>지정한 곳으로 가기</button>
    </div>
  );
}

export default Profile2;