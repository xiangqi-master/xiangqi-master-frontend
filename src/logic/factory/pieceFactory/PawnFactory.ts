import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import PieceType from "../PieceType"
import Pawn from "../../pieces/Pawn"

/**
 * A class to represent a factory to create a pawn.
 */
class PawnFactory extends PieceFactory {
  constructor() {
    super(PieceType.PAWN)
  }

  public override createPiece(isRed: boolean, position: Position): Pawn {
    const color: string = super.getColor(isRed)
    return new Pawn(1, color, position)
  }
}

export default PawnFactory
