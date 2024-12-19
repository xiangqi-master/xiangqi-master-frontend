import PawnFactory from "../../../../../src/logic/factory/pieceFactory/PawnFactory"
import Position from "../../../../../src/logic/Position"
import Pawn from "../../../../../src/logic/pieces/Pawn"

describe("Test: PawnFactory", () => {
  it("isRed === true", () => {
    const position = new Position(6, 8)
    const pawn = new PawnFactory().createPiece(true, position)
    expect(pawn).toBeInstanceOf(Pawn)
    expect(pawn.position.equals(position)).toBeTruthy()
    expect(pawn.code).toBe(6)
    expect(pawn.isRed()).toBeTruthy()
  })

  it("isRed === false", () => {
    const position = new Position(1, 2)
    const pawn = new PawnFactory().createPiece(false, position)
    expect(pawn).toBeInstanceOf(Pawn)
    expect(pawn.position.equals(position)).toBeTruthy()
    expect(pawn.code).toBe(16)
    expect(pawn.isRed()).toBeFalsy()
  })
})