import AdvisorFactory from "../../../../../src/logic/factory/pieceFactory/AdvisorFactory"
import Position from "../../../../../src/logic/Position"
import Advisor from "../../../../../src/logic/pieces/Advisor"

describe("AdvisorFactory", () => {
  test("isRed === true", () => {
    const position = new Position(3, 0)
    const advisor = new AdvisorFactory().createPiece(true, position)
    expect(advisor).toBeInstanceOf(Advisor)
    expect(advisor.getPosition().equals(position)).toBeTruthy()
    expect(advisor.getCode()).toBe(0)
    expect(advisor.isRed()).toBeTruthy()
  })

  test("isRed === false", () => {
    const position = new Position(3, 9)
    const advisor = new AdvisorFactory().createPiece(false, position)
    expect(advisor).toBeInstanceOf(Advisor)
    expect(advisor.getPosition().equals(position)).toBeTruthy()
    expect(advisor.getCode()).toBe(10)
    expect(advisor.isRed()).toBeFalsy()
  })
})
