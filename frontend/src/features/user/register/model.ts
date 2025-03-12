'use client'

import { UserCreate } from '@src/shared/api'
import { useForm } from 'react-hook-form'

export function useUserCreateFormModel() {
  const { register, handleSubmit, reset } = useForm<UserCreate>()

  return {
    register,
    handleSubmit,
    reset,
  }
}
