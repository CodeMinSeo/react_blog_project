//  BoardDetail.jsx
//  25. 4. 15.

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const board = {boardIdx: 7, title: '테스트 제목 7', contents: '테스트 내용 7', createId: 'test5', createDate: '2025-04-07', hitCnt: 14};

function BoardDetail() {

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const changeTitle = e => setTitle(e.target.value);
  const changeContents = e => setContents(e.target.value);

  useEffect(() => {
    // axios 를 이용하여 서버와 통신

    setTitle(board.title);
    setContents(board.contents);
  }, []);

  return (
    <div className={'container mt-5'}>
      <div>
        <div className={'row mt-3'}>
          <div className={'col-sm-3'}>
            <div className={'form-floating'}>
              <input type="text" className={'form-control'} id={'board-idx'} placeholder={'글번호'} value={board.boardIdx} readOnly={true} />
              <label htmlFor={'board-idx'}>글번호</label>
            </div>
          </div>
          <div className={'col-sm'}>
            <div className={'form-floating'}>
              <input type="text" className={'form-control'} id={'title'} placeholder={'제목'} value={title} onChange={changeTitle}/>
              <label htmlFor={'title'}>제목</label>
            </div>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-sm'}>
            <div className={'form-floating'}>
              <input type="text" className={'form-control'} id={'create-id'} placeholder={'작성자'} value={board.createId} readOnly={true} />
              <label htmlFor={'create-id'}>작성자</label>
            </div>
          </div>
          <div className={'col-sm'}>
            <div className={'form-floating'}>
              <input type="text" className={'form-control'} id={'create-date'} placeholder={'등록일'} value={board.createDate} readOnly={true} />
              <label htmlFor={'create-date'}>등록일</label>
            </div>
          </div>
          <div className={'col-sm'}>
            <div className={'form-floating'}>
              <input type="text" className={'form-control'} id={'hit-cnt'} placeholder={'추천수'} value={board.hitCnt} readOnly={true} />
              <label htmlFor={'hit-cnt'}>추천수</label>
            </div>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-sm'}>
            <div className={'form-floating'}>
              <textarea className={'form-control'} id="contents" rows="10" placeholder={'내용'} style={{minHeight: "200px"}} onChange={changeContents} value={contents}></textarea>
              <label htmlFor={'contents'}>내용</label>
            </div>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-sm'}>
            <Link to={'/board'} className={'btn btn-secondary'}>목록</Link>
          </div>
          <div className={'col-sm d-flex justify-content-end'}>
            <button type={'button'} className={'btn btn-warning'}>수정</button>
            <button type={'button'} className={'btn btn-danger ms-2'}>삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardDetail;