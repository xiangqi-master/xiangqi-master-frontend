import Piece from "../../../src/logic/Piece"
import Board from "../../../src/logic/Board"
import Position from "../../../src/logic/Position"
import PieceCode from "../../../src/logic/factory/PieceCode"

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

describe("isRed", () => {
  test("isRed === true", () => {
    const piece1 = new PawnStub(true, new Position(0, 0))
    expect(piece1.isRed()).toBeTruthy()

    const piece2 = new PawnStub(true, new Position(0, 0))
    expect(piece2.isRed()).toBeTruthy()
  })

  test("isRed === false", () => {
    const piece1 = new PawnStub(false, new Position(0, 0))
    expect(piece1.isRed()).toBeFalsy()

    const piece2 = new PawnStub(false, new Position(0, 0))
    expect(piece2.isRed()).toBeFalsy()
  })
})

describe("equals", () => {
  test("Null values", () => {
    const pawn = new PawnStub(true, new Position(0, 0))
    expect(pawn.equals(null)).toBeFalsy()
  })

  test("Undefined values", () => {
    const pawn = new PawnStub(true, new Position(0, 0))
    expect(pawn.equals(undefined)).toBeFalsy()
  })

  test("Different instances but same values", () => {
    const pawn = new PawnStub(true, new Position(2, 3))
    const horse = new HorseStub(true, new Position(2, 3))
    expect(pawn.equals(horse)).toBeFalsy()
  })

  test("Same code and same position", () => {
    const pawn1 = new PawnStub(true, new Position(2, 3))
    const pawn2 = new PawnStub(true, new Position(2, 3))
    expect(pawn1.equals(pawn2)).toBeTruthy()
  })

  test("Same code but different positions", () => {
    const pawn1 = new PawnStub(true, new Position(2, 3))
    const pawn2 = new PawnStub(true, new Position(2, 4))
    expect(pawn1.equals(pawn2)).toBeFalsy()
  })
})

describe("move", () => {
  test("Preservation of immutability", () => {
    const position: Position = new Position(0, 2)
    const pawn = new PawnStub(true, position)
    const expectedPawn = new PawnStub(true, position)

    const newPosition: Position = new Position(5, 4)
    const actualPiece: Piece = pawn.move(newPosition)
    const expectedPiece: Piece = new PawnStub(true, newPosition)

    expect(pawn.equals(expectedPawn)).toBeTruthy()
    expect(actualPiece.equals(expectedPiece)).toBeTruthy()
  })
})

// TODO: test 'isValidMove' method
// describe("isValidMove", () => {})

// TODO: test 'toString' method
// describe("toString", () => {})
