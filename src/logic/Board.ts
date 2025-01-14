import Piece from "./Piece"
import Position from "./Position"
import { Set, is } from "immutable"
import Optional from "./utils/Optional"

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
    return Optional.ofNullable(
      this.pieces.find((piece) => piece.getPosition().equals(startPosition))
    )
      .map(
        (pieceToMove: Piece) =>
          new Board(
            this.pieces
              .delete(pieceToMove)
              .filterNot((piece) => piece.getPosition().equals(endPosition))
              .add(pieceToMove.move(endPosition))
          )
      )
      .orElseGet(() => new Board(this.pieces))
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
    return this.pieces
      .sortBy((piece) => piece.getPosition().getY())
      .sortBy((piece) => piece.getPosition().getX())
      .map(
        (piece) =>
          `(${piece.toString()}-${piece.isRed() ? "Red" : "Black"}-[${piece.getPosition().getX()},${piece.getPosition().getY()}])`
      )
      .join(";")
  }
}

export default Board
