//  BoardList.jsx
//  25. 4. 15.

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// 임시 더미 데이터
// const boardList = [
//   {boardIdx: 7, title: '테스트 제목 7', createId: 'test5', createDate: '2025-04-07', hitCnt: 14},
//   {boardIdx: 6, title: '테스트 제목 6', createId: 'test4', createDate: '2025-04-06', hitCnt: 20},
//   {boardIdx: 5, title: '테스트 제목 5', createId: 'test3', createDate: '2025-04-05', hitCnt: 0},
//   {boardIdx: 4, title: '테스트 제목 4', createId: 'test3', createDate: '2025-04-04', hitCnt: 2},
//   {boardIdx: 3, title: '테스트 제목 3', createId: 'test1', createDate: '2025-04-03', hitCnt: 9},
//   {boardIdx: 2, title: '테스트 제목 2', createId: 'test2', createDate: '2025-04-02', hitCnt: 5},
//   {boardIdx: 1, title: '테스트 제목 1', createId: 'test1', createDate: '2025-04-01', hitCnt: 10},
// ];

function BoardList() {
  const [boardList, setBoardList] = useState([]);
  const navi = useNavigate();

  const clickDetail = (boardIdx, e) => {
    // url 파라미터 방식
    navi(`/board/boardDetail/${boardIdx}`);
    // 쿼리스트링 방식
    // navi(`/board/boardDetail?boardIdx=${boardIdx}`);
    e.preventDefault();
  }

  useEffect(() => {
    //   axios 를 사용하여 서버와 통신
    axios.get("http://localhost:8080/api/boardList")
      .then(res => {
        console.log('axios를 통한 비동기 통신 (get 방식) 성공')
        console.log(res.data)

        setBoardList(res.data);

      })
      .catch(err => {
        console.log("비동기 통신 (get 방식) 중 오류가 발생했습니다.")
        console.log(err)
      })
  }, [])

  return (
    <div className={'container mt-5'}>
      <div className={'row'}>
        <div className={'col-sm'}>
          <table className={'table table-hover table-striped text-center'}>
            <colgroup>
              <col width={'5%'}/>
              <col width={'50%'}/>
              <col width={'15%'}/>
              <col width={'15%'}/>
              <col width={'15%'}/>
            </colgroup>
            <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>등록시간</th>
              <th>추천수</th>
            </tr>
            </thead>
            <tbody>
            {
              boardList.map((item) => {
                return (
                  <tr key={item.boardIdx}>
                    <td>{item.boardIdx}</td>
                    <td className={'text-start'} onClick={(e) => clickDetail(item.boardIdx, e)}>{item.title}</td>
                    <td>{item.createId}</td>
                    <td>{item.createDate}</td>
                    <td>{item.hitCnt}</td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>
      </div>
      <div className={'mt-3 d-flex justify-content-end'}>
        <Link to={'/board/boardWrite'} className={'btn btn-primary'}>글쓰기</Link>
        {/*<Link to={'/board/boardWrite'}>*/}
        {/*  <button type={'button'} className={'btn btn-primary'}>글쓰기</button>*/}
        {/*</Link>*/}
      </div>
    </div>
  );
}

export default BoardList;