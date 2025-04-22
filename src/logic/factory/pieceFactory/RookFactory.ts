import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Rook from "../../pieces/Rook"

/**
 * A class to represent a factory to create a rook / chariot.
 */
class RookFactory extends PieceFactory {
  public override createPiece(isRed: boolean, position: Position): Rook {
    return new Rook(isRed, position)
  }
}

export default RookFactory
