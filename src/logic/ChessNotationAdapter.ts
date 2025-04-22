import Board from "./Board"
import Position from "./Position"
import Piece from "./Piece"
import PieceCode from "./factory/PieceCode"

const RED_START_X = 8
const BLACK_START_X = 0
const xToChinese = ["一", "二", "三", "四", "五", "六", "七", "八", "九"]

const PieceNameMap: Record<PieceCode, [string, string]> = {
  [PieceCode.ADVISOR]: ["仕", "士"], // Advisor
  [PieceCode.ELEPHANT]: ["相", "象"], // Elephant
  [PieceCode.GENERAL]: ["帥", "將"], // General
  [PieceCode.HORSE]: ["馬", "傌"], // Horse
  [PieceCode.ROOK]: ["車", "俥"], // Rook
  [PieceCode.CANNON]: ["炮", "砲"], // Cannon
  [PieceCode.PAWN]: ["兵", "卒"] // Pawn
}

export function getPieceName(piece: Piece): string {
  const code = piece.getCode()
  const isRed = piece.isRed()
  return isRed ? PieceNameMap[code][0] : PieceNameMap[code][1]
}

function getPawnPrefix(board: Board, piece: Piece): string {
  const isRed = piece.isRed()
  const x = piece.getPosition().getX()

  const allPieces = Array.from(board.getPieces())

  const sameColumnPawns = allPieces.filter(
    (p) => p.getCode() === piece.getCode() && p.getPosition().getX() === x
  )

  if (sameColumnPawns.length >= 3) {
    const sorted = sameColumnPawns.sort((a, b) => {
      const ya = a.getPosition().getY()
      const yb = b.getPosition().getY()
      return isRed ? yb - ya : ya - yb
    })
    const index = sorted.findIndex((p) => p === piece)
    return xToChinese[index]
  }

  return ""
}

export default class ChessNotationAdapter {
  public static toNotation(board: Board, from: Position, to: Position): string {
    const allPieces = Array.from(board.getPieces())
    const piece = allPieces.find((p) => p.getPosition().equals(from))
    if (!piece) throw new Error("No piece at source position")

    const isRed = piece.isRed()
    const pieceName = getPieceName(piece)

    const sameColumnSameType = allPieces.filter(
      (p) =>
        p !== piece &&
        p.getCode() === piece.getCode() &&
        p.getPosition().getX() === from.getX()
    )

    let prefix = ""
    if (piece.getCode() === PieceCode.PAWN) {
      prefix = getPawnPrefix(board, piece)
    }

    if (!prefix && sameColumnSameType.length > 0) {
      const sorted = sameColumnSameType.concat([piece]).sort((a, b) => {
        return isRed
          ? b.getPosition().getY() - a.getPosition().getY()
          : a.getPosition().getY() - b.getPosition().getY()
      })
      const index = sorted.findIndex((p) => p === piece)
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
      if (fromX === toX) {
        dest = xToChinese[Math.abs(toY - fromY) - 1]
      } else {
        dest = isRed
          ? xToChinese[RED_START_X - toX]
          : xToChinese[BLACK_START_X + toX]
      }
    } else {
      action = "退"
      if (fromX === toX) {
        dest = xToChinese[Math.abs(fromY - toY) - 1]
      } else {
        dest = isRed
          ? xToChinese[RED_START_X - toX]
          : xToChinese[BLACK_START_X + toX]
      }
    }

    return `${prefix}${pieceName}${file}${action}${dest}`
  }
}
