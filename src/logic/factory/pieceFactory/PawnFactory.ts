import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Pawn from "../../pieces/Pawn"

class PawnFactory extends PieceFactory {
  constructor() {
    super(6)
  }

  public override createPiece(isRed: boolean, position: Position): Pawn {
    const pieceCode: number = super.convertPieceCode(isRed)
    return new Pawn(pieceCode, position)
  }
}

export default PawnFactory
