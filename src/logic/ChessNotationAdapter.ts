import Board from "./Board"
import Position from "./Position"

const xToChinese = ["一", "二", "三", "四", "五", "六", "七", "八", "九"]
const RED_START_X = 8
const BLACK_START_X = 0

const PieceNameMap: Record<number, [string, string]> = {
  0: ["仕", "士"], // Advisor
  1: ["相", "象"], // Elephant
  2: ["帥", "將"], // General
  3: ["馬", "傌"], // Horse
  4: ["車", "俥"], // Rook
  5: ["炮", "砲"], // Cannon
  6: ["兵", "卒"] // Pawn
}

/** Returns the Chinese character name for a given piece code */
export function getPieceName(code: number): string {
  const isRed = code < 10
  const baseCode = code % 10
  const names = PieceNameMap[baseCode]
  return isRed ? names[0] : names[1]
}

export default class ChessNotationAdapter {
  public static toNotation(board: Board, from: Position, to: Position): string {
    const allPieces = Array.from(board.getPieces())
    const movingPiece = allPieces.find((p) => p.getPosition().equals(from))
    if (!movingPiece) throw new Error("No piece at source position")

    const code = movingPiece.getCode()
    const isRed = code < 10
    const pieceName = getPieceName(code)

    // Handle front/back (前/后) disambiguation
    const sameColumn = allPieces.filter(
      (p) =>
        p !== movingPiece &&
        p.getCode() === code &&
        p.getPosition().getX() === from.getX()
    )

    let prefix = ""
    if (sameColumn.length > 0) {
      const ordered = sameColumn.concat([movingPiece]).sort((a, b) => {
        return isRed
          ? b.getPosition().getY() - a.getPosition().getY()
          : a.getPosition().getY() - b.getPosition().getY()
      })
      const index = ordered.findIndex((p) => p === movingPiece)
      prefix = index === 0 ? "前" : "后"
    }

    const fromX = from.getX()
    const toX = to.getX()
    const fromY = from.getY()
    const toY = to.getY()

    let file = ""
    if (!prefix) {
      file = isRed
        ? xToChinese[RED_START_X - fromX]
        : xToChinese[BLACK_START_X + fromX]
    }

    let action: string
    let dest: string

    if (fromY === toY) {
      action = "平"
      dest = isRed
        ? xToChinese[RED_START_X - toX]
        : xToChinese[BLACK_START_X + toX]
    } else if ((isRed && toY > fromY) || (!isRed && toY < fromY)) {
      action = "进"
      dest =
        fromX === toX
          ? xToChinese[Math.abs(toY - fromY) - 1]
          : isRed
            ? xToChinese[RED_START_X - toX]
            : xToChinese[BLACK_START_X + toX]
    } else {
      action = "退"
      dest =
        fromX === toX
          ? xToChinese[Math.abs(fromY - toY) - 1]
          : isRed
            ? xToChinese[RED_START_X - toX]
            : xToChinese[BLACK_START_X + toX]
    }

    return `${prefix}${pieceName}${file}${action}${dest}`
  }
}
