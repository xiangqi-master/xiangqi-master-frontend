import Position from "../../../src/logic/Position"

describe("Test: isWithinBoundary", () => {
  test("valid boundary positions", () => {
    expect(new Position(0, 0).isWithinBoundary()).toBeTruthy()
    expect(new Position(0, 9).isWithinBoundary()).toBeTruthy()
    expect(new Position(8, 0).isWithinBoundary()).toBeTruthy()
    expect(new Position(8, 9).isWithinBoundary()).toBeTruthy()
  })

  test("invalid boundary positions", () => {
    expect(new Position(0, -1).isWithinBoundary()).toBeFalsy()
    expect(new Position(0, -1).isWithinBoundary()).toBeFalsy()
    expect(new Position(0, -1).isWithinBoundary()).toBeFalsy()
    expect(new Position(0, 10).isWithinBoundary()).toBeFalsy()
    expect(new Position(9, 0).isWithinBoundary()).toBeFalsy()
  })
})

describe("Test: hasCrossedRiver", () => {
  test("isRed === true && hasCrossedRiver === true", () => {
    expect(new Position(0, 5).hasCrossedRiver(true)).toBeTruthy()
    expect(new Position(0, 10).hasCrossedRiver(true)).toBeTruthy()
    expect(new Position(-1, 5).hasCrossedRiver(true)).toBeTruthy()
  })

  test("isRed === true && hasCrossedRiver === false", () => {
    expect(new Position(0, 4).hasCrossedRiver(true)).toBeFalsy()
    expect(new Position(0, -1).hasCrossedRiver(true)).toBeFalsy()
  })

  test("isRed === false && hasCrossedRiver === true", () => {
    expect(new Position(100, 4).hasCrossedRiver(false)).toBeTruthy()
    expect(new Position(0, -1).hasCrossedRiver(false)).toBeTruthy()
  })

  test("isRed === false && hasCrossedRiver === false", () => {
    expect(new Position(0, 5).hasCrossedRiver(false)).toBeFalsy()
    expect(new Position(0, 100).hasCrossedRiver(false)).toBeFalsy()
  })
})

describe("Test: hasCrossedRiver", () => {
  test("isRed === true && hasCrossedRiver === true", () => {
    expect(new Position(0, 5).hasCrossedRiver(true)).toBeTruthy()
    expect(new Position(0, 100).hasCrossedRiver(true)).toBeTruthy()
    expect(new Position(100, 5).hasCrossedRiver(true)).toBeTruthy()
  })

  test("isRed === true && hasCrossedRiver === false", () => {
    expect(new Position(0, 4).hasCrossedRiver(true)).toBeFalsy()
    expect(new Position(-100, 4).hasCrossedRiver(true)).toBeFalsy()
    expect(new Position(0, 0).hasCrossedRiver(true)).toBeFalsy()
  })

  test("isRed === false && hasCrossedRiver === true", () => {
    expect(new Position(0, 4).hasCrossedRiver(false)).toBeTruthy()
    expect(new Position(100, 4).hasCrossedRiver(false)).toBeTruthy()
    expect(new Position(0, -1).hasCrossedRiver(false)).toBeTruthy()
  })

  test("isRed === false && hasCrossedRiver === false", () => {
    expect(new Position(0, 5).hasCrossedRiver(false)).toBeFalsy()
    expect(new Position(0, 100).hasCrossedRiver(false)).toBeFalsy()
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
