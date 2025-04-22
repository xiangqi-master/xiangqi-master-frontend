import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Advisor from "../../pieces/Advisor"
import PieceCode from "../PieceCode"
import Color from "../../Color"

/**
 * A class to represent a factory to create an advisor.
 */
class AdvisorFactory extends PieceFactory {
  constructor() {
    super(PieceCode.ADVISOR)
  }

  public override createPiece(isRed: boolean, position: Position): Advisor {
    const color: Color = super.getColor(isRed)
    return new Advisor(this.code, color, position)
  }
}

export default AdvisorFactory
