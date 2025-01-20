import Position from "./Position"
import Board from "./Board"
import { ValueObject } from "immutable"

/**
 * An abstract class to represent a piece on a checkerboard.
 */
abstract class Piece implements ValueObject {
  private readonly code: number
  private readonly position: Position

  protected constructor(code: number, position: Position) {
    this.code = code
    this.position = position
  }

  /**
   * Checks if the move to a target position is valid.
   *
   * @param board the current status of the checkerboard
   * @param targetPosition the target position to move to
   */
  public isValidMove(board: Board, targetPosition: Position): boolean {
    return this.getAllValidMoves(board).some((position) =>
      position.equals(targetPosition)
    )
  }

  /**
   * Gets all valid positions that this piece can move to given by the checkerboard.
   *
   * @param _board the current status of the checkerboard
   */
  public abstract getAllValidMoves(_board: Board): Position[]

  /**
   * Moves this piece to the target position. However, this method **does not verify** whether the target position
   * is valid.
   *
   * @param targetPosition the target position to move to
   */
  public move(targetPosition: Position): Piece {
    return new (this.constructor as any)(this.code, targetPosition)
  }

  /**
   * Checks if this piece is red or black.
   */
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
    if (!piece) {
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

  public abstract toString(): string
}

export default Piece
