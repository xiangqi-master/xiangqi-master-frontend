import Piece from "./Piece"
import Position from "./Position"

class Board {
  public board: Piece[]

  public constructor(board: Piece[] = []) {
    this.board = board
  }

  public move(startPosition: Position, endPosition: Position): void {
    this.getPieceByPosition(startPosition)?.move(endPosition)
  }

  public getPieceByPosition(position: Position): Piece | undefined {
    return this.board.find((piece) => piece.position.equals(position))
  }

  public equals(board: Board): boolean {
    if (board == null) {
      return false
    }
    return this.board.every((piece) => board.board.some((e) => e.equals(piece)))
  }

  public toString(): string {
    // TODO
    return ""
  }
}

export default Board
