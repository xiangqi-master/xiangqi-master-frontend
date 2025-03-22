import Position from "../../../src/logic/Position"

describe("Test: isWithinBoundary", () => {
  test("valid boundary positions", () => {
    expect(
      new Position(Position.START, Position.START).isWithinBoundary()
    ).toBeTruthy()
    expect(
      new Position(Position.START, Position.ROWS - 1).isWithinBoundary()
    ).toBeTruthy()
    expect(
      new Position(Position.COLS - 1, Position.START).isWithinBoundary()
    ).toBeTruthy()
    expect(
      new Position(Position.COLS - 1, Position.ROWS - 1).isWithinBoundary()
    ).toBeTruthy()
  })

  test("invalid boundary positions", () => {
    expect(new Position(Position.START, -1).isWithinBoundary()).toBeFalsy()
    expect(new Position(-1, Position.START).isWithinBoundary()).toBeFalsy()
    expect(new Position(-1, -1).isWithinBoundary()).toBeFalsy()
    expect(
      new Position(Position.COLS, Position.START).isWithinBoundary()
    ).toBeFalsy()
    expect(
      new Position(Position.START, Position.ROWS).isWithinBoundary()
    ).toBeFalsy()
    expect(
      new Position(Position.COLS, Position.ROWS).isWithinBoundary()
    ).toBeFalsy()
    expect(
      new Position(Position.START, Number.POSITIVE_INFINITY).isWithinBoundary()
    ).toBeFalsy()
    expect(
      new Position(Number.POSITIVE_INFINITY, Position.START).isWithinBoundary()
    ).toBeFalsy()
  })
})

describe("Test: hasCrossedRiver", () => {
  test("isRed === true && hasCrossedRiver === true", () => {
    expect(new Position(Position.START, 5).hasCrossedRiver(true)).toBeTruthy()
    expect(new Position(Position.START, 100).hasCrossedRiver(true)).toBeTruthy()
    expect(new Position(100, 5).hasCrossedRiver(true)).toBeTruthy()
  })

  test("isRed === true && hasCrossedRiver === false", () => {
    expect(new Position(Position.START, 4).hasCrossedRiver(true)).toBeFalsy()
    expect(new Position(-100, 4).hasCrossedRiver(true)).toBeFalsy()
    expect(
      new Position(Position.START, Position.START).hasCrossedRiver(true)
    ).toBeFalsy()
  })

  test("isRed === false && hasCrossedRiver === true", () => {
    expect(new Position(Position.START, 4).hasCrossedRiver(false)).toBeTruthy()
    expect(new Position(100, 4).hasCrossedRiver(false)).toBeTruthy()
    expect(new Position(Position.START, -1).hasCrossedRiver(false)).toBeTruthy()
  })

  test("isRed === false && hasCrossedRiver === false", () => {
    expect(new Position(Position.START, 5).hasCrossedRiver(false)).toBeFalsy()
    expect(new Position(Position.START, 100).hasCrossedRiver(false)).toBeFalsy()
    expect(new Position(100, 5).hasCrossedRiver(false)).toBeFalsy()
  })
})

describe("Test: equals", () => {
  test("equals === true", () => {
    let position1 = new Position(1, 3)
    let position2 = new Position(1, 3)
    expect(position1.equals(position2)).toBeTruthy()
  })

  test("equals === false due to unequal positions", () => {
    let position1 = new Position(1, 3)
    let position2 = new Position(2, 3)
    expect(position1.equals(position2)).toBeFalsy()

    position1 = new Position(1, 3)
    position2 = new Position(1, 4)
    expect(position1.equals(position2)).toBeFalsy()
  })

  test("equals === false due to null position", () => {
    let position1 = new Position(1, 3)
    let position2 = null
    // @ts-ignore
    expect(position1.equals(position2)).toBeFalsy()
  })

  test("equals === false due to undefined position", () => {
    let position1 = new Position(1, 3)
    let position2 = undefined
    // @ts-ignore
    expect(position1.equals(position2)).toBeFalsy()
  })
})
