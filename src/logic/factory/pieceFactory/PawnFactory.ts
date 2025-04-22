import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import PieceCode from "../PieceCode"
import Pawn from "../../pieces/Pawn"
import Color from "../../Color"

/**
 * A class to represent a factory to create a pawn.
 */
class PawnFactory extends PieceFactory {
  constructor() {
    super(PieceCode.PAWN)
  }

  public override createPiece(isRed: boolean, position: Position): Pawn {
    const color: Color = super.getColor(isRed)
    return new Pawn(this.code, color, position)
  }
}

export default PawnFactory
