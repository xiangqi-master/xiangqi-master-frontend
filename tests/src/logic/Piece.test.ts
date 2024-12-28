import Piece from "../../../src/logic/Piece"
import Board from "../../../src/logic/Board"
import Position from "../../../src/logic/Position"

class PawnStub extends Piece {
  public constructor(code: number, position: Position) {
    super(code, position)
  }

  getAllValidMoves(_board: Board): Position[] {
    return []
  }
}

class HorseStub extends Piece {
  public constructor(code: number, position: Position) {
    super(code, position)
  }

  getAllValidMoves(_board: Board): Position[] {
    return []
  }
}

describe("isRed", () => {
  it("isRed === true", () => {
    const piece1 = new PawnStub(9, new Position(0, 0))
    expect(piece1.isRed()).toBeTruthy()

    const piece2 = new PawnStub(-1, new Position(0, 0))
    expect(piece2.isRed()).toBeTruthy()
  })

  it("isRed === false", () => {
    const piece1 = new PawnStub(10, new Position(0, 0))
    expect(piece1.isRed()).toBeFalsy()

    const piece2 = new PawnStub(100, new Position(0, 0))
    expect(piece2.isRed()).toBeFalsy()
  })
})

describe("equals", () => {
  it("Null values", () => {
    const pawn = new PawnStub(0, new Position(0, 0))
    // @ts-ignore
    expect(pawn.equals(null)).toBeFalsy()
  })

  it("Different instances but same values", () => {
    const pawn = new PawnStub(2, new Position(2, 3))
    const horse = new HorseStub(2, new Position(2, 3))
    expect(pawn.equals(horse)).toBeFalsy()
  })

  it("Same code and same position", () => {
    const pawn1 = new PawnStub(2, new Position(2, 3))
    const pawn2 = new PawnStub(2, new Position(2, 3))
    expect(pawn1.equals(pawn2)).toBeTruthy()
  })

  it("Same code but different positions", () => {
    const pawn1 = new PawnStub(2, new Position(2, 3))
    const pawn2 = new PawnStub(2, new Position(2, 4))
    expect(pawn1.equals(pawn2)).toBeFalsy()
  })

  it("Different code but same position", () => {
    const pawn1 = new PawnStub(2, new Position(2, 3))
    const pawn2 = new PawnStub(0, new Position(2, 3))
    expect(pawn1.equals(pawn2)).toBeFalsy()
  })
})

describe("move", () => {
  it("Preservation of immutability", () => {
    const pieceCode: number = 2
    const position: Position = new Position(0, 2)
    const pawn = new PawnStub(pieceCode, position)
    const expectedPawn = new PawnStub(pieceCode, position)

    const newPosition: Position = new Position(5, 4)
    const actualPiece: Piece = pawn.move(newPosition)
    const expectedPiece: Piece = new PawnStub(pieceCode, newPosition)

    expect(pawn.equals(expectedPawn)).toBeTruthy()
    expect(actualPiece.equals(expectedPiece)).toBeTruthy()
  })
})

// TODO: test 'isValidMove' method
// describe("isValidMove", () => {})

// TODO: test 'toString' method
// describe("toString", () => {})
