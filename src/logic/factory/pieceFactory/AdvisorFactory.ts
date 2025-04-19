import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Advisor from "../../pieces/Advisor"
import PieceType from "../PieceType"

/**
 * A class to represent a factory to create an advisor.
 */
class AdvisorFactory extends PieceFactory {
  constructor() {
    super(PieceType.ADVISOR)
  }

  public override createPiece(isRed: boolean, position: Position): Advisor {
    const color: string = super.getColor(isRed)
    return new Advisor(2, color, position)
  }
}

export default AdvisorFactory
