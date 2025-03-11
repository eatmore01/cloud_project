'use client'

import { ReactNode, useEffect } from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@shared/ui'

import { getSessionUser } from '@entities/session/user'
import { User } from '@entities/user'
import { SideBar } from '@widgets/sidebar'
import { useUserStore } from '@entities/user'

interface Props {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  const { user, addUser } = useUserStore()

  useEffect(() => {
    const fetchUser = async () => {
      const sessionUser = await getSessionUser()
      addUser(sessionUser as User)
    }

    fetchUser()
  }, [addUser])

  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-screen rounded-lg border w-full">
      <ResizablePanel defaultSize={15}>{user ? <SideBar user={user} /> : null}</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={85}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={7} className="flex justify-end"></ResizablePanel>
          <ResizablePanel defaultSize={93}>{children}</ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default MainLayout
