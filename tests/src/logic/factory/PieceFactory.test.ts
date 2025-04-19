import PieceFactory from "../../../../src/logic/factory/PieceFactory"
import Position from "../../../../src/logic/Position"
import Piece from "../../../../src/logic/Piece"
import Pawn from "../../../../src/logic/pieces/Pawn"
import Color from "../../../../src/logic/Color"
import PieceCode from "../../../../src/logic/factory/PieceCode"

class PieceFactoryTest extends PieceFactory {
  constructor(code: number) {
    super(code)
  }

  createPiece(isRed: boolean, position: Position): Piece {
    const color = super.getColor(isRed)
    return new Pawn(PieceCode.PAWN, color, position)
  }

  public getColor(isRed: boolean): string {
    return super.getColor(isRed)
  }
}

describe("PieceFactory", () => {
  test("getColor: isRed === true", () => {
    expect(new PieceFactoryTest(0).getColor(true)).toBe(Color.RED)
    expect(new PieceFactoryTest(10).getColor(true)).toBe(Color.RED)
    expect(new PieceFactoryTest(-1).getColor(true)).toBe(Color.RED)
  })

  test("getColor: isRed === false", () => {
    expect(new PieceFactoryTest(0).getColor(false)).toBe(Color.BLACK)
    expect(new PieceFactoryTest(10).getColor(false)).toBe(Color.BLACK)
    expect(new PieceFactoryTest(-1).getColor(false)).toBe(Color.BLACK)
  })

  test("createPiece: isRed === true", () => {
    const pieceFactoryTest = new PieceFactoryTest(1)
    const pawn = pieceFactoryTest.createPiece(
      true,
      new Position(Position.START, Position.START)
    )
    expect(pawn.isRed()).toBe(true)
  })

  test("createPiece: isRed === false", () => {
    const pieceFactoryTest = new PieceFactoryTest(1)
    const pawn = pieceFactoryTest.createPiece(
      false,
      new Position(Position.START, Position.START)
    )
    expect(pawn.isRed()).toBe(false)
  })
})
