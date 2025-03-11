'use client'
import { Atom, LucidePaintBucket, PaintBucketIcon } from 'lucide-react'

import { UserSideBarPreview, UserSideBarPreviewSkeleton, User } from '@entities/user'
import { GithubBtn, LogoutBtn, ProfileBtn } from '@features/user'
import { ToggleTheme } from '@features/toggle-theme'
import {
  Box,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@shared/ui'
import { SidebarItem } from './sidebar-item'
import { routes } from '@shared/constant'
export const SideBar = ({ user }: { user: User | null | any }) => {
  return (
    <Box className="flex flex-col w-full h-full">
      <header className="flex justify-between p-3 w-full">
        <Box>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                {user ? <UserSideBarPreview user={user} /> : <UserSideBarPreviewSkeleton />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <ProfileBtn />
              <DropdownMenuSeparator />
              {user?.name ? <GithubBtn userName={user.name} /> : <></>}
              <DropdownMenuSeparator />
              <LogoutBtn />
            </DropdownMenuContent>
          </DropdownMenu>
        </Box>
        <ToggleTheme />
      </header>

      <Box>
        <Box className="p-4">
          <SidebarItem Icon={<PaintBucketIcon size={25} className="mr-2" />} title="Buckets" route={routes.buckets} />
        </Box>
      </Box>
    </Box>
  )
}
