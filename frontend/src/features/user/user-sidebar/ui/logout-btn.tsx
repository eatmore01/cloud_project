import { DoLogout } from '@src/actions'
import { Button } from '@shared/ui'

export const LogoutBtn = () => {
  return (
    <form action={DoLogout}>
      <Button type="submit" className="w-full justify-start">
        <span>Log out </span>
      </Button>
    </form>
  )
}
