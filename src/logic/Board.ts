import Piece from "./Piece"
import Position from "./Position"
import { Set, is } from "immutable"

class Board {
  private readonly pieces: Set<Piece>

  public constructor(pieces: Piece[] | Set<Piece> = []) {
    if (Set.isSet(pieces)) {
      this.pieces = pieces
    } else {
      this.pieces = Set<Piece>(pieces)
    }
  }

  public move(startPosition: Position, endPosition: Position): Board {
    const targetPiece: Piece | undefined = this.pieces.find((piece) =>
      piece.getPosition().equals(startPosition)
    )

    if (targetPiece === undefined) return this

    const newPieces: Set<Piece> = this.pieces
      .delete(targetPiece)
      .filterNot((piece) => piece.getPosition().equals(endPosition))
      .add(targetPiece.move(endPosition))

    return new Board(newPieces)
  }

  public getPieceByPosition(position: Position): Piece | undefined {
    return this.pieces.find((piece) => piece.getPosition().equals(position))
  }

  public getPieces(): Set<Piece> {
    return this.pieces
  }

  public addPiece(piece: Piece): Board {
    const newPieces: Set<Piece> = this.pieces.add(piece)
    return new Board(newPieces)
  }

  public equals(board: Board): boolean {
    if (!board) {
      return false
    }
    return is(this.pieces, board.pieces)
  }

  public toString(): string {
    // TODO
    return ""
  }
}

export default Board
