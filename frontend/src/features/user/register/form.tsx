'use client'

import { Box, Button, Input } from '@src/shared/ui'
import { createUser, UserCreate, UserVerify } from '@src/shared/api'
import { SubmitHandler } from 'react-hook-form'
import { ToggleTheme } from '@src/features/toggle-theme'
import { DoLogin } from '@src/actions'
import { useRouter } from 'next/navigation'
import { routes } from '@src/shared/constant'
import { useUserCreateFormModel } from './model'
import { isSucessResponse } from '@src/shared/lib'
import { toast } from 'sonner'
import Cookies from 'js-cookie'
import { useUserStore } from '@src/entities/user'

export const RegisterForm = () => {
  const { handleSubmit, register, reset, formState } = useUserCreateFormModel()
  const { addUser } = useUserStore()
  const router = useRouter()

  const onSubmit: SubmitHandler<UserCreate> = async (data) => {
    const response = await createUser({ email: data.email, password: data.password, name: data.name })
    if (isSucessResponse(response)) {
      const user = response.user

      addUser(user)

      const userId = response.user.id
      const token = response.token

      Cookies.set('userId', userId, { expires: 365 })
      Cookies.set('token', token, { expires: 365 })

      Cookies.remove('authjs.callback-url')
      Cookies.remove('authjs.csrf-token')

      toast(response.message)

      reset()

      router.push(routes.buckets)
    } else {
      toast(response.message)
    }
  }

  return (
    <main className="flex flex-col h-full">
      <Box className="flex justify-between">
        <Button className="m-14 text-foreground self-start" variant={'link'} onClick={() => router.back()}>
          Back
        </Button>
        <Box className="self-end m-14">
          <ToggleTheme />
        </Box>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
        <h2 className="text-xl mb-4 text-foreground">Registration</h2>
        <Box>
          {formState.errors.name && <p className="text-red-500">{formState.errors.name.message}</p>}
          <Input
            placeholder="Name"
            className="w-full p-2 mb-4 rounded bg-gray-800 shadow focus:shadow-outline-white"
            {...register('name', {
              required: 'This field is required',
            })}
          />
          {formState.errors.email && <p className="text-red-500">{formState.errors.email.message}</p>}
          <Input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 rounded bg-gray-800 shadow focus:shadow-outline-white"
            {...register('email', {
              required: 'This field is required',
            })}
          />
          {formState.errors.password && <p className="text-red-500">{formState.errors.password.message}</p>}
          <Input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 rounded bg-gray-800 shadow focus:shadow-outline-white"
            {...register('password', {
              required: 'This field is required',
            })}
          />
          <Button type="submit" className="w-full p-2 bg-gray-500 text-foreground rounde">
            Registration
          </Button>
        </Box>
      </form>
      <div className="flex justify-center space-x-4 m-6">
        <Button className="text-foreground text-xl" variant={'link'} onClick={() => router.push(routes.login)}>
          Alredy have account ? Login
        </Button>
        <form action={DoLogin}>
          <Button type="submit" variant={'link'}>
            <span className="text-xl text-foreground hover:underline">Login with Github</span>
          </Button>
        </form>
      </div>
    </main>
  )
}
