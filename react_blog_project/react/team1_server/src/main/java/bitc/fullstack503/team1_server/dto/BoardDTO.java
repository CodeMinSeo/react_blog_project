package bitc.fullstack503.team1_server.dto;

import lombok.Data;

// 연결 원하는 테이블로 수정
@Data
public class BoardDTO {
    private int boardIdx;
    private String title;
    private String contents;
    private String createId;
    private String createDate;
    private String updateUser;
    private String updateDate;
    private int hitCnt;
}
