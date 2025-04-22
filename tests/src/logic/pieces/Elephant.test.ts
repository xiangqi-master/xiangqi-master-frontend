import Elephant from "../../../../src/logic/pieces/Elephant"
import Board from "../../../../src/logic/Board"
import Position from "../../../../src/logic/Position"
import Piece from "../../../../src/logic/Piece"
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

function createElephant(isRed: boolean, position: Position): Elephant {
  return new Elephant(isRed, position)
}

describe("Elephant in an empty board", () => {
  let emptyBoard: Board
  beforeAll(() => {
    emptyBoard = new Board([])
  })

  // red elephant
  test("red elephant at (2, 0)", () => {
    const elephant = createElephant(true, new Position(2, 0))
    const board = emptyBoard.addPiece(elephant)
    const expectedValidMoves: Position[] = [
      new Position(0, 2),
      new Position(4, 2)
    ]
    const actualMoves: Position[] = elephant.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red elephant at (4, 2)", () => {
    const elephant = createElephant(true, new Position(4, 2))
    const board = emptyBoard.addPiece(elephant)
    const expectedValidMoves: Position[] = [
      new Position(2, 0),
      new Position(6, 0),
      new Position(2, 4),
      new Position(6, 4)
    ]
    const actualMoves: Position[] = elephant.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red elephant at (6, 4)", () => {
    const elephant = createElephant(true, new Position(6, 4))
    const board = emptyBoard.addPiece(elephant)
    const expectedValidMoves: Position[] = [
      new Position(4, 2),
      new Position(8, 2)
    ]
    const actualMoves: Position[] = elephant.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  // black elephant
  test("black elephant at (6, 9)", () => {
    const elephant = createElephant(false, new Position(6, 9))
    const board = emptyBoard.addPiece(elephant)
    const expectedValidMoves: Position[] = [
      new Position(4, 7),
      new Position(8, 7)
    ]
    const actualMoves: Position[] = elephant.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black elephant at (4, 7)", () => {
    const elephant = createElephant(false, new Position(4, 7))
    const board = emptyBoard.addPiece(elephant)
    const expectedValidMoves: Position[] = [
      new Position(6, 9),
      new Position(2, 9),
      new Position(6, 5),
      new Position(2, 5)
    ]
    const actualMoves: Position[] = elephant.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black elephant at (2, 5)", () => {
    const elephant = createElephant(false, new Position(2, 5))
    const board = emptyBoard.addPiece(elephant)
    const expectedValidMoves: Position[] = [
      new Position(0, 7),
      new Position(4, 7)
    ]
    const actualMoves: Position[] = elephant.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })
})

describe("Elephant surrounded obstacles", () => {
  let emptyBoard: Board
  beforeAll(() => {
    emptyBoard = new Board([])
  })

  //one friend piece on the place elephant can reach
  test("elephant at (4,2) blocked by one friendly piece", () => {
    const elephant = new Elephant(true, new Position(4, 2))
    const board = emptyBoard
      .addPiece(elephant)
      .addPiece(new PawnStub(true, new Position(2, 4)))

    const expectedValidMoves: Position[] = [
      new Position(2, 0),
      new Position(6, 0),
      new Position(6, 4)
    ]

    const actualMoves = elephant.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  //two friend piece on the place elephant can reach
  test("elephant at (4,2) blocked by two friendly pieces", () => {
    const elephant = new Elephant(true, new Position(4, 2))
    const board = emptyBoard
      .addPiece(elephant)
      .addPiece(new PawnStub(true, new Position(2, 4)))
      .addPiece(new PawnStub(true, new Position(2, 0)))

    const expectedValidMoves: Position[] = [
      new Position(6, 0),
      new Position(6, 4)
    ]

    const actualMoves = elephant.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  //three friend piece on the place elephant can reach
  test("elephant at (4,2) blocked by three friendly pieces", () => {
    const elephant = new Elephant(true, new Position(4, 2))
    const board = emptyBoard
      .addPiece(elephant)
      .addPiece(new PawnStub(true, new Position(2, 4)))
      .addPiece(new PawnStub(true, new Position(2, 0)))
      .addPiece(new PawnStub(true, new Position(6, 0)))

    const expectedValidMoves: Position[] = [new Position(6, 4)]

    const actualMoves = elephant.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  //three friend piece on the place elephant can reach
  test("elephant at (4,2) blocked by three friendly pieces", () => {
    const elephant = new Elephant(true, new Position(4, 2))
    const board = emptyBoard
      .addPiece(elephant)
      .addPiece(new PawnStub(true, new Position(2, 4)))
      .addPiece(new PawnStub(true, new Position(2, 0)))
      .addPiece(new PawnStub(true, new Position(6, 0)))

    const expectedValidMoves: Position[] = [new Position(6, 4)]

    const actualMoves = elephant.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  //four friend piece on the place elephant can reach
  test("elephant at (4,2) blocked by four friendly pieces", () => {
    const elephant = new Elephant(true, new Position(4, 2))
    const board = emptyBoard
      .addPiece(elephant)
      .addPiece(new PawnStub(true, new Position(2, 4)))
      .addPiece(new PawnStub(true, new Position(2, 0)))
      .addPiece(new PawnStub(true, new Position(6, 0)))
      .addPiece(new PawnStub(true, new Position(6, 4)))

    const expectedValidMoves: Position[] = []

    const actualMoves = elephant.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  //one opponent piece on the place elephant can reach
  test("elephant at (4,2) blocked by one opponent piece", () => {
    const elephant = new Elephant(true, new Position(4, 2))
    const board = emptyBoard
      .addPiece(elephant)
      .addPiece(new PawnStub(false, new Position(2, 4)))

    const expectedValidMoves: Position[] = [
      new Position(2, 0),
      new Position(2, 4),
      new Position(6, 0),
      new Position(6, 4)
    ]

    const actualMoves = elephant.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  //one friendly piece on the place elephant eye
  test("elephant at (4,2) blocked by one friendly piece on elephant eye", () => {
    const elephant = new Elephant(true, new Position(4, 2))
    const board = emptyBoard
      .addPiece(elephant)
      .addPiece(new PawnStub(false, new Position(3, 3)))

    const expectedValidMoves: Position[] = [
      new Position(2, 0),
      new Position(6, 0),
      new Position(6, 4)
    ]

    const actualMoves = elephant.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  //one opponent piece on the place elephant eye
  test("elephant at (4,2) blocked by one opponent piece on elephant eye", () => {
    const elephant = new Elephant(true, new Position(4, 2))
    const board = emptyBoard
      .addPiece(elephant)
      .addPiece(new PawnStub(false, new Position(3, 3)))

    const expectedValidMoves: Position[] = [
      new Position(2, 0),
      new Position(6, 0),
      new Position(6, 4)
    ]

    const actualMoves = elephant.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })
})
