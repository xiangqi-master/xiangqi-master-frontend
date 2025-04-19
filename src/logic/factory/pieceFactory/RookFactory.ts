import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Rook from "../../pieces/Rook"
import PieceCode from "../PieceCode"
import Color from "../../Color"

/**
 * A class to represent a factory to create a rook / chariot.
 */
class RookFactory extends PieceFactory {
  constructor() {
    super(PieceCode.ROOK)
  }

  public override createPiece(isRed: boolean, position: Position): Rook {
    const color: Color = super.getColor(isRed)
    return new Rook(this.code, color, position)
  }
}

export default RookFactory
