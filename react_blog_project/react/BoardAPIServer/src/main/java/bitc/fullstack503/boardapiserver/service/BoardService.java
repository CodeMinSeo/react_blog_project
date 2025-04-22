package bitc.fullstack503.boardapiserver.service;

import bitc.fullstack503.boardapiserver.dto.BoardDTO;

import java.util.List;

public interface BoardService {
    List<BoardDTO> selectBoardList() throws Exception;

    BoardDTO selectBoardDetail(int boardIdx) throws Exception;

    void insertBoard(BoardDTO board) throws Exception;

    void updateBoard(BoardDTO board) throws Exception;

    void deleteBoard(BoardDTO board) throws Exception;
}
