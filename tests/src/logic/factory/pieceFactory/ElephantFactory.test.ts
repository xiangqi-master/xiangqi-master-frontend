import ElephantFactory from "../../../../../src/logic/factory/pieceFactory/ElephantFactory"
import Position from "../../../../../src/logic/Position"
import Elephant from "../../../../../src/logic/pieces/Elephant"

describe("ElephantFactory", () => {
  test("isRed === true", () => {
    const position = new Position(2, 0)
    const elephant = new ElephantFactory().createPiece(true, position)
    expect(elephant).toBeInstanceOf(Elephant)
    expect(elephant.getPosition().equals(position)).toBeTruthy()
    expect(elephant.getCode()).toBe(1)
    expect(elephant.isRed()).toBeTruthy()
  })

  test("isRed === false", () => {
    const position = new Position(2, 9)
    const elephant = new ElephantFactory().createPiece(false, position)
    expect(elephant).toBeInstanceOf(Elephant)
    expect(elephant.getPosition().equals(position)).toBeTruthy()
    expect(elephant.getCode()).toBe(11)
    expect(elephant.isRed()).toBeFalsy()
  })
})
