import Piece from "../Piece"
import Board from "../Board"
import Position from "../Position"

/**
 * A class to represent an Elephant in Chinese Chess.
 */
class Elephant extends Piece {
  public constructor(code: number, position: Position) {
    super(code, position)
  }

  public override getAllValidMoves(board: Board): Position[] {
    const isRed: boolean = super.isRed()
    const riverBoundary = isRed ? 5 : 4 // Red (y <= 4), Black (y >= 5)
    const moveDirections: [number, number][] = [
      [2, 2],
      [2, -2],
      [-2, 2],
      [-2, -2]
    ]

    return moveDirections
      .map(
        ([dx, dy]) =>
          new Position(
            this.getPosition().getX() + dx,
            this.getPosition().getY() + dy
          )
      )
      .filter((position) => position.isWithinBoundary())
      .filter((position) =>
        isRed
          ? position.getY() <= riverBoundary
          : position.getY() >= riverBoundary
      ) // Cannot cross river
      .filter((position) => {
        const eyeX = (this.getPosition().getX() + position.getX()) / 2
        const eyeY = (this.getPosition().getY() + position.getY()) / 2
        return !board.getPieceByPosition(new Position(eyeX, eyeY)) // Check if elephant eye is blocked
      })
      .filter((position) => {
        const piece = board.getPieceByPosition(position)
        return !piece || piece.isRed() !== isRed // Can move if empty or occupied by opponent
      })
  }

  public override toString(): string {
    return "E"
  }
}

export default Elephant
