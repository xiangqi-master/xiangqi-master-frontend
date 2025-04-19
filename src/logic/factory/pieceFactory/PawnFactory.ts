import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import PieceCode from "../PieceCode"
import Pawn from "../../pieces/Pawn"

/**
 * A class to represent a factory to create a pawn.
 */
class PawnFactory extends PieceFactory {
  constructor() {
    super(PieceCode.PAWN)
  }

  public override createPiece(isRed: boolean, position: Position): Pawn {
    const color: string = super.getColor(isRed)
    return new Pawn(PieceCode.PAWN, color, position)
  }
}

export default PawnFactory
