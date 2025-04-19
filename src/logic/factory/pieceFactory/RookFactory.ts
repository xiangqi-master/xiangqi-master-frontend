import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Rook from "../../pieces/Rook"
import PieceCode from "../PieceCode"

/**
 * A class to represent a factory to create a rook / chariot.
 */
class RookFactory extends PieceFactory {
  constructor() {
    super(PieceCode.ROOK)
  }

  public override createPiece(isRed: boolean, position: Position): Rook {
    const color: string = super.getColor(isRed)
    return new Rook(PieceCode.ROOK, color, position)
  }
}

export default RookFactory
