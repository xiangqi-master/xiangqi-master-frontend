import { Chalk, ChalkInstance } from "chalk"
import Board from "../Board"
import Piece from "../Piece"

class Ui {
  private chalk: ChalkInstance
  private print = console.log

  public constructor(colorSupportEnabled: boolean = true) {
    this.chalk = new Chalk({ level: colorSupportEnabled ? 3 : 0 })
  }

  public printBoard(board: Board): void {
    const noOfRows = 10,
      noOfCols = 9
    const square: string = String.fromCharCode(9633) // □
    const splitter: string = this.chalk.gray("-")
    const horizontalSplitter: string = Array(noOfCols).fill(splitter).join(" ")
    const chalkRed: ChalkInstance = this.chalk.redBright.bold
    const chalkBlack: ChalkInstance = this.chalk.black.bold
    const chalkBoard: ChalkInstance = this.chalk.bgYellow

    const output: string[][] = Array.from(Array(noOfRows), () =>
      new Array(noOfCols).fill(square)
    )

    board.getPieces().forEach((piece: Piece) => {
      output[piece.getPosition().getY()][piece.getPosition().getX()] =
        piece.isRed()
          ? chalkRed(piece.toString())
          : chalkBlack(piece.toString())
    })

    const outputForChalk: string = output
      .map((row) => row.join(splitter))
      .flatMap((row, i) =>
        i === noOfRows / 2 ? [horizontalSplitter, row] : [row]
      )
      .reverse()
      .join("\n")

    this.print(chalkBoard(outputForChalk))
  }
}

export default Ui
