import Piece from "../../../../src/logic/Piece"
import Advisor from "../../../../src/logic/pieces/Advisor"
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

class HorseStub extends Piece {
  public constructor(isRed: boolean, position: Position) {
    super(PieceCode.HORSE, isRed, position)
  }

  getAllValidMoves(_board: Board): Position[] {
    return []
  }

  toString(): string {
    return "H"
  }
}

function createAdvisor(isRed: boolean, position: Position): Advisor {
  return new Advisor(isRed, position)
}

function createPawnStub(isRed: boolean, position: Position): PawnStub {
  return new PawnStub(isRed, position)
}

function createHorseStub(isRed: boolean, position: Position): PawnStub {
  return new HorseStub(isRed, position)
}

describe("Advisor in an empty board", () => {
  let emptyBoard: Board
  beforeAll(() => {
    emptyBoard = new Board([])
  })

  // red advisor
  test("red advisor at (3, 0)", () => {
    const advisor = createAdvisor(true, new Position(3, 0))
    const board = emptyBoard.addPiece(advisor)
    const expectedValidMoves: Position[] = [new Position(4, 1)]
    const actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red advisor at (5, 0)", () => {
    const advisor = createAdvisor(true, new Position(5, 0))
    const board = emptyBoard.addPiece(advisor)
    const expectedValidMoves: Position[] = [new Position(4, 1)]
    const actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red advisor at (3, 2)", () => {
    const advisor = createAdvisor(true, new Position(3, 2))
    const board = emptyBoard.addPiece(advisor)
    const expectedValidMoves: Position[] = [new Position(4, 1)]
    const actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red advisor at (5, 2)", () => {
    const advisor = createAdvisor(true, new Position(5, 2))
    const board = emptyBoard.addPiece(advisor)
    const expectedValidMoves: Position[] = [new Position(4, 1)]
    const actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red advisor at (4, 1)", () => {
    const advisor = createAdvisor(true, new Position(4, 1))
    const board = emptyBoard.addPiece(advisor)
    const expectedValidMoves: Position[] = [
      new Position(3, 0),
      new Position(3, 2),
      new Position(5, 2),
      new Position(5, 0)
    ]
    const actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  // black advisor
  test("black advisor at (3, 9)", () => {
    const advisor = createAdvisor(true, new Position(3, 9))
    const board = emptyBoard.addPiece(advisor)
    const expectedValidMoves: Position[] = [new Position(4, 8)]
    const actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black advisor at (5, 9)", () => {
    const advisor = createAdvisor(true, new Position(5, 9))
    const board = emptyBoard.addPiece(advisor)
    const expectedValidMoves: Position[] = [new Position(4, 8)]
    const actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black advisor at (3, 7)", () => {
    const advisor = createAdvisor(true, new Position(3, 7))
    const board = emptyBoard.addPiece(advisor)
    const expectedValidMoves: Position[] = [new Position(4, 8)]
    const actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black advisor at (5, 7)", () => {
    const advisor = createAdvisor(true, new Position(5, 7))
    const board = emptyBoard.addPiece(advisor)
    const expectedValidMoves: Position[] = [new Position(4, 8)]
    const actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })
})

describe("Advisor surrounded by obstacles", () => {
  let emptyBoard: Board
  beforeAll(() => {
    emptyBoard = new Board([])
  })

  test("red advisor at (3, 0) surrounded by 1 black pawn", () => {
    const advisor = createAdvisor(true, new Position(3, 0))
    const board = emptyBoard.addPiece(createPawnStub(false, new Position(4, 1)))
    const expectedValidMoves: Position[] = [new Position(4, 1)]
    const actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red advisor at (5, 0) surrounded by 1 black pawn", () => {
    const advisor = createAdvisor(true, new Position(5, 0))
    const board = emptyBoard.addPiece(createPawnStub(false, new Position(4, 1)))
    const expectedValidMoves: Position[] = [new Position(4, 1)]
    const actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red advisor at (4, 1) surrounded by 2 obstacles", () => {
    const advisor = createAdvisor(true, new Position(4, 1))
    const board = emptyBoard
      .addPiece(createHorseStub(true, new Position(5, 2)))
      .addPiece(createAdvisor(true, new Position(5, 0)))
    const expectedValidMoves: Position[] = [
      new Position(3, 2),
      new Position(3, 0)
    ]
    const actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black advisor at (3, 9) surrounded by 1 red pawn", () => {
    const advisor = createAdvisor(false, new Position(3, 9))
    const board = emptyBoard.addPiece(createPawnStub(true, new Position(4, 8)))
    const expectedValidMoves: Position[] = [new Position(4, 8)]
    const actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black advisor at (3, 7) surrounded by 1 obstacle", () => {
    const advisor = createAdvisor(false, new Position(3, 7))
    const board = emptyBoard.addPiece(
      createHorseStub(false, new Position(4, 8))
    )
    const expectedValidMoves: Position[] = []
    const actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })
})
