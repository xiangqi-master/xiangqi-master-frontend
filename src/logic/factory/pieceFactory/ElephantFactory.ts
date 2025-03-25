import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Elephant from "../../pieces/Elephant"
import PieceType from "../PieceType"

/**
 * A class to represent a factory to create a rook / chariot.
 */
class ElephantFactory extends PieceFactory {
  constructor() {
    super(PieceType.ROOK)
  }

  public override createPiece(isRed: boolean, position: Position): Elephant {
    const pieceCode: number = super.convertPieceCode(isRed)
    return new Elephant(pieceCode, position)
  }
}

export default ElephantFactory
