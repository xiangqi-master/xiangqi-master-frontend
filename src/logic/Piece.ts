import Position from "./Position"
import Board from "./Board"
import { ValueObject } from "immutable"
import Color from "./Color"
import PieceCode from "./factory/PieceCode"

/**
 * An abstract class to represent a piece on a checkerboard.
 */
abstract class Piece implements ValueObject {
  private readonly code: PieceCode
  private readonly color: Color
  private readonly position: Position

  protected constructor(code: PieceCode, isRed: boolean, position: Position) {
    this.code = code
    this.color = isRed ? Color.RED : Color.BLACK
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
    return new (this.constructor as new (
      isRed: boolean,
      position: Position
    ) => Piece)(this.isRed(), targetPosition)
  }

  public getCode(): PieceCode {
    return this.code
  }

  /**
   * Checks if this piece is red or black.
   */
  public isRed(): boolean {
    return this.color === Color.RED
  }

  public getPosition(): Position {
    return this.position
  }

  public equals(piece: Piece | null | undefined): boolean {
    if (!piece) {
      return false
    }

    // check if they are of the same instance
    if (this.constructor !== piece.constructor) {
      return false
    }

    return (
      this.code === piece.code &&
      this.color === piece.color &&
      this.position.equals(piece.position)
    )
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
