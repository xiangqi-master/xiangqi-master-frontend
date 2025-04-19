import Piece from "../../../../src/logic/Piece"
import Advisor from "../../../../src/logic/pieces/Advisor"
import Color from "../../../../src/logic/Color"
import Board from "../../../../src/logic/Board"
import Position from "../../../../src/logic/Position"

class PawnStub extends Piece {
  public constructor(code: number, color: string, position: Position) {
    super(code, color, position)
  }

  getAllValidMoves(_board: Board): Position[] {
    return []
  }

  toString(): string {
    return "P"
  }
}

class HorseStub extends Piece {
  public constructor(code: number, color: string, position: Position) {
    super(code, color, position)
  }

  getAllValidMoves(_board: Board): Position[] {
    return []
  }

  toString(): string {
    return "H"
  }
}

function createAdvisor(isRed: boolean, position: Position): Advisor {
  const code = 2
  return new Advisor(code, isRed ? Color.RED : Color.BLACK, position)
}

function createPawnStub(isRed: boolean, position: Position): PawnStub {
  const code = 1
  return new PawnStub(code, isRed ? Color.RED : Color.BLACK, position)
}

function createHorseStub(isRed: boolean, position: Position): PawnStub {
  const code = 4
  return new HorseStub(code, isRed ? Color.RED : Color.BLACK, position)
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
    let expectedValidMoves: Position[] = [new Position(4, 1)]
    let actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red advisor at (5, 0)", () => {
    const advisor = createAdvisor(true, new Position(5, 0))
    const board = emptyBoard.addPiece(advisor)
    let expectedValidMoves: Position[] = [new Position(4, 1)]
    let actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red advisor at (3, 2)", () => {
    const advisor = createAdvisor(true, new Position(3, 2))
    const board = emptyBoard.addPiece(advisor)
    let expectedValidMoves: Position[] = [new Position(4, 1)]
    let actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red advisor at (5, 2)", () => {
    const advisor = createAdvisor(true, new Position(5, 2))
    const board = emptyBoard.addPiece(advisor)
    let expectedValidMoves: Position[] = [new Position(4, 1)]
    let actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red advisor at (4, 1)", () => {
    const advisor = createAdvisor(true, new Position(4, 1))
    const board = emptyBoard.addPiece(advisor)
    let expectedValidMoves: Position[] = [
      new Position(3, 0),
      new Position(3, 2),
      new Position(5, 2),
      new Position(5, 0)
    ]
    let actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  // black advisor
  test("black advisor at (3, 9)", () => {
    const advisor = createAdvisor(true, new Position(3, 9))
    const board = emptyBoard.addPiece(advisor)
    let expectedValidMoves: Position[] = [new Position(4, 8)]
    let actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black advisor at (5, 9)", () => {
    const advisor = createAdvisor(true, new Position(5, 9))
    const board = emptyBoard.addPiece(advisor)
    let expectedValidMoves: Position[] = [new Position(4, 8)]
    let actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black advisor at (3, 7)", () => {
    const advisor = createAdvisor(true, new Position(3, 7))
    const board = emptyBoard.addPiece(advisor)
    let expectedValidMoves: Position[] = [new Position(4, 8)]
    let actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black advisor at (5, 7)", () => {
    const advisor = createAdvisor(true, new Position(5, 7))
    const board = emptyBoard.addPiece(advisor)
    let expectedValidMoves: Position[] = [new Position(4, 8)]
    let actualMoves: Position[] = advisor.getAllValidMoves(board)
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
    let expectedValidMoves: Position[] = [new Position(4, 1)]
    let actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("red advisor at (5, 0) surrounded by 1 black pawn", () => {
    const advisor = createAdvisor(true, new Position(5, 0))
    const board = emptyBoard.addPiece(createPawnStub(false, new Position(4, 1)))
    let expectedValidMoves: Position[] = [new Position(4, 1)]
    let actualMoves: Position[] = advisor.getAllValidMoves(board)
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
    let expectedValidMoves: Position[] = [
      new Position(3, 2),
      new Position(3, 0)
    ]
    let actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })

  test("black advisor at (3, 9) surrounded by 1 red pawn", () => {
    const advisor = createAdvisor(false, new Position(3, 9))
    const board = emptyBoard.addPiece(createPawnStub(true, new Position(4, 8)))
    let expectedValidMoves: Position[] = [new Position(4, 8)]
    let actualMoves: Position[] = advisor.getAllValidMoves(board)
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
    let expectedValidMoves: Position[] = []
    let actualMoves: Position[] = advisor.getAllValidMoves(board)
    expect(expectedValidMoves).toHaveLength(actualMoves.length)
    expect(
      expectedValidMoves.every((p) => actualMoves.some((p1) => p.equals(p1)))
    ).toBeTruthy()
  })
})
