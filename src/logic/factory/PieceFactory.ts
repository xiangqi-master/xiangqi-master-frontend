import Position from "../Position"
import Piece from "../Piece"
import Color from "../Color"

/**
 * An abstract class to represent a factory of pieces. This follows factory design pattern.
 */
abstract class PieceFactory {
  protected code: number = -1

  protected constructor(code: number) {
    this.code = code
  }

  /**
   * Creates the instance of the target piece.
   *
   * @param _isRed whether the piece is red or black
   * @param _position the position of this piece on the checkerboard
   */
  public abstract createPiece(_isRed: boolean, _position: Position): Piece

  protected getColor(isRed: boolean): string {
    return isRed ? Color.RED : Color.BLACK
  }
}

export default PieceFactory
