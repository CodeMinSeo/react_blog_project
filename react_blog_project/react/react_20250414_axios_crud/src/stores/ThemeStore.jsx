
// zustand 라이브러리 호출
import {create} from "zustand";

// zustand 상태 저장소 생성
const useThemeStore = create((set) => ({
    theme: 'primary',       // 외부에서 사용할 변수명, 기본값 설정
    setupTheme: (newTheme) => set(() => ({ theme: newTheme})),      // zustand로 설정한 변수를 수정하기 위한 함수
}));

// 외부에서 사용할 수 있도록 export default로 설정
export default useThemeStore