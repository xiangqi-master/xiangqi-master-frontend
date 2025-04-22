import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Pawn from "../../pieces/Pawn"

/**
 * A class to represent a factory to create a pawn.
 */
class PawnFactory extends PieceFactory {
  public override createPiece(isRed: boolean, position: Position): Pawn {
    return new Pawn(isRed, position)
  }
}

export default PawnFactory
