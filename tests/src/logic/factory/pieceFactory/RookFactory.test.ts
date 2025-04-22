import RookFactory from "../../../../../src/logic/factory/pieceFactory/RookFactory"
import Position from "../../../../../src/logic/Position"
import Rook from "../../../../../src/logic/pieces/Rook"
import PieceCode from "../../../../../src/logic/factory/PieceCode"

describe("RookFactory", () => {
  test("isRed === true", () => {
    const position = new Position(6, 8)
    const rook = new RookFactory().createPiece(true, position)
    expect(rook).toBeInstanceOf(Rook)
    expect(rook.getPosition().equals(position)).toBeTruthy()
    expect(rook.getCode()).toBe(PieceCode.ROOK)
    expect(rook.isRed()).toBeTruthy()
  })

  test("isRed === false", () => {
    const position = new Position(1, 2)
    const rook = new RookFactory().createPiece(false, position)
    expect(rook).toBeInstanceOf(Rook)
    expect(rook.getPosition().equals(position)).toBeTruthy()
    expect(rook.getCode()).toBe(PieceCode.ROOK)
    expect(rook.isRed()).toBeFalsy()
  })
})
