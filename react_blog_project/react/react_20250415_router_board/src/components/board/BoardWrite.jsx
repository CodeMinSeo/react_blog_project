
//  BoardWrite.jsx
//  25. 4. 15.

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardWrite() {
  const [title, setTitle] = useState('');
  const [createId, setCreateId] = useState('');
  const [contents, setContents] = useState('');

  const navigate = useNavigate();

  const changeTitle = e => setTitle(e.target.value);
  const changeCreateId = e => setCreateId(e.target.value);
  const changeContents = e => setContents(e.target.value);

  // 파라미터가 있는 POST 통신 방식 (추가)
  const handleWrite = () => {
    axios.post("http://localhost:9090/api/boardWrite", null, {
      params: {
        title: title,
        contents: contents,
        createId: "test1",
      },
    })
      .then(res => {
        console.log('axios를 통한 비동기 통신 (post 파라미터 방식) 성공')
        console.log(res.data)
      })
      .catch(err => {
        console.log("비동기 통신 (post 파라미터 방식) 중 오류가 발생했습니다.")
        console.log(err)
      })

    navigate('/board'); // BoardList 페이지로 이동

  }

  return (
    <div className={'container mt-5'}>
      <div className={'row'}>
        <div className={'col-sm-6 mx-auto'}>
          <form onSubmit={handleWrite}>
            <div className={'mt-3'}>
              <label htmlFor="title" className={'form-label'}>제목 : </label>
              <input type="text" className={'form-control'} id={'title'} value={title} onChange={changeTitle} placeholder={'제목을 입력하세요'}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor="user-id" className={'form-label'}>사용자 ID : </label>
              <input type="text" className={'form-control'} id={'user-id'} value={createId} onChange={changeCreateId} placeholder={'사용자 ID를 입력하세요'}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor="contents" className={'form-label'}>내용 : </label>
              <textarea className={'form-control'} id={'contents'} rows={10} value={contents} onChange={changeContents} placeholder={'내용을 입력하세요'}></textarea>
            </div>
            <div className={'mt-3 d-flex justify-content-end'}>
              <button type={'submit'} className={'btn btn-primary'}>확인</button>
              <Link to={'/board'} className={'btn btn-secondary ms-2'}>취소</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BoardWrite;
