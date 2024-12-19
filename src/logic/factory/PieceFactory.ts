import Position from "../Position"
import Piece from "../Piece"

abstract class PieceFactory {
  protected code: number = -1

  protected constructor(code: number) {
    this.code = code
  }

  public abstract createPiece(_isRed: boolean, _position: Position): Piece

  protected convertPieceCode(isRed: boolean): number {
    return isRed ? this.code : this.code + 10
  }
}

export default PieceFactory
