import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Pawn from "../../pieces/Pawn"
import PieceType from "../PieceType"

/**
 * A class to represent a factory to create a pawn.
 */
class PawnFactory extends PieceFactory {
  constructor() {
    super(PieceType.PAWN)
  }

  public override createPiece(isRed: boolean, position: Position): Pawn {
    const pieceCode: number = super.convertPieceCode(isRed)
    return new Pawn(pieceCode, position)
  }
}

export default PawnFactory
