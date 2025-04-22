import Piece from "../Piece"
import Board from "../Board"
import Position from "../Position"
import Optional from "../utils/Optional"
import PieceCode from "../factory/PieceCode"

/**
 * A class to represent an Advisor on a checkerboard.
 */
class Advisor extends Piece {
  public constructor(isRed: boolean, position: Position) {
    super(PieceCode.ADVISOR, isRed, position)
  }

  public override getAllValidMoves(board: Board): Position[] {
    const moveDirections: number[][] = [
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1]
    ]

    return (
      moveDirections
        .map(
          (moveDirection) =>
            new Position(
              this.getPosition().getX() + moveDirection[0],
              this.getPosition().getY() + moveDirection[1]
            )
        )
        .filter((position) => position.isWithinBoundary()) // check if it is within chessboard
        .filter((position) =>
          // check if there is a piece
          Optional.ofNullable(board.getPieceByPosition(position))
            .or(() => Optional.of(this))
            .filter((piece) => piece === this || piece.isRed() !== this.isRed())
            .isPresent()
        )
        // Prevent Advisor from leaving the General's Palace
        .filter((position) => position.getX() >= 3 && position.getX() <= 5) // x coordinate
        .filter((position) => position.getY() <= 2 || position.getY() >= 7) // y coordinate
    )
  }

  public override toString(): string {
    return "A"
  }
}

export default Advisor
