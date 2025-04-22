import { useLocation, useSearchParams } from 'react-router-dom';

function Profile1() {

  // useLocation() 훅 사용 시 서버 url 뒤에 있는 모든 문자열을 그대로 가져옴
  // pathname : 해당 컴포넌트의 url 을 가져옴
  // search : ? 기호를 포함한
  const profile = useLocation();
  // console.log(profile);

  const { pathname, search } = profile;
  console.log(`pathname : ${pathname}`);
  console.log(`search : ${search}`);
  // search = ?param1=100&param2=300

  // 앞에 ? 제거하는 작업
  let data = search.substring(1);
  console.log(`? 제거한 문자열 : ${data}`);
  // data = param1=100&param2=300

  const dataArray = data.split('&');
  console.log(`문자 & 를 기준으로 배열로 분리`);
  console.log(dataArray);
  // dataArray = param1=100,param2=300

  const param1 = dataArray[0].split('=');
  const param2 = dataArray[1].split('=');
  console.log(`param1 : ${param1[1]}`);
  console.log(`param2 : ${param2[1]}`);
  // param1 : 100
  // param2 : 300

  // 배열 함수에 map()을 사용하여
  const lacationParams = dataArray.map(item => {
    const param = item.split('=');
    return param[1];
  })
  console.log(`lacationParams : ${lacationParams}`);
  // lacationParams = 100, 300

  // useSearchParams() 훅을 사용 시 파라미터 값을 자동으로 파싱하여 가져옴
  // 가져온 데이터를 출력하려면 get(파라미터명) 을 사용하여 출력
  const [params] = useSearchParams();
  console.log('------useSearchParams() 로 가져온 데이터 ---');
  console.log(params);
  console.log(params.get('param1'));
  console.log(params.get('param2'));
  // params.get('param1') = 100
  // params.get('param2') = 300

  return (
    <div>
      <h1>쿼리 스트링을 통해서 데이터를 가져오는 페이지</h1>
      <br/>
      <h4>useLocation() 사용 파라미터 1 : {param1[1]}</h4>
      <h4>useLocation() 사용 파라미터 2 : {param2[1]}</h4>

      {
        // 배열 함수 map()을 사용하여 필욯나 데이터만 분리 후 화면에 출력
        dataArray.map(((item, index) => {
          const param = item.split('=');
          return <h4>useLocation() 사용 파라미터 {index + 1} : {param[1]}</h4>
        }))
      }

      <br/><hr/><br/>

      <h4>useSearchParams() 사용 파라미터 1 : {params.get('param1')}</h4>
      <h4>useSearchParams() 사용 파라미터 2 : {params.get('param2')}</h4>
    </div>
  );
}

export default Profile1;