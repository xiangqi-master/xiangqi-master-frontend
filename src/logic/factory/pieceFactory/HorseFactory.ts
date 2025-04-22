import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Horse from "../../pieces/Horse"

/**
 * A class to represent a factory to create a horse / chariot.
 */
class HorseFactory extends PieceFactory {
  public override createPiece(isRed: boolean, position: Position): Horse {
    return new Horse(isRed, position)
  }
}

export default HorseFactory
