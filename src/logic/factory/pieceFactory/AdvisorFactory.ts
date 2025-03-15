import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Advisor from "../../pieces/Advisor"
import PieceType from "../PieceType"

/**
 * A class to represent a factory to create a pawn.
 */
class AdvisorFactory extends PieceFactory {
  constructor() {
    super(PieceType.ADVISOR)
  }

  public override createPiece(isRed: boolean, position: Position): Advisor {
    const pieceCode: number = super.convertPieceCode(isRed)
    return new Advisor(pieceCode, position)
  }
}

export default AdvisorFactory
