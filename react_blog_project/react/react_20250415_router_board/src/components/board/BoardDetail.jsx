//  BoardDetail.jsx
//  25. 4. 15.

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// const board = {boardIdx: 7, title: '테스트 제목 7', contents: '테스트 내용 7', createId: 'test5', createDate: '2025-04-07', hitCnt: 14};

function BoardDetail() {

  const navigate = useNavigate();

  // 통신에서 idx를 파라로 넘겨주고 가져온을 통해 가져온 상세보드 정보를 담을 객체 board
  const [board, setBoard] = useState({});
  // 선택된 객체 board가 가진 제목
  const [title, setTitle] = useState('');
  // 선택된 객체 board가 가진 내용
  const [contents, setContents] = useState('');

  // http://localhost:5173/board/boardDetail/1 에 있는 리스트에서 선택된 요소의 idx 값을 가져옴
  const { boardIdx } = useParams();

  const changeTitle = e => setTitle(e.target.value);
  const changeContents = e => setContents(e.target.value);

  // 상세페이지 해당 보드 가져와서 화면에 정보 뿌리기
  useEffect(() => {
    // axios 를 이용하여 서버와 통신

    // 파라미터 전달 시 주소에 직접 입력하는 방식
    // axios.get("http://localhost:9090/api/boardDetail?boardIdx=1")
    // 파라미터 전달 시 params 속성을 사용하여 파라미터를 전달하는 방식
    axios.get("http://localhost:9090/api/boardDetail", {
      params: {
        boardIdx,
      }
    })
      .then(res => {
        console.log('axios를 통한 비동기 통신 (get 파라미터 방식) 성공')
        console.log(res.data)

        // 통신해서 가져온 값을 각각의 state에 담아서 화면서 뿌리기
        setTitle(res.data.title);
        setContents(res.data.contents);
        setBoard(res.data);
      })
      .catch(err => {
        console.log("비동기 통신 (get 파라미터 방식) 중 오류가 발생했습니다.")
        console.log(err)
      })


    // 상세페이지 화면에 선택한 요소의 제목과 내용을 표시
    setTitle(board.title);
    setContents(board.contents);
  }, []);

  // 수정
  const handleUpdate = () => {
    // 통신을 통해 보드 추가
    axios.put("http://localhost:9090/api/boardUpdate", null, {
      params: {
        boardIdx,
        title,
        contents,
      }
    })
      .then(res => {
        console.log('axios를 통한 비동기 통신 (put 파라미터 방식) 성공')
        console.log(res.data)
      })
      .catch(err => {
        console.log("비동기 통신 (put 파라미터 방식) 중 오류가 발생했습니다.")
        console.log(err)
      })

    // 수정 후 리스트로 돌아가기
    navigate('/board');
  }

  // 삭제
  const handleDelete = () => {
    // 통신을 통해 보드 추가
    axios.delete("http://localhost:9090/api/boardDelete", {
      params: {
        boardIdx,
      }
    })
      .then(res => {
        console.log('axios를 통한 비동기 통신 (delete 파라미터 방식) 성공')
        console.log(res.data)
      })
      .catch(err => {
        console.log("비동기 통신 (delete 파라미터 방식) 중 오류가 발생했습니다.")
        console.log(err)
      })

    // 삭제 후 리스트로 돌아가기
    navigate('/board');
  }


  return (
    <div className={'container mt-5'}>
      <div>
        <h2>Board Detail Page</h2>
        <p>Board Index: {boardIdx}</p>
      </div>
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
              <textarea className={'form-control'} id="contents" rows="10" placeholder={'내용'} style={{minHeight: "200px"}} value={contents} onChange={changeContents}></textarea>
              <label htmlFor={'contents'}>내용</label>
            </div>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-sm'}>
            <Link to={'/board'} className={'btn btn-secondary'}>목록</Link>
          </div>
          <div className={'col-sm d-flex justify-content-end'}>
            <button type={'button'} className={'btn btn-warning'} onClick={handleUpdate}>수정</button>
            <button type={'button'} className={'btn btn-danger ms-2'} onClick={handleDelete}>삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardDetail;