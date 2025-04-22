function ErrorPage() {
  return (
    <div>
      <h1 className={'display-3'}>오류 페이지</h1>
      <p>Route 의 path 속성에 지정된 url 이 아닌 다른 url 을 입력 시 접속되는 오류 페이지</p>
    </div>
  );
}

export default ErrorPage;