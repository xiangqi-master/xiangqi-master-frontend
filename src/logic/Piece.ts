import Position from "./Position"
import Board from "./Board"
import { ValueObject } from "immutable"

abstract class Piece implements ValueObject {
  private readonly code: number
  private readonly position: Position

  protected constructor(code: number, position: Position) {
    this.code = code
    this.position = position
  }

  public isValidMove(board: Board, targetPosition: Position): boolean {
    return this.getAllValidMoves(board).some((position) =>
      position.equals(targetPosition)
    )
  }

  abstract getAllValidMoves(_board: Board): Position[]

  public move(targetPosition: Position): Piece {
    return new (this.constructor as any)(this.code, targetPosition)
  }

  public isRed(): boolean {
    return this.code < 10
  }

  public getCode(): number {
    return this.code
  }

  public getPosition(): Position {
    return this.position
  }

  public equals(piece: Piece): boolean {
    if (piece == null) {
      return false
    }

    // check if they are of the same instance
    if (this.constructor !== piece.constructor) {
      return false
    }

    return this.code === piece.code && this.position.equals(piece.position)
  }

  /**
   * The implementation makes use of [Cantor pairing function](https://en.wikipedia.org/wiki/Pairing_function#Cantor_pairing_function)
   * to generate the unique hash code.
   */
  public hashCode(): number {
    const a = this.code
    const b = this.position.hashCode()

    return (((a + b) * (a + b + 1)) >> 1) + b
  }

  public toString(): string {
    // TODO
    return ""
  }
}

export default Piece
