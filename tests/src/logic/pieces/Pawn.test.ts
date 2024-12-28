import Pawn from "../../../../src/logic/pieces/Pawn"
import Board from "../../../../src/logic/Board"
import Position from "../../../../src/logic/Position"

function createPawn(isRed: boolean, position: Position): Pawn {
  const code = 6
  return new Pawn(isRed ? code : code + 10, position)
}

describe("Test: Pawn in an empty board", () => {
  let emptyBoard: Board
  beforeAll(() => {
    emptyBoard = new Board([])
  })

  // red pawn
  it("red pawn at (0, 3)", () => {
    const pawn = createPawn(true, new Position(0, 3))
    const board = emptyBoard.addPiece(pawn)
    let expectedValidMoves: Position[] = [new Position(0, 4)]
    let actualMoves: Position[] = pawn.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  it("red pawn at (0, 5)", () => {
    const pawn = createPawn(true, new Position(0, 5))
    const board = emptyBoard.addPiece(pawn)
    let expectedValidMoves: Position[] = [
      new Position(0, 6),
      new Position(1, 5)
    ]
    let actualMoves: Position[] = pawn.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  it("red pawn at (2, 6)", () => {
    const pawn = createPawn(true, new Position(2, 6))
    const board = emptyBoard.addPiece(pawn)
    let expectedValidMoves: Position[] = [
      new Position(2, 7),
      new Position(1, 6),
      new Position(3, 6)
    ]
    let actualMoves: Position[] = pawn.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  it("red pawn at (8, 9)", () => {
    const pawn = createPawn(true, new Position(8, 9))
    const board = emptyBoard.addPiece(pawn)
    let expectedValidMoves: Position[] = [new Position(7, 9)]
    let actualMoves: Position[] = pawn.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  // black pawn
  it("black pawn at (0, 5)", () => {
    const pawn = createPawn(false, new Position(0, 5))
    const board = emptyBoard.addPiece(pawn)
    let expectedValidMoves: Position[] = [new Position(0, 4)]
    let actualMoves: Position[] = pawn.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  it("black pawn at (0, 4)", () => {
    const pawn = createPawn(false, new Position(0, 4))
    const board = emptyBoard.addPiece(pawn)
    let expectedValidMoves: Position[] = [
      new Position(0, 3),
      new Position(1, 4)
    ]
    let actualMoves: Position[] = pawn.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  it("black pawn at (6, 2)", () => {
    const pawn = createPawn(false, new Position(6, 2))
    const board = emptyBoard.addPiece(pawn)
    let expectedValidMoves: Position[] = [
      new Position(6, 1),
      new Position(5, 2),
      new Position(7, 2)
    ]
    let actualMoves: Position[] = pawn.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  it("black pawn at (8, 0)", () => {
    const pawn = createPawn(false, new Position(8, 0))
    const board = emptyBoard.addPiece(pawn)
    let expectedValidMoves: Position[] = [new Position(7, 0)]
    let actualMoves: Position[] = pawn.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })
})

describe("Test: Pawn surrounded obstacles", () => {
  let emptyBoard: Board
  beforeAll(() => {
    emptyBoard = new Board([])
  })

  it("red pawn at (2, 6) with two obstacles", () => {
    const pawn = createPawn(true, new Position(2, 6))
    const board = emptyBoard
      .addPiece(new Pawn(6, new Position(1, 6)))
      .addPiece(new Pawn(6, new Position(3, 6)))
    let expectedValidMoves: Position[] = [new Position(2, 7)]
    let actualMoves: Position[] = pawn.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  it("black pawn at (6,2) with one obstacle", () => {
    const pawn = createPawn(false, new Position(6, 2))
    const board = emptyBoard
      .addPiece(new Pawn(16, new Position(6, 1)))
      .addPiece(new Pawn(6, new Position(5, 2)))
    let expectedValidMoves: Position[] = [
      new Position(5, 2),
      new Position(7, 2)
    ]
    let actualMoves: Position[] = pawn.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  it("black pawn at (6,2) with three obstacles", () => {
    const pawn = createPawn(false, new Position(6, 2))
    const board = emptyBoard
      .addPiece(new Pawn(16, new Position(6, 1)))
      .addPiece(new Pawn(16, new Position(5, 2)))
      .addPiece(new Pawn(16, new Position(7, 2)))
    let expectedValidMoves: Position[] = []
    let actualMoves: Position[] = pawn.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })
})

describe("Test (Pawn): Immutability of board", () => {
  const emptyBoard = new Board([])
  const pawn = createPawn(true, new Position(6, 2))

  const board = emptyBoard
    .addPiece(new Pawn(16, new Position(6, 1)))
    .addPiece(new Pawn(16, new Position(5, 2)))
    .addPiece(new Pawn(16, new Position(7, 2)))

  const expectedBoard = emptyBoard
    .addPiece(new Pawn(16, new Position(6, 1)))
    .addPiece(new Pawn(16, new Position(5, 2)))
    .addPiece(new Pawn(16, new Position(7, 2)))

  pawn.getAllValidMoves(board)
  expect(expectedBoard.equals(board)).toBeTruthy()
})
