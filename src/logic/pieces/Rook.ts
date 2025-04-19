import Piece from "../Piece"
import Board from "../Board"
import Position from "../Position"
import Color from "../Color"

/**
 * A class to represent a rook on a checkerboard.
 */
class Rook extends Piece {
  public constructor(code: number, color: Color, position: Position) {
    super(code, color, position)
  }

  public override getAllValidMoves(board: Board): Position[] {
    const moveDirections: number[][] = [
      [-1, 0], // Move left
      [1, 0], // Move right
      [0, -1], // Move down
      [0, 1] // Move up
    ]

    const validMoves: Position[] = []

    for (const [dx, dy] of moveDirections) {
      for (
        let step = 1;
        step <= Math.max(Position.ROWS, Position.COLS) - 1;
        step++
      ) {
        // Move multiple steps
        const newX = this.getPosition().getX() + dx * step
        const newY = this.getPosition().getY() + dy * step
        const newPosition = new Position(newX, newY)

        if (!newPosition.isWithinBoundary()) {
          break // Stop if out of board
        }

        const pieceAtNewPosition = board.getPieceByPosition(newPosition)

        if (pieceAtNewPosition) {
          // Can capture if it's an opponent's piece
          if (pieceAtNewPosition.isRed() !== this.isRed()) {
            validMoves.push(newPosition)
          }
          break // Stop when encountering any piece
        }

        validMoves.push(newPosition)
      }
    }

    return validMoves
  }

  public override toString(): string {
    return "R"
  }
}

export default Rook
