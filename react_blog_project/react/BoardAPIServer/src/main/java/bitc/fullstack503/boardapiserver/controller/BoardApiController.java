package bitc.fullstack503.boardapiserver.controller;

import bitc.fullstack503.boardapiserver.dto.BoardDTO;
import bitc.fullstack503.boardapiserver.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// @CrossOrigin : CORS 오류 발생 시 지정한 URL에서 요청하는 리소스는 CORS 규칙 위반에서 제외하는 어노테이션
// 메소드나 클래스에 적용
// URL은 여러개를 사용할 수 있음

//@CrossOrigin({"http://http://localhost:5173/", "http://http://localhost:8080/"})
@RequestMapping("/api")
@RestController
public class BoardApiController {

    @Autowired
    private BoardService boardService;

    @GetMapping({"", "/"})
    public Object index() {
        return "Board API Server 접속";
    }

    @GetMapping({"/test"})
    public Object test() {
        return "Board API Server test 접속";
    }

    // 파라미터가 없는 GET 방식 통신 (전체 검색)
    @GetMapping("/boardList")
    public Object selectBoardList() throws Exception {

        List<BoardDTO> boardList = boardService.selectBoardList();

        return boardList;
    }

    // 파라미터가 있는 GET 방식 통신 (선택 검색)
    @GetMapping("/boardDetail")
    public Object selectBoardDetail(@RequestParam("boardIdx") int boardIdx) throws Exception {

        BoardDTO board = boardService.selectBoardDetail(boardIdx);

        return board;
    }

    // 파라미터가 있는 POST 통신 방식 (추가)
    @PostMapping("/boardWrite")
    public void insertBoard(BoardDTO board) throws Exception {

        System.out.println(board);

        boardService.insertBoard(board);

        //  받은거 그대로 출력
//        Map<String, Object> resData = new HashMap<>();
//
//        resData.put("result", "success");
//        resData.put("data", board);


//        return resData;
    }

    // 파라미터가 있는 Put 통신 방식 (업데이트)
    @PutMapping("/boardUpdate")
    public void updateBoard(BoardDTO board) throws Exception {

        System.out.println(board);

        boardService.updateBoard(board);
    }


    // 파라미터가 있는 Delete 통신 방식 (삭제)
    @DeleteMapping("/boardDelete")
    public void deleteBoard(BoardDTO board) throws Exception {

        System.out.println(board);

        boardService.deleteBoard(board);
    }
}
