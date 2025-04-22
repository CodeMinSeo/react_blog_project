import {create} from "zustand";

// zustand 상태 저장소 생성
const useNameStore = create((set) => ({
  name: 'Guest',
  setupName: (newName) => set(() => ({ name: newName})),
}));

export default useNameStore