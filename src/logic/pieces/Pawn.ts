import Piece from "../Piece"
import Board from "../Board"
import Position from "../Position"

class Pawn extends Piece {
  public constructor(code: number, position: Position) {
    super(code, position)
  }

  public override getAllValidMoves(board: Board): Position[] {
    const isRed: boolean = super.isRed()
    const forwardDirection: 1 | -1 = isRed ? 1 : -1
    const moveDirections: number[][] = [
      [0, -1],
      [0, 1],
      [forwardDirection, 0]
    ]
    const [x, y]: [number, number] = this.position.getPosition()

    return moveDirections
      .map(
        (moveDirection) =>
          new Position(x + moveDirection[0], y + moveDirection[1])
      )
      .filter((position) => position.isWithinBoundary())
      .filter((position) =>
        board.board
          .filter((piece) => piece.position.equals(position))
          .every((piece) => piece.isRed() !== isRed)
      )
  }
}
