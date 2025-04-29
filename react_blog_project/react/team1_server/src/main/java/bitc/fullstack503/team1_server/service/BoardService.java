package bitc.fullstack503.team1_server.service;

import bitc.fullstack503.team1_server.dto.BoardDTO;

import java.util.List;

public interface BoardService {
    List<BoardDTO> selectBoardList() throws Exception;

    BoardDTO selectBoardDetail(int boardIdx) throws Exception;

    void insertBoard(BoardDTO board) throws Exception;

    void updateBoard(BoardDTO board) throws Exception;

    void deleteBoard(BoardDTO board) throws Exception;
}
