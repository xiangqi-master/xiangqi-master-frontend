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
        board
          .getPieces()
          .filter((piece) => piece.getPosition().equals(position))
          .every((piece) => piece.isRed() !== isRed)
      )
      .filter(
        (position) =>
          position.isCrossRiver(isRed) ||
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
