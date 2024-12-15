class Position {
  private x: number
  private y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  public getPosition(): [number, number] {
    return [this.x, this.y]
  }

  public setPosition(position: Position): void {
    this.x = position.x
    this.y = position.y
  }

  public getX(): number {
    return this.x
  }

  public getY(): number {
    return this.y
  }

  public isWithinBoundary(): boolean {
    if (this.x < 0 || this.y < 0) {
      return false
    }

    return !(this.x >= 9 || this.y >= 10)
  }

  public isCrossRiver(isRed: boolean): boolean {
    if (isRed) return this.y >= 5
    return this.y <= 4
  }

  public equals(position: Position): boolean {
    return this.x === position.x && this.y === position.y
  }
}

export default Position
