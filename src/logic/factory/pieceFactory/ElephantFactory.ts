import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Elephant from "../../pieces/Elephant"

/**
 * A class to represent a factory to create a rook / chariot.
 */
class ElephantFactory extends PieceFactory {
  public override createPiece(isRed: boolean, position: Position): Elephant {
    return new Elephant(isRed, position)
  }
}

export default ElephantFactory
