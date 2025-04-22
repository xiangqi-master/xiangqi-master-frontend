import Piece from "../Piece"
import Board from "../Board"
import Position from "../Position"
import Optional from "../utils/Optional"
import PieceCode from "../factory/PieceCode"

/**
 * A class to represent a pawn on a checkerboard.
 */
class Pawn extends Piece {
  public constructor(isRed: boolean, position: Position) {
    super(PieceCode.PAWN, isRed, position)
  }

  public override getAllValidMoves(board: Board): Position[] {
    const forwardDirection: 1 | -1 = this.isRed() ? 1 : -1
    const moveDirections: number[][] = [
      [-1, 0],
      [1, 0],
      [0, forwardDirection]
    ]
    const invalidXCoordinates: number[] = [1, 3, 5, 7]

    return moveDirections
      .map(
        (moveDirection) =>
          new Position(
            this.getPosition().getX() + moveDirection[0],
            this.getPosition().getY() + moveDirection[1]
          )
      )
      .filter((position) => position.isWithinBoundary())
      .filter((position) =>
        // check if there is a piece
        Optional.ofNullable(board.getPieceByPosition(position))
          .or(() => Optional.of(this))
          .filter((piece) => piece === this || piece.isRed() !== this.isRed())
          .isPresent()
      )
      .filter(
        // Prevent Pawn from moving left or right before crossing the river
        (position) =>
          position.hasCrossedRiver(this.isRed()) ||
          !invalidXCoordinates.some(
            (invalidXCoordinate) => invalidXCoordinate === position.getX()
          )
      )
  }

  public override toString(): string {
    return "P"
  }
}

export default Pawn
