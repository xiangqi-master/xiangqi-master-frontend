import Piece from "../../../../src/logic/Piece"
import Rook from "../../../../src/logic/pieces/Rook"
import Board from "../../../../src/logic/Board"
import Position from "../../../../src/logic/Position"
import PieceCode from "../../../../src/logic/factory/PieceCode"

class PawnStub extends Piece {
  public constructor(isRed: boolean, position: Position) {
    super(PieceCode.PAWN, isRed, position)
  }

  getAllValidMoves(_board: Board): Position[] {
    return []
  }

  toString(): string {
    return "P"
  }
}

function createRook(isRed: boolean, position: Position): Rook {
  return new Rook(isRed, position)
}

function createPawnStub(isRed: boolean, position: Position): PawnStub {
  return new PawnStub(isRed, position)
}

describe("Rook in an empty board", () => {
  let emptyBoard: Board
  beforeAll(() => {
    emptyBoard = new Board([])
  })

  // red rook
  test("red rook at (0, 0)", () => {
    const rook = createRook(true, new Position(0, 0))
    const board = emptyBoard.addPiece(rook)
    const expectedValidMoves: Position[] = [
      new Position(0, 1),
      new Position(0, 2),
      new Position(0, 3),
      new Position(0, 4),
      new Position(0, 5),
      new Position(0, 6),
      new Position(0, 7),
      new Position(0, 8),
      new Position(0, 9),
      new Position(1, 0),
      new Position(2, 0),
      new Position(3, 0),
      new Position(4, 0),
      new Position(5, 0),
      new Position(6, 0),
      new Position(7, 0),
      new Position(8, 0)
    ]
    const actualMoves: Position[] = rook.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red rook at (4, 5)", () => {
    const rook = createRook(true, new Position(4, 5))
    const board = emptyBoard.addPiece(rook)
    const expectedValidMoves: Position[] = [
      new Position(4, 6),
      new Position(4, 7),
      new Position(4, 8),
      new Position(4, 9),
      new Position(4, 4),
      new Position(4, 3),
      new Position(4, 2),
      new Position(4, 1),
      new Position(4, 0),
      new Position(3, 5),
      new Position(2, 5),
      new Position(1, 5),
      new Position(0, 5),
      new Position(5, 5),
      new Position(6, 5),
      new Position(7, 5),
      new Position(8, 5)
    ]
    const actualMoves: Position[] = rook.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red rook at (8, 9)", () => {
    const rook = createRook(true, new Position(8, 9))
    const board = emptyBoard.addPiece(rook)
    const expectedValidMoves: Position[] = [
      new Position(7, 9),
      new Position(6, 9),
      new Position(5, 9),
      new Position(4, 9),
      new Position(3, 9),
      new Position(2, 9),
      new Position(1, 9),
      new Position(0, 9),
      new Position(8, 8),
      new Position(8, 7),
      new Position(8, 6),
      new Position(8, 5),
      new Position(8, 4),
      new Position(8, 3),
      new Position(8, 2),
      new Position(8, 1),
      new Position(8, 0)
    ]
    const actualMoves: Position[] = rook.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  // black rook
  test("black rook at (0, 9)", () => {
    const rook = createRook(false, new Position(0, 9))
    const board = emptyBoard.addPiece(rook)
    const expectedValidMoves: Position[] = [
      new Position(0, 8),
      new Position(0, 7),
      new Position(0, 6),
      new Position(0, 5),
      new Position(0, 4),
      new Position(0, 3),
      new Position(0, 2),
      new Position(0, 1),
      new Position(0, 0),
      new Position(1, 9),
      new Position(2, 9),
      new Position(3, 9),
      new Position(4, 9),
      new Position(5, 9),
      new Position(6, 9),
      new Position(7, 9),
      new Position(8, 9)
    ]
    const actualMoves: Position[] = rook.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black rook at (4, 4)", () => {
    const rook = createRook(false, new Position(4, 4))
    const board = emptyBoard.addPiece(rook)
    const expectedValidMoves: Position[] = [
      new Position(4, 5),
      new Position(4, 6),
      new Position(4, 7),
      new Position(4, 8),
      new Position(4, 9),
      new Position(4, 3),
      new Position(4, 2),
      new Position(4, 1),
      new Position(4, 0),
      new Position(3, 4),
      new Position(2, 4),
      new Position(1, 4),
      new Position(0, 4),
      new Position(5, 4),
      new Position(6, 4),
      new Position(7, 4),
      new Position(8, 4)
    ]
    const actualMoves: Position[] = rook.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black rook at (8, 0)", () => {
    const rook = createRook(false, new Position(8, 0))
    const board = emptyBoard.addPiece(rook)
    const expectedValidMoves: Position[] = [
      new Position(7, 0),
      new Position(6, 0),
      new Position(5, 0),
      new Position(4, 0),
      new Position(3, 0),
      new Position(2, 0),
      new Position(1, 0),
      new Position(0, 0),
      new Position(8, 1),
      new Position(8, 2),
      new Position(8, 3),
      new Position(8, 4),
      new Position(8, 5),
      new Position(8, 6),
      new Position(8, 7),
      new Position(8, 8),
      new Position(8, 9)
    ]
    const actualMoves: Position[] = rook.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })
})

describe("Rook movement logic", () => {
  let emptyBoard: Board

  beforeEach(() => {
    emptyBoard = new Board([])
  })

  describe("Rook surrounded by obstacles", () => {
    let emptyBoard: Board
    beforeAll(() => {
      emptyBoard = new Board([])
    })

    // one friend piece
    test("rook at (4, 4) blocked by one friendly piece", () => {
      const rook = createRook(true, new Position(4, 4))

      const board = emptyBoard
        .addPiece(rook)
        .addPiece(createRook(true, new Position(4, 8)))

      const expectedValidMoves: Position[] = [
        new Position(4, 7),
        new Position(4, 6),
        new Position(4, 5),
        new Position(4, 3),
        new Position(4, 2),
        new Position(4, 1),
        new Position(4, 0),
        new Position(3, 4),
        new Position(2, 4),
        new Position(1, 4),
        new Position(0, 4),
        new Position(5, 4),
        new Position(6, 4),
        new Position(7, 4),
        new Position(8, 4)
      ]

      const actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })

    test("rook at (4, 4) blocked above by friendly piece", () => {
      const rook = createRook(true, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(createRook(true, new Position(6, 4)))

      const expectedValidMoves: Position[] = [
        new Position(4, 5),
        new Position(4, 6),
        new Position(4, 7),
        new Position(4, 8),
        new Position(4, 9),
        new Position(4, 3),
        new Position(4, 2),
        new Position(4, 1),
        new Position(4, 0),
        new Position(3, 4),
        new Position(2, 4),
        new Position(1, 4),
        new Position(0, 4),
        new Position(5, 4)
      ]

      const actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })

    // 4 friend pieces
    test("rook at (4, 4) surrounded by friendly pieces", () => {
      const rook = createRook(true, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(createRook(true, new Position(4, 3)))
        .addPiece(createRook(true, new Position(4, 5)))
        .addPiece(createRook(true, new Position(3, 4)))
        .addPiece(createRook(true, new Position(5, 4)))

      const expectedValidMoves: Position[] = []

      const actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })

    // two friend pieces
    test("rook at (4,4) blocked by two friendly pieces", () => {
      const rook = createRook(true, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(createRook(true, new Position(4, 8)))
        .addPiece(createRook(true, new Position(8, 4)))

      const expectedValidMoves: Position[] = [
        new Position(4, 7),
        new Position(4, 6),
        new Position(4, 5),
        new Position(4, 3),
        new Position(4, 2),
        new Position(4, 1),
        new Position(4, 0),
        new Position(3, 4),
        new Position(2, 4),
        new Position(1, 4),
        new Position(0, 4),
        new Position(5, 4),
        new Position(6, 4),
        new Position(7, 4)
      ]

      const actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })

    // three friend pieces
    test("rook at (4,4) blocked by three friendly pieces", () => {
      const rook = createRook(true, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(createRook(true, new Position(4, 8)))
        .addPiece(createRook(true, new Position(8, 4)))
        .addPiece(createRook(true, new Position(4, 2)))

      const expectedValidMoves: Position[] = [
        new Position(4, 7),
        new Position(4, 6),
        new Position(4, 5),
        new Position(4, 3),
        new Position(3, 4),
        new Position(2, 4),
        new Position(1, 4),
        new Position(0, 4),
        new Position(5, 4),
        new Position(6, 4),
        new Position(7, 4)
      ]

      const actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })
    // 3 pawn
    test("rook at (4, 4) blocked by three friendly pawns", () => {
      const rook = createRook(true, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(createRook(true, new Position(4, 8)))
        .addPiece(createRook(true, new Position(8, 4)))
        .addPiece(createRook(true, new Position(4, 2)))

      const expectedValidMoves: Position[] = [
        new Position(4, 7),
        new Position(4, 6),
        new Position(4, 5),
        new Position(4, 3),
        new Position(3, 4),
        new Position(2, 4),
        new Position(1, 4),
        new Position(0, 4),
        new Position(5, 4),
        new Position(6, 4),
        new Position(7, 4)
      ]

      const actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })
    // 3 pawnstub
    test("rook at (4,4) blocked by three friendly pawns", () => {
      const rook = createRook(true, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(createPawnStub(true, new Position(4, 8))) // 友方 Pawn 挡住上方
        .addPiece(createPawnStub(true, new Position(8, 4))) // 友方 Pawn 挡住右侧
        .addPiece(createPawnStub(true, new Position(4, 2))) // 友方 Pawn 挡住下方

      const expectedValidMoves: Position[] = [
        new Position(4, 7),
        new Position(4, 6),
        new Position(4, 5),
        new Position(4, 3),
        new Position(3, 4),
        new Position(2, 4),
        new Position(1, 4),
        new Position(0, 4),
        new Position(5, 4),
        new Position(6, 4),
        new Position(7, 4)
      ]

      const actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })

    // 4 opponents
    test("rook at (4, 4) surrounded by opponent pieces", () => {
      const rook = createRook(true, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(createRook(false, new Position(4, 3)))
        .addPiece(createRook(false, new Position(4, 5)))
        .addPiece(createRook(false, new Position(3, 4)))
        .addPiece(createRook(false, new Position(5, 4)))

      const expectedValidMoves: Position[] = [
        new Position(4, 3),
        new Position(4, 5),
        new Position(3, 4),
        new Position(5, 4)
      ]

      const actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })
  })

  test("rook at (4,4) blocked by four opponent pieces", () => {
    const rook = createRook(true, new Position(4, 4))
    const board = emptyBoard
      .addPiece(rook)
      .addPiece(createRook(false, new Position(4, 1)))
      .addPiece(createRook(false, new Position(4, 8)))
      .addPiece(createRook(false, new Position(1, 4)))
      .addPiece(createRook(false, new Position(8, 4)))

    const expectedValidMoves: Position[] = [
      new Position(4, 1),
      new Position(4, 2),
      new Position(4, 3),
      new Position(4, 5),
      new Position(4, 6),
      new Position(4, 7),
      new Position(4, 8),
      new Position(1, 4),
      new Position(2, 4),
      new Position(3, 4),
      new Position(5, 4),
      new Position(6, 4),
      new Position(7, 4),
      new Position(8, 4)
    ]

    const actualMoves = rook.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })
})
