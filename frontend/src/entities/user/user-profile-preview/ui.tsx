import { User } from '@entities/user'
import { Box } from '@shared/ui'
import Image from 'next/image'

export const UI = ({ user }: { user: User }) => {
  return (
    <Box className="flex items-center space-x-4">
      <Image src={user.image} alt="User" className="rounded-full" width={64} height={64} />
      <Box>
        <h1 className="text-2xl font-semibold">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
      </Box>
    </Box>
  )
}
