import Position from "../Position"
import Piece from "../Piece"
import Color from "../Color"
import PieceCode from "./PieceCode"

/**
 * An abstract class to represent a factory of pieces. This follows factory design pattern.
 */
abstract class PieceFactory {
  protected code: PieceCode

  protected constructor(code: PieceCode) {
    this.code = code
  }

  /**
   * Creates the instance of the target piece.
   *
   * @param _isRed whether the piece is red or black
   * @param _position the position of this piece on the checkerboard
   */
  public abstract createPiece(_isRed: boolean, _position: Position): Piece

  /**
   * Gets the code of this piece.
   */
  protected getColor(isRed: boolean): Color {
    return isRed ? Color.RED : Color.BLACK
  }
}

export default PieceFactory
