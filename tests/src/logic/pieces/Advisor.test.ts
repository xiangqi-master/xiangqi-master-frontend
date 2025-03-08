import Advisor from "../../../../src/logic/pieces/Advisor"
import Board from "../../../../src/logic/Board"
import Position from "../../../../src/logic/Position"

function createAdvisor(isRed: boolean, position: Position): Advisor {
  const code = 0
  return new Advisor(isRed ? code : code + 10, position)
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
    const advisor = createAdvisor(true, new Position(5, 2))
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
