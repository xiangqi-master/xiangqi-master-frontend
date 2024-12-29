import Position from "../../../src/logic/Position"

describe("Test: isWithinBoundary", () => {
  it("valid boundary positions", () => {
    expect(new Position(0, 0).isWithinBoundary()).toBeTruthy()
    expect(new Position(0, 9).isWithinBoundary()).toBeTruthy()
    expect(new Position(8, 0).isWithinBoundary()).toBeTruthy()
    expect(new Position(8, 9).isWithinBoundary()).toBeTruthy()
  })

  it("invalid boundary positions", () => {
    expect(new Position(0, -1).isWithinBoundary()).toBeFalsy()
    expect(new Position(0, -1).isWithinBoundary()).toBeFalsy()
    expect(new Position(0, -1).isWithinBoundary()).toBeFalsy()
    expect(new Position(0, 10).isWithinBoundary()).toBeFalsy()
    expect(new Position(9, 0).isWithinBoundary()).toBeFalsy()
  })
})

describe("Test: isCrossRiver", () => {
  it("isRed === true && isCrossRiver === true", () => {
    expect(new Position(0, 5).isCrossRiver(true)).toBeTruthy()
    expect(new Position(0, 10).isCrossRiver(true)).toBeTruthy()
    expect(new Position(-1, 5).isCrossRiver(true)).toBeTruthy()
  })

  it("isRed === true && isCrossRiver === false", () => {
    expect(new Position(0, 4).isCrossRiver(true)).toBeFalsy()
    expect(new Position(0, -1).isCrossRiver(true)).toBeFalsy()
  })

  it("isRed === false && isCrossRiver === true", () => {
    expect(new Position(100, 4).isCrossRiver(false)).toBeTruthy()
    expect(new Position(0, -1).isCrossRiver(false)).toBeTruthy()
  })

  it("isRed === false && isCrossRiver === false", () => {
    expect(new Position(0, 5).isCrossRiver(false)).toBeFalsy()
    expect(new Position(0, 100).isCrossRiver(false)).toBeFalsy()
  })
})

describe("Test: isCrossRiver", () => {
  it("isRed === true && isCrossRiver === true", () => {
    expect(new Position(0, 5).isCrossRiver(true)).toBeTruthy()
    expect(new Position(0, 100).isCrossRiver(true)).toBeTruthy()
    expect(new Position(100, 5).isCrossRiver(true)).toBeTruthy()
  })

  it("isRed === true && isCrossRiver === false", () => {
    expect(new Position(0, 4).isCrossRiver(true)).toBeFalsy()
    expect(new Position(-100, 4).isCrossRiver(true)).toBeFalsy()
    expect(new Position(0, 0).isCrossRiver(true)).toBeFalsy()
  })

  it("isRed === false && isCrossRiver === true", () => {
    expect(new Position(0, 4).isCrossRiver(false)).toBeTruthy()
    expect(new Position(100, 4).isCrossRiver(false)).toBeTruthy()
    expect(new Position(0, -1).isCrossRiver(false)).toBeTruthy()
  })

  it("isRed === false && isCrossRiver === false", () => {
    expect(new Position(0, 5).isCrossRiver(false)).toBeFalsy()
    expect(new Position(0, 100).isCrossRiver(false)).toBeFalsy()
    expect(new Position(100, 5).isCrossRiver(false)).toBeFalsy()
  })
})

describe("Test: equals", () => {
  it("equals === true", () => {
    let position1 = new Position(1, 3)
    let position2 = new Position(1, 3)
    expect(position1.equals(position2)).toBeTruthy()
  })

  it("equals === false due to unequal positions", () => {
    let position1 = new Position(1, 3)
    let position2 = new Position(2, 3)
    expect(position1.equals(position2)).toBeFalsy()

    position1 = new Position(1, 3)
    position2 = new Position(1, 4)
    expect(position1.equals(position2)).toBeFalsy()
  })

  it("equals === false due to null position", () => {
    let position1 = new Position(1, 3)
    let position2 = null
    // @ts-ignore
    expect(position1.equals(position2)).toBeFalsy()
  })

  it("equals === false due to undefined position", () => {
    let position1 = new Position(1, 3)
    let position2 = undefined
    // @ts-ignore
    expect(position1.equals(position2)).toBeFalsy()
  })
})
