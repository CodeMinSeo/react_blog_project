
// axios : ajax 비동기 통신을 하기 위한 자바스크립트
// 리액트는 jQuery를 사용하지 않기 때문에 비동기 통신ㅇ르 위해서 axios 를 사용함
// 사용 시 해당 컴포넌트에 import 하여 사용
// 단축 메소드를 제공하고 있음 (get, post, put, delete)
// then(콜백함수) : 비동기 통신이 성공 시 자동으로 동작하는 함수
// catch(콜백함수) : 데이터 통신이 실패 시 자동으로 동작하는 함수

// 사용법 :
// 설치 : > npm install axios;

// 선언 : > import axios from 'axios';

// 사용 :
// > axios.단축메소드(접속주소, 매개변수)
//      .then(response => { 접속 성공시 실행할 소스코드 ... })
//      .catch(error => { 접속 실패 시 실행할 소스코드 ...});

// > axios({
//      url: '접속주소',
//      method: '통신 방식',
//      data: {파라미터 값으로 전달할 데이터},
//   });

// 예시 : get/delete 의 사용방법 같은, post/put 의 사용방법이 같음
// > axios.get('http://localhost:8080/login?id=asdf&pw=1234')
//      .then(res => { 성공 시 실행할 소스 })
//      .catch(err => { 실패 시 실행할 소스})

// > axios.get('http://localhost:8080/login', {
//      params: {
//          id: 'asdf',
//          ps: '1234'
//      })
//      .then(res => { 성공 시 실행할 소스 })
//      .catch(err => { 실패 시 실행할 소스 })

// > axios.delete('http://localhost:8080/login?id=asdf')
//      .then(res => { 성공 시 실행할 소스 })
//      .catch(err => { 실패 시 실행할 소스})

// > axios.delete('http://localhost:8080/login', {
//      params: {
//          id: 'asdf'
//      })
//      .then(res => { 성공 시 실행할 소스 })
//      .catch(err => { 실패 시 실행할 소스 })

// > axios.post('http://localhost:8080/login', null, {
//      params: {
//          id: 'asdf',
//          ps: '1234'
//       },
//      })
//      .then(res => { 성공 시 실행할 소스 })
//      .catch(err => { 실패 시 실행할 소스 })

// > axios.put('http://localhost:8080/login', null, {
//      params: {
//          id: 'asdf',
//          ps: '1234'
//       },
//      })
//      .then(res => { 성공 시 실행할 소스 })
//      .catch(err => { 실패 시 실행할 소스 })


import axios from "axios";

function AxiosTest() {

  const getKobisData = () => {  // 사용 위치 표시
    //   리액트에서 CROS 오류를 해결하기 위해서
    axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=901473a36828ed2528d509a51a4ee43c&targetDt=20120101')
        // res : 통신 성공 시 서버에서 전달 받는 데이터
        .then(res => {
          console.log('비동기 통신 성공!!');
          // console.log(res.data);
            // axios 를 통해서 전달받은 전체 데이터 가져오기
            // axios 를 통해서 전달되는 데이터는 object 타입으로 전달됨
            // config, data, headers, request, status, statusText 의 속성을 가지고 있음
            // 서버가 전달한 실제 데이터는 data 속성에 담겨 있음
            console.log(res);

            // 전체 데이터 중 필요한 데이터만 객체 분할 할당 방식을 사용하여 데이터 가져오기
            const { boxOfficeResult } = res.data;
            console.log(boxOfficeResult);

            // const { boxOfficeType, showRange, dailyBoxOfficeList } = boxOfficeResult;
            // console.log(boxOfficeType);
            // console.log(showRange);
            const { dailyBoxOfficeList } = boxOfficeResult;
            console.log(dailyBoxOfficeList);

            dailyBoxOfficeList.forEach(item => {
                let boxOfficeList = '';
                boxOfficeList += '순위 : ' + item.rank + '\n';
                boxOfficeList += `영화명 : ${item.movieNm}\n`;
                boxOfficeList += `개봉일 : ${item.openDt}`;
                console.log(boxOfficeList);
            });

        })
        .catch(err => {
          console.log('비동기 통신 중 오류가 발생했습니다.');
          console.log(err);
        });
  }

  return (
      <div>
        <button type={'button'} className={'btn btn-primary'} onClick={getKobisData}>
          클릭 시 데이터 가져오기
        </button>
      </div>
  )
}

export default AxiosTest