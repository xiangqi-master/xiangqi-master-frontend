import Piece from "../Piece"
import Board from "../Board"
import Position from "../Position"
import { Range } from "immutable"
import Optional from "../utils/Optional"

class Rook extends Piece {
  public constructor(code: number, position: Position) {
    super(code, position)
  }

  public override getAllValidMoves(board: Board): Position[] {
    const [x, y] = this.getPosition().getPosition()

    // [x-increment, y-increment, start, end]
    const moveDirections = [
      [0, 1, y, 9],
      [0, -1, y, 0],
      [1, 0, x, 8],
      [-1, 0, x, 0]
    ]

    return moveDirections
      .map((direction) =>
        Range(direction[2], direction[3], direction[0] + direction[1]).map(
          (_, i) =>
            new Position(x + (i + 1) * direction[0], y + (i + 1) * direction[1])
        )
      ) // construct all possible positions
      .map((positions) =>
        positions.takeUntil((position) =>
          Optional.ofNullable(board.getPieceByPosition(position))
            .filter((piece) => piece.isRed() === super.isRed())
            .isPresent()
        )
      ) // take all positions before the first piece with same color is met
      .flatMap((positions) =>
        positions
          .reverse()
          .skip(
            positions
              .reverse()
              .findIndex((position) =>
                Optional.ofNullable(
                  board.getPieceByPosition(position)
                ).isPresent()
              )
          )
          .toArray()
      ) // skip all positions after the first opponent piece is met
  }

  public override toString(): string {
    return "R"
  }
}

export default Rook
