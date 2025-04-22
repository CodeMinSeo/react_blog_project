
import { create } from 'zustand';

const useThemeStore = create(set => ({
  theme: 'primary',
  changeTheme: newTheme => set({ theme: newTheme }),
}));

export default useThemeStore;  // 사용 위치 표시
