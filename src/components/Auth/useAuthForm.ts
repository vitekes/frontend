import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import authService from 'src/services/auth/auth.service'
import type { IFormData } from 'src/services/auth/auth.types'

export function useAuthForm(isLogin: boolean) {
  const { register, handleSubmit, reset } = useForm<IFormData>()

  const { push } = useRouter()
  const [isPending, startTransition] = useTransition()

  // const recaptchaRef = useRef<ReCAPTCHA>(null)

  const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: IFormData) => authService.main('login', data),
    onSuccess() {
      toast.success('Вы успешно вошли в систему!')
      startTransition(() => {
        reset()
        push('/')
      })
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message)
      }
    },
  })

  const { mutate: mutateRegister, isPending: isRegisterPending } = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: IFormData) => authService.main('register', data),
    onSuccess() {
      startTransition(() => {
        toast.success('Вы успешно зарегистрировались!')
        reset()
        push('/')
      })
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message)
      }
    },
  })

  const onSubmit: SubmitHandler<IFormData> = data =>
    isLogin ? mutateLogin(data) : mutateRegister(data)

  const isLoading = isPending || isLoginPending || isRegisterPending

  return {
    register,
    handleSubmit,
    onSubmit,
    isLoading,
  }
}
