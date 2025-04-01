import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Horse from "../../pieces/Horse"
import PieceType from "../PieceType"

/**
 * A class to represent a factory to create a horse / chariot.
 */
class HorseFactory extends PieceFactory {
  constructor() {
    super(PieceType.HORSE)
  }

  public override createPiece(isRed: boolean, position: Position): Horse {
    const pieceCode: number = super.convertPieceCode(isRed)
    return new Horse(pieceCode, position)
  }
}

export default HorseFactory
