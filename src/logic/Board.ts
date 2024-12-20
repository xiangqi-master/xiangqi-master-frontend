import Piece from "./Piece"
import Position from "./Position"

class Board {
  public pieces: Piece[]

  public constructor(board: Piece[] = []) {
    this.pieces = board
  }

  public move(startPosition: Position, endPosition: Position): void {
    this.getPieceByPosition(startPosition)?.move(endPosition)
  }

  public getPieceByPosition(position: Position): Piece | undefined {
    return this.pieces.find((piece) => piece.position.equals(position))
  }

  public equals(board: Board): boolean {
    if (board == null) {
      return false
    }
    return this.pieces.every((piece) =>
      board.pieces.some((e) => e.equals(piece))
    )
  }

  public toString(): string {
    // TODO
    return ""
  }
}

export default Board
