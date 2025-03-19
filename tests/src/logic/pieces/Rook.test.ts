import Rook from "../../../../src/logic/pieces/Rook"
import Pawn from "../../../../src/logic/pieces/Pawn"
import Board from "../../../../src/logic/Board"
import Position from "../../../../src/logic/Position"

// import { PawnStub, RookStub, HorseStub } from "../../../../src/logic/utils/StubPieces"
import { PawnStub } from "../Piece.test"
//1

function createRook(isRed: boolean, position: Position): Rook {
  const code = 6
  return new Rook(isRed ? code : code + 10, position)
}

describe("Test: Rook in an empty board", () => {
  let emptyBoard: Board
  beforeAll(() => {
    emptyBoard = new Board([])
  })

  // red rook
  it("red rook at (0, 0)", () => {
    const rook = createRook(true, new Position(0, 0))
    const board = emptyBoard.addPiece(rook)
    let expectedValidMoves: Position[] = [
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
    let actualMoves: Position[] = rook.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  it("red rook at (4, 5)", () => {
    const rook = createRook(true, new Position(4, 5))
    const board = emptyBoard.addPiece(rook)
    let expectedValidMoves: Position[] = [
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
    let actualMoves: Position[] = rook.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  it("red rook at (8, 9)", () => {
    const rook = createRook(true, new Position(8, 9))
    const board = emptyBoard.addPiece(rook)
    let expectedValidMoves: Position[] = [
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
    let actualMoves: Position[] = rook.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  // black rook
  it("black rook at (0, 9)", () => {
    const rook = createRook(false, new Position(0, 9))
    const board = emptyBoard.addPiece(rook)
    let expectedValidMoves: Position[] = [
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
    let actualMoves: Position[] = rook.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  it("black rook at (4, 4)", () => {
    const rook = createRook(false, new Position(4, 4))
    const board = emptyBoard.addPiece(rook)
    let expectedValidMoves: Position[] = [
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
    let actualMoves: Position[] = rook.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  it("black rook at (8, 0)", () => {
    const rook = createRook(false, new Position(8, 0))
    const board = emptyBoard.addPiece(rook)
    let expectedValidMoves: Position[] = [
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
    let actualMoves: Position[] = rook.getAllValidMoves(board)
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

  describe("Test: Rook surrounded by obstacles", () => {
    let emptyBoard: Board
    beforeAll(() => {
      emptyBoard = new Board([])
    })

    //one firend piece
    it("rook at (4,4) blocked by one friendly piece", () => {
      const rook = new Rook(6, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(new Rook(6, new Position(4, 8)))

      let expectedValidMoves: Position[] = [
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

      let actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })

    it("rook at (4,4) blocked above by friendly piece", () => {
      const rook = new Rook(6, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(new Rook(6, new Position(6, 4)))

      let expectedValidMoves: Position[] = [
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

      let actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })

    //4 friend pieces
    it("rook at (4,4) surrounded by friendly pieces", () => {
      const rook = new Rook(6, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(new Rook(6, new Position(4, 3)))
        .addPiece(new Rook(6, new Position(4, 5)))
        .addPiece(new Rook(6, new Position(3, 4)))
        .addPiece(new Rook(6, new Position(5, 4)))

      let expectedValidMoves: Position[] = []

      let actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })

    //two friend pieces
    it("rook at (4,4) blocked by two friendly pieces", () => {
      const rook = new Rook(6, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(new Rook(6, new Position(4, 8)))
        .addPiece(new Rook(6, new Position(8, 4)))

      let expectedValidMoves: Position[] = [
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

      let actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })

    //three friend pieces
    it("rook at (4,4) blocked by three friendly pieces", () => {
      const rook = new Rook(6, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(new Rook(6, new Position(4, 8)))
        .addPiece(new Rook(6, new Position(8, 4)))
        .addPiece(new Rook(6, new Position(4, 2)))

      let expectedValidMoves: Position[] = [
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

      let actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })
    //3 pawn
    it("rook at (4,4) blocked by three friendly pawns", () => {
      const rook = new Rook(6, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(new Pawn(6, new Position(4, 8)))
        .addPiece(new Pawn(6, new Position(8, 4)))
        .addPiece(new Pawn(6, new Position(4, 2)))

      let expectedValidMoves: Position[] = [
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

      let actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })
    //3 pawnstub
    it("rook at (4,4) blocked by three friendly pawns", () => {
      const rook = new Rook(6, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(new PawnStub(6, new Position(4, 8))) // 友方 Pawn 挡住上方
        .addPiece(new PawnStub(6, new Position(8, 4))) // 友方 Pawn 挡住右侧
        .addPiece(new PawnStub(6, new Position(4, 2))) // 友方 Pawn 挡住下方

      let expectedValidMoves: Position[] = [
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

      let actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })

    //4 opponents
    it("rook at (4,4) surrounded by opponent pieces", () => {
      const rook = new Rook(6, new Position(4, 4))
      const board = emptyBoard
        .addPiece(rook)
        .addPiece(new Rook(16, new Position(4, 3)))
        .addPiece(new Rook(16, new Position(4, 5)))
        .addPiece(new Rook(16, new Position(3, 4)))
        .addPiece(new Rook(16, new Position(5, 4)))

      let expectedValidMoves: Position[] = [
        new Position(4, 3),
        new Position(4, 5),
        new Position(3, 4),
        new Position(5, 4)
      ]

      let actualMoves = rook.getAllValidMoves(board)
      expect(expectedValidMoves).toHaveLength(actualMoves.length)
      expect(
        expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
      ).toBeTruthy()
    })
  })

  it("rook at (4,4) blocked by four opponent pieces", () => {
    const rook = new Rook(6, new Position(4, 4))
    const board = emptyBoard
      .addPiece(rook)
      .addPiece(new Rook(16, new Position(4, 1)))
      .addPiece(new Rook(16, new Position(4, 8)))
      .addPiece(new Rook(16, new Position(1, 4)))
      .addPiece(new Rook(16, new Position(8, 4)))

    let expectedValidMoves: Position[] = [
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

    let actualMoves = rook.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })
})
