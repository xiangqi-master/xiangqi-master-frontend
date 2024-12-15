import Position from "./Position"
import Board from "./Board"

abstract class Piece {
  public readonly code: number
  public position: Position

  protected constructor(code: number, position: Position) {
    this.code = code
    this.position = position
  }

  public isValidMove(board: Board, targetPosition: Position): boolean {
    return this.getAllValidMoves(board).some((position) =>
      position.equals(targetPosition)
    )
  }

  abstract getAllValidMoves(_board: Board): Position[]

  public move(targetPosition: Position): void {
    this.position.setPosition(targetPosition)
  }

  public isRed(): boolean {
    return this.code < 10
  }

  public equals(piece: Piece): boolean {
    return this.code === piece.code && this.position.equals(piece.position)
  }

  public toString(): string {
    // TODO
    return ""
  }
}

export default Piece
