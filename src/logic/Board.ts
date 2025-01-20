import Piece from "./Piece"
import Position from "./Position"
import { Set, is } from "immutable"
import Optional from "./utils/Optional"

/**
 * The checkerboard that contains statuses of all pieces.
 */
class Board {
  private readonly pieces: Set<Piece>

  public constructor(pieces: Piece[] | Set<Piece> = []) {
    if (Set.isSet(pieces)) {
      this.pieces = pieces
    } else {
      this.pieces = Set<Piece>(pieces)
    }
  }

  /**
   * Moves a piece given by its position to another position on the checkerboard. This method **does not verify**
   * if this move is valid.
   *
   * @param startPosition the position of the piece to be moved
   * @param endPosition the new position to move to
   */
  public move(startPosition: Position, endPosition: Position): Board {
    return Optional.ofNullable(this.getPieceByPosition(startPosition))
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

  /**
   * Finds the piece given by its position.
   *
   * @param position the position of the piece to be found
   */
  public getPieceByPosition(position: Position): Piece | undefined {
    return this.pieces.find((piece) => piece.getPosition().equals(position))
  }

  public getPieces(): Set<Piece> {
    return this.pieces
  }

  /**
   * Adds a new piece to the checkerboard.
   *
   * @param piece the new piece to be added
   */
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
