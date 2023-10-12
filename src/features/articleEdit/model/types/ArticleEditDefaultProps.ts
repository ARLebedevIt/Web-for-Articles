import { Dispatch, SetStateAction } from "react"


export type ArticleEditDefaultProps = {
  className?: string
  setBlockInfo: Dispatch<
    SetStateAction<{ paragraphId?: number; blockId: string }>
  >
  onChangeParagraph: (value: string) => void
}