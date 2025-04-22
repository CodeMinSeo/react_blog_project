package bitc.fullstack503.boardapiserver.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

//    스프링 웹 서버 설정을 위한 WebMvcConfig 인터페이스를 상속받아
//    addCorsMappings() 메소드를 구현하여 CORS 설정을 서버 전체로 지정할 수 있음
//    addMapping(패턴) : CORS 설정을 지정할 경로 패턴을 지정, '/**' 로 지정 시
//    해당 스프링 서버의 모든 URL에 대해서 CORS 규칙을 제외함
//    allowedOrigins(url) : 허용할 URL 설정

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);

    }
}
