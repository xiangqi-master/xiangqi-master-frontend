import PieceFactory from "../../../../src/logic/factory/PieceFactory"
import Position from "../../../../src/logic/Position"
import Piece from "../../../../src/logic/Piece"
import Pawn from "../../../../src/logic/pieces/Pawn"

class ConvertPieceCodeTest extends PieceFactory {
  constructor(code: number) {
    super(code)
  }

  createPiece(_isRed: boolean, _position: Position): Piece {
    return new Pawn(0, new Position(0, 0))
  }

  public test(isRed: boolean): number {
    return super.convertPieceCode(isRed)
  }
}

describe("Test: convertPieceCode", () => {
  it("isRed === true", () => {
    expect(new ConvertPieceCodeTest(0).test(true)).toBe(0)
    expect(new ConvertPieceCodeTest(10).test(true)).toBe(10)
    expect(new ConvertPieceCodeTest(-1).test(true)).toBe(-1)
  })

  it("isRed === false", () => {
    expect(new ConvertPieceCodeTest(0).test(false)).toBe(10)
    expect(new ConvertPieceCodeTest(10).test(false)).toBe(20)
    expect(new ConvertPieceCodeTest(-1).test(false)).toBe(9)
  })
})
