import HorseFactory from "../../../../../src/logic/factory/pieceFactory/HorseFactory"
import Position from "../../../../../src/logic/Position"
import Horse from "../../../../../src/logic/pieces/Horse"

describe("HorseFactory", () => {
  test("isRed === true", () => {
    const position = new Position(1, 0)
    const horse = new HorseFactory().createPiece(true, position)
    expect(horse).toBeInstanceOf(Horse)
    expect(horse.getPosition().equals(position)).toBeTruthy()
    expect(horse.getCode()).toBe(3)
    expect(horse.isRed()).toBeTruthy()
  })

  test("isRed === false", () => {
    const position = new Position(1, 9)
    const horse = new HorseFactory().createPiece(false, position)
    expect(horse).toBeInstanceOf(Horse)
    expect(horse.getPosition().equals(position)).toBeTruthy()
    expect(horse.getCode()).toBe(13)
    expect(horse.isRed()).toBeFalsy()
  })
})
