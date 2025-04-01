import Piece from "../../../../src/logic/Piece"
import Horse from "../../../../src/logic/pieces/Horse"
import Board from "../../../../src/logic/Board"
import Position from "../../../../src/logic/Position"

class PawnStub extends Piece {
  public constructor(code: number, position: Position) {
    super(code, position)
  }

  getAllValidMoves(_board: Board): Position[] {
    return []
  }

  toString(): string {
    return "P"
  }
}

function createPawnStub(isRed: boolean, position: Position): PawnStub {
  const code = 6
  return new PawnStub(isRed ? code : code + 10, position)
}

function createHorse(isRed: boolean, position: Position): PawnStub {
  const code = 3
  return new Horse(isRed ? code : code + 10, position)
}

describe("Horse in an empty board", () => {
  let emptyBoard: Board
  beforeAll(() => {
    emptyBoard = new Board([])
  })

  // red horse
  test("red horse at (1, 0)", () => {
    const horse = createHorse(true, new Position(1, 0))
    const board = emptyBoard.addPiece(horse)
    let expectedValidMoves: Position[] = [
      new Position(0, 2),
      new Position(2, 2),
      new Position(3, 1)
    ]
    let actualMoves: Position[] = horse.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red horse at (4, 3)", () => {
    const horse = createHorse(true, new Position(4, 3))
    const board = emptyBoard.addPiece(horse)
    let expectedValidMoves: Position[] = [
      new Position(2, 2),
      new Position(2, 4),
      new Position(3, 1),
      new Position(3, 5),
      new Position(5, 1),
      new Position(5, 5),
      new Position(6, 2),
      new Position(6, 4)
    ]
    let actualMoves: Position[] = horse.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red horse at (8, 8)", () => {
    const horse = createHorse(true, new Position(8, 8))
    const board = emptyBoard.addPiece(horse)
    let expectedValidMoves: Position[] = [
      new Position(6, 7),
      new Position(6, 9),
      new Position(7, 6)
    ]
    let actualMoves: Position[] = horse.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  // black horse
  test("black horse at (1, 9)", () => {
    const horse = createHorse(true, new Position(1, 9))
    const board = emptyBoard.addPiece(horse)
    let expectedValidMoves: Position[] = [
      new Position(0, 7),
      new Position(2, 7),
      new Position(3, 8)
    ]
    let actualMoves: Position[] = horse.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black horse at (4, 6)", () => {
    const horse = createHorse(true, new Position(4, 6))
    const board = emptyBoard.addPiece(horse)
    let expectedValidMoves: Position[] = [
      new Position(2, 5),
      new Position(2, 7),
      new Position(3, 4),
      new Position(3, 8),
      new Position(5, 4),
      new Position(5, 8),
      new Position(6, 5),
      new Position(6, 7)
    ]
    let actualMoves: Position[] = horse.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black horse at (0, 1)", () => {
    const horse = createHorse(true, new Position(0, 1))
    const board = emptyBoard.addPiece(horse)
    let expectedValidMoves: Position[] = [
      new Position(1, 3),
      new Position(2, 0),
      new Position(2, 2)
    ]
    let actualMoves: Position[] = horse.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })
})

describe("Horse surrounded by obstacles", () => {
  let emptyBoard: Board
  beforeAll(() => {
    emptyBoard = new Board([])
  })

  test("red horse at (2, 2) surrounded by 1 red pawn", () => {
    const horse = createHorse(true, new Position(2, 2))
    const board = emptyBoard.addPiece(new PawnStub(6, new Position(2, 3)))
    let expectedValidMoves: Position[] = [
      new Position(1, 0),
      new Position(3, 0),
      new Position(0, 1),
      new Position(4, 1),
      new Position(0, 3),
      new Position(4, 3)
    ]
    let actualMoves: Position[] = horse.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red horse at (2, 2) surrounded by 1 black pawn", () => {
    const horse = createHorse(true, new Position(2, 2))
    const board = emptyBoard.addPiece(new PawnStub(16, new Position(2, 3)))
    let expectedValidMoves: Position[] = [
      new Position(1, 0),
      new Position(3, 0),
      new Position(0, 1),
      new Position(4, 1),
      new Position(0, 3),
      new Position(4, 3)
    ]
    let actualMoves: Position[] = horse.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red horse at (4, 6) surrounded by 2 black pawns", () => {
    const horse = createHorse(true, new Position(4, 6))
    const board = emptyBoard
      .addPiece(new PawnStub(16, new Position(4, 5)))
      .addPiece(new PawnStub(16, new Position(3, 6)))
    let expectedValidMoves: Position[] = [
      new Position(3, 8),
      new Position(5, 8),
      new Position(5, 8),
      new Position(5, 8)
    ]
    let actualMoves: Position[] = horse.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red horse at (2, 5) surrounded by 3 red pawns", () => {
    const horse = createHorse(true, new Position(2, 5))
    const board = emptyBoard
      .addPiece(new PawnStub(6, new Position(1, 5)))
      .addPiece(new PawnStub(6, new Position(2, 6)))
      .addPiece(new PawnStub(6, new Position(2, 4)))
    let expectedValidMoves: Position[] = [
      new Position(4, 6),
      new Position(4, 4)
    ]
    let actualMoves: Position[] = horse.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red horse's path at (2, 5) blocked by 6 red pawns", () => {
    const horse = createHorse(true, new Position(2, 5))
    const board = emptyBoard
      .addPiece(new PawnStub(6, new Position(1, 7)))
      .addPiece(new PawnStub(6, new Position(3, 7)))
      .addPiece(new PawnStub(6, new Position(0, 6)))
      .addPiece(new PawnStub(6, new Position(4, 6)))
      .addPiece(new PawnStub(6, new Position(0, 4)))
      .addPiece(new PawnStub(6, new Position(4, 4)))

    let expectedValidMoves: Position[] = [
      new Position(1, 3),
      new Position(3, 3)
    ]
    let actualMoves: Position[] = horse.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red horse's path at (2, 5) blocked by 8 black pawns", () => {
    const horse = createHorse(true, new Position(2, 5))
    const board = emptyBoard
      .addPiece(new PawnStub(16, new Position(1, 7)))
      .addPiece(new PawnStub(16, new Position(3, 7)))
      .addPiece(new PawnStub(16, new Position(0, 6)))
      .addPiece(new PawnStub(16, new Position(4, 6)))
      .addPiece(new PawnStub(16, new Position(0, 4)))
      .addPiece(new PawnStub(16, new Position(4, 4)))
      .addPiece(new PawnStub(16, new Position(1, 3)))
      .addPiece(new PawnStub(16, new Position(3, 3)))

    let expectedValidMoves: Position[] = [
      new Position(1, 7),
      new Position(3, 7),
      new Position(0, 6),
      new Position(4, 6),
      new Position(0, 4),
      new Position(4, 4),
      new Position(1, 3),
      new Position(1, 3)
    ]
    let actualMoves: Position[] = horse.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })
})
