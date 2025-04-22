// 상태관리를 위한 zustand 의 store 객체 생성을 위한 create() import
import { create } from 'zustand';
import * as state from 'prop-types';

// zustand는 커스텀 훅 형태로 동작, 접두사로 use 사용
// create() 를 사용하여 zustand Store 객체 생성
const useNumberStore = create(set => ({
  // 실제 데이터를 저장할 변수
  number: 0,
  // 데이터를 수정할 함수, 여러개 선언 가능, 이름을 원하는대로 정하면 됨
  upNumber: () => set((state) => ({ number: state.number + 1 })),
  // state : zustand Store 객체의 현재 상태를 의미
  // 현재 값을 이용하여 다른 값으로 수정 시 state와 함수 사용
  downNumber: () => set((state) => ({ number: state.number - 1 })),
  // 단순히 닶만 변경 시 object 타입으로 입력
  resetNumber: () => set({ number: 0 }),
  // 매개변수로 외부 데이터를 받아서 값 변경
  updateNumber: newNumber => set({ number: newNumber }),
  // 매개변수로 외부 데이터를 받아서 현재 상태의 값과 연산 시
  test: newNumber => set((state) => ({ number: state.number + newNumber })),
}));

export default useNumberStore; // 사용 위치 표시
