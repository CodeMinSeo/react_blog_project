function About() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4 fw-bold">About My Blog</h1>
      <p className="lead text-muted">이 블로그는 개발과 일상, 그리고 생각을 공유하는 공간입니다.</p>
      <div className="row mt-5">
        <div className="col-md-6 mx-auto">
          <p className="text-muted">
            안녕하세요! 이 블로그는 제가 공부하며 겪는 다양한 개발 이야기와 프로젝트 진행 과정,
            그리고 일상에서 느낀 점들을 기록하는 공간입니다.
            웹 개발, 앱 개발, 그리고 다양한 IT 관련 이야기를 중심으로 포스팅하고 있습니다.
          </p>
          <p className="text-muted">
            이 블로그가 누군가에게는 도움이 되기를 바라며, 꾸준히 업데이트하고자 노력하고 있습니다.
            좋은 하루 보내세요!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About