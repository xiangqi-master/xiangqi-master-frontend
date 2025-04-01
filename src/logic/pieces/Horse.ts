import Piece from "../Piece"
import Board from "../Board"
import Position from "../Position"

/**
 * A class to represent a horse on a checkerboard.
 */
class Horse extends Piece {
  public constructor(code: number, position: Position) {
    super(code, position)
  }

  public override getAllValidMoves(board: Board): Position[] {
    const isRed: boolean = super.isRed()
    const [x, y] = this.getPosition().getPosition()

    // Define all possible L-shaped moves and the respective leg positions
    const movePatterns: { move: [number, number]; leg: [number, number] }[] = [
      { move: [-2, -1], leg: [-1, 0] },
      { move: [-2, 1], leg: [-1, 0] },
      { move: [2, -1], leg: [1, 0] },
      { move: [2, 1], leg: [1, 0] },
      { move: [-1, -2], leg: [0, -1] },
      { move: [1, -2], leg: [0, -1] },
      { move: [-1, 2], leg: [0, 1] },
      { move: [1, 2], leg: [0, 1] }
    ]

    return movePatterns
      .filter(({ leg }) => {
        const legPos = new Position(x + leg[0], y + leg[1])
        return legPos.isWithinBoundary() && !board.getPieceByPosition(legPos) // Ensure leg position is valid and not blocked
      })
      .map(({ move }) => new Position(x + move[0], y + move[1])) // Generate new positions
      .filter((pos) => pos.isWithinBoundary()) // Ensure move is within board
      .filter(
        (pos) =>
          !board.getPieceByPosition(pos) ||
          board.getPieceByPosition(pos)!.isRed() !== isRed // Allow empty or opponent positions
      )
  }

  public override toString(): string {
    return "H"
  }
}

export default Horse
