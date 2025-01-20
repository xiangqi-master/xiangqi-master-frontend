/**
 * A class to represent the position of a piece on the checkerboard.
 */
class Position {
  private readonly x: number
  private readonly y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  public getPosition(): [number, number] {
    return [this.x, this.y]
  }

  public getX(): number {
    return this.x
  }

  public getY(): number {
    return this.y
  }

  /**
   * Checks if the position of the piece is within the boundary of the checkerboard.
   */
  public isWithinBoundary(): boolean {
    if (this.x < 0 || this.y < 0) {
      return false
    }

    return !(this.x >= 9 || this.y >= 10)
  }

  /**
   * Checks if the position of the piece has crossed the river of the checkerboard.
   *
   * @param isRed whether the piece is red or it is black
   */
  public isCrossRiver(isRed: boolean): boolean {
    if (isRed) return this.y >= 5
    return this.y <= 4
  }

  /**
   * The implementation makes use of [Cantor pairing function](https://en.wikipedia.org/wiki/Pairing_function#Cantor_pairing_function)
   * to generate the unique hash code.
   */
  public hashCode(): number {
    return (((this.x + this.y) * (this.x + this.y + 1)) >> 1) + this.y
  }

  public equals(position: Position): boolean {
    if (!position) {
      return false
    }
    return this.x === position.x && this.y === position.y
  }
}

export default Position
