import Position from "../../Position"
import PieceFactory from "../PieceFactory"
import Rook from "../../pieces/Rook"
import PieceType from "../PieceType"

class RookFactory extends PieceFactory {
  constructor() {
    super(PieceType.ROOK)
  }

  public override createPiece(isRed: boolean, position: Position): Rook {
    const pieceCode: number = super.convertPieceCode(isRed)
    return new Rook(pieceCode, position)
  }
}

export default RookFactory
