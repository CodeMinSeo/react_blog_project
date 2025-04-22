package bitc.fullstack503.boardapiserver.service;

import bitc.fullstack503.boardapiserver.dto.BoardDTO;
import bitc.fullstack503.boardapiserver.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardMapper boardMapper;

    @Override
    public List<BoardDTO> selectBoardList() throws Exception {
        return boardMapper.selectBoardList();
    }

    @Override
    public BoardDTO selectBoardDetail(int boardIdx) throws Exception {

//        boardMapper.updateHitCnt(boardIdx);

        BoardDTO board = boardMapper.selectBoardDetail(boardIdx);

        return board;
    }

    @Override
    public void insertBoard(BoardDTO board) throws Exception {
        boardMapper.insertBoard(board);
    }

    @Override
    public void updateBoard(BoardDTO board) throws Exception {
        boardMapper.updateBoard(board);
    }

    @Override
    public void deleteBoard(BoardDTO board) throws Exception {
        boardMapper.deleteBoard(board);
    }
}
