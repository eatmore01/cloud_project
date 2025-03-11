import { Box } from '@shared/ui'
import { ReactNode } from 'react'

interface Props {
  Icon: ReactNode
  title: string
}

export const HeaderViewBtn = ({ Icon, title }: Props) => {
  return (
    <Box className="flex items-center justify-between p-2 ">
      <Box className="flex justify-center items-center ">
        {Icon}
        <span className="text-foreground">{title}</span>
      </Box>
    </Box>
  )
}
