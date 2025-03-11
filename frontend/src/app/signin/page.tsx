import { DoLogin } from '@src/actions'
import { Box, Button } from '@shared/ui'
import { ToggleTheme } from '@features/toggle-theme'
import { getSessionUser } from '@entities/session/user'
import { redirect } from 'next/navigation'
import { routes } from '@shared/constant'

const Page = async () => {
  const user = await getSessionUser()
  if (user) redirect(routes.buckets)

  return (
    <main className="flex flex-col items-center justify-between" data-testid={'main'}>
      <Box className="self-end m-20">
        <ToggleTheme />
      </Box>
      <Box className="flex flex-row-reverse justify-center items-center h-full ">
        <form className="flex flex-col align-center justify-center text-foreground" action={DoLogin}>
          <h1 className="mt-10 scroll-m-20  text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
            Login
          </h1>
          <Box className="m-5 p-2">
            <Button type="submit" variant={'link'}>
              <span className="text-xl text-foreground">Sign in with Github</span>
            </Button>
          </Box>
        </form>
      </Box>
    </main>
  )
}

export default Page
