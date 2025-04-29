package bitc.fullstack503.team1_server.mapper;

import bitc.fullstack503.team1_server.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    List<BoardDTO> selectBoardList() throws Exception;

    BoardDTO selectBoardDetail(int boardIdx) throws Exception;

    void insertBoard(BoardDTO board) throws Exception;

    void updateBoard(BoardDTO board) throws Exception;

    void deleteBoard(BoardDTO board) throws Exception;
}
