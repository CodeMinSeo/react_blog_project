import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // CORS 오류를 해결하기 위해서 프록시 서버 설정
  // server: {
  //   proxy: {
  //     // 리액트에서 사용하는 프록시 기본 주소 이름을 설정
  //     '/api': {
  //       // 실제로 접속할 서버의 주소를 설정
  //       target: 'http://localhost:9090',
  //       // CORS 해결 설정, true = 사용, false = 미사용
  //       changeOrigin: true,
  //       // 프록시 서버에서 사용할 URL 경로를 설정
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     }
  //   }
  // }
})
