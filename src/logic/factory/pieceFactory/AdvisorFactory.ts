import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Advisor from "../../pieces/Advisor"
import PieceCode from "../PieceCode"

/**
 * A class to represent a factory to create an advisor.
 */
class AdvisorFactory extends PieceFactory {
  constructor() {
    super(PieceCode.ADVISOR)
  }

  public override createPiece(isRed: boolean, position: Position): Advisor {
    const color: string = super.getColor(isRed)
    return new Advisor(PieceCode.ADVISOR, color, position)
  }
}

export default AdvisorFactory
