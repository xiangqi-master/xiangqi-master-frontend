import ChessNotationAdapter, {
  getPieceName
} from "../../../src/logic/ChessNotationAdapter"
import Board from "../../../src/logic/Board"
import Position from "../../../src/logic/Position"
import Piece from "../../../src/logic/Piece"

class PieceStub extends Piece {
  constructor(code: number, position: Position) {
    super(code, position)
  }

  getAllValidMoves(): Position[] {
    return []
  }

  toString(): string {
    return getPieceName(this.getCode())
  }
}

function createStub(
  code: number,
  isRed: boolean,
  position: Position
): PieceStub {
  return new PieceStub(isRed ? code : code + 10, position)
}

function createHorseStub(isRed: boolean, position: Position) {
  return createStub(3, isRed, position)
}

function createElephantStub(isRed: boolean, position: Position) {
  return createStub(1, isRed, position)
}

function createAdvisorStub(isRed: boolean, position: Position) {
  return createStub(0, isRed, position)
}

function createRookStub(isRed: boolean, position: Position) {
  return createStub(4, isRed, position)
}

function createCannonStub(isRed: boolean, position: Position) {
  return createStub(5, isRed, position)
}

function createPawnStub(isRed: boolean, position: Position) {
  return createStub(6, isRed, position)
}

function createGeneralStub(isRed: boolean, position: Position) {
  return createStub(2, isRed, position)
}

describe("ChessNotationAdapter - toNotation", () => {
  test("Red Horse from (1, 0) to (2, 2) => 馬八进七", () => {
    const horse = createHorseStub(true, new Position(1, 0))
    const board = new Board([horse])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(1, 0),
      new Position(2, 2)
    )
    expect(notation).toBe("馬八进七")
  })

  test("Red Horse from (7, 9) to (6, 7) => 馬二退三", () => {
    const horse = createHorseStub(true, new Position(7, 9))
    const board = new Board([horse])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(7, 9),
      new Position(6, 7)
    )
    expect(notation).toBe("馬二退三")
  })

  test("Black Horse from (7, 9) to (6, 7) => 傌八进七", () => {
    const horse = createHorseStub(false, new Position(7, 9))
    const board = new Board([horse])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(7, 9),
      new Position(6, 7)
    )
    expect(notation).toBe("傌八进七")
  })

  test("Red Elephant from (6, 0) to (4, 2) => 相三进五", () => {
    const elephant = createElephantStub(true, new Position(6, 0))
    const board = new Board([elephant])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(6, 0),
      new Position(4, 2)
    )
    expect(notation).toBe("相三进五")
  })

  test("Red Advisor from (5, 0) to (4, 1) => 仕四进五", () => {
    const advisor = createAdvisorStub(true, new Position(5, 0))
    const board = new Board([advisor])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(5, 0),
      new Position(4, 1)
    )
    expect(notation).toBe("仕四进五")
  })

  test("Red Rook from (7, 9) to (6, 9) => 車二平三", () => {
    const rook = createRookStub(true, new Position(7, 9))
    const board = new Board([rook])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(7, 9),
      new Position(6, 9)
    )
    expect(notation).toBe("車二平三")
  })

  test("Red Rook from (7, 1) to (7, 4) => 車二进三", () => {
    const rook = createRookStub(true, new Position(7, 1))
    const board = new Board([rook])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(7, 1),
      new Position(7, 4)
    )
    expect(notation).toBe("車二进三")
  })

  test("Red Rook from (7, 7) to (7, 4) => 車二退三", () => {
    const rook = createRookStub(true, new Position(7, 7))
    const board = new Board([rook])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(7, 7),
      new Position(7, 4)
    )
    expect(notation).toBe("車二退三")
  })

  test("Red Pawn from (8, 3) to (8, 4) => 兵一进一", () => {
    const pawn = createPawnStub(true, new Position(8, 3))
    const board = new Board([pawn])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(8, 3),
      new Position(8, 4)
    )
    expect(notation).toBe("兵一进一")
  })

  test("Red Pawn from (8, 5) to (7, 5) => 兵一平二", () => {
    const pawn = createPawnStub(true, new Position(8, 5))
    const board = new Board([pawn])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(8, 5),
      new Position(7, 5)
    )
    expect(notation).toBe("兵一平二")
  })

  test("Black General from (4, 9) to (4, 8) => 將五进一", () => {
    const general = createGeneralStub(false, new Position(4, 9))
    const board = new Board([general])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(4, 9),
      new Position(4, 8)
    )
    expect(notation).toBe("將五进一")
  })

  //double chess

  test("Two red Rooks in same column, front one moves forward => 前車进二", () => {
    const front = createRookStub(true, new Position(0, 5))
    const back = createRookStub(true, new Position(0, 2))
    const board = new Board([front, back])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(0, 5),
      new Position(0, 7)
    )
    expect(notation).toBe("前車进二")
  })

  test("Two red Cannons in same column, back one moves back => 后炮退一", () => {
    const front = createCannonStub(true, new Position(8, 9))
    const back = createCannonStub(true, new Position(8, 7))
    const board = new Board([front, back])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(8, 7),
      new Position(8, 6)
    )
    expect(notation).toBe("后炮退一")
  })

  //mutiple chess

  test("Three red Pawns in same column, the third one moves back => 三兵退一", () => {
    const first = createPawnStub(true, new Position(8, 7))
    const second = createPawnStub(true, new Position(8, 5))
    const third = createPawnStub(true, new Position(8, 3))
    const board = new Board([first, second, third])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(8, 3),
      new Position(8, 2)
    )
    expect(notation).toBe("三兵退一")
  })

  test("Three red Pawns in same column, the second one moves horizontally => 二兵平二", () => {
    const first = createPawnStub(true, new Position(8, 7))
    const second = createPawnStub(true, new Position(8, 5))
    const third = createPawnStub(true, new Position(8, 3))
    const board = new Board([first, second, third])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(8, 5),
      new Position(7, 5)
    )
    expect(notation).toBe("二兵平二")
  })

  test("Four red Pawns in same column, the second one moves horizontally => 四兵退一", () => {
    const first = createPawnStub(true, new Position(8, 7))
    const second = createPawnStub(true, new Position(8, 5))
    const third = createPawnStub(true, new Position(8, 3))
    const fourth = createPawnStub(true, new Position(8, 2))
    const board = new Board([first, second, third, fourth])
    const notation = ChessNotationAdapter.toNotation(
      board,
      new Position(8, 2),
      new Position(8, 1)
    )
    expect(notation).toBe("四兵退一")
  })
})
