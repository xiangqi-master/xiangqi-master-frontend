import PawnFactory from "../../../../../src/logic/factory/pieceFactory/PawnFactory"
import Position from "../../../../../src/logic/Position"
import Pawn from "../../../../../src/logic/pieces/Pawn"
import PieceCode from "../../../../../src/logic/factory/PieceCode"

describe("PawnFactory", () => {
  test("isRed === true", () => {
    const position = new Position(6, 8)
    const pawn = new PawnFactory().createPiece(true, position)
    expect(pawn).toBeInstanceOf(Pawn)
    expect(pawn.getPosition().equals(position)).toBeTruthy()
    expect(pawn.getCode()).toBe(PieceCode.PAWN)
    expect(pawn.isRed()).toBeTruthy()
  })

  test("isRed === false", () => {
    const position = new Position(1, 2)
    const pawn = new PawnFactory().createPiece(false, position)
    expect(pawn).toBeInstanceOf(Pawn)
    expect(pawn.getPosition().equals(position)).toBeTruthy()
    expect(pawn.getCode()).toBe(PieceCode.PAWN)
    expect(pawn.isRed()).toBeFalsy()
  })
})
