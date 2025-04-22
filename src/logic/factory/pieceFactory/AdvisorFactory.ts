import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Advisor from "../../pieces/Advisor"

/**
 * A class to represent a factory to create an advisor.
 */
class AdvisorFactory extends PieceFactory {
  public override createPiece(isRed: boolean, position: Position): Advisor {
    return new Advisor(isRed, position)
  }
}

export default AdvisorFactory
