import Piece from "./Piece"
import Position from "./Position"
import PieceType from "./PieceType"

class PieceFactory {
  // @ts-ignore
  public static createPiece(
    type: PieceType,
    isRed: boolean,
    position: Position
  ): Piece {
    // TODO
  }
}

export default PieceFactory
