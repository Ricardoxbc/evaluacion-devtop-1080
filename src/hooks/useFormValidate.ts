import { useState } from 'react'
import { toast } from 'sonner'
import type { ErrorType } from '../components/CustomModal'
import { invalidName, invalidPass, validEmail } from '../utils'

interface Props {
  disposeFn: () => void
}

export const useValidSubmit = ({ disposeFn }: Props) => {
  const [error, setError] = useState<ErrorType>({
    name: undefined,
    text: undefined,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const formData = new FormData(target)

    const name = formData.get('name')
    if (!name) {
      setError({ name: 'name', text: 'Nombre requerido' })
      return
    }
    if (name?.toString().length < 2 || invalidName(name + '')) {
      setError({ name: 'name', text: 'Nombre inválido' })
      return
    }

    const lastname = formData.get('lastname')
    if (!lastname) {
      setError({ name: 'lastname', text: 'Apellido requerido' })
      return
    }
    if (lastname?.toString()?.length < 2 || invalidName(lastname + '')) {
      setError({ name: 'lastname', text: 'Apellido inválido' })
      return
    }

    const email1 = formData.get('email')
    const email2 = formData.get('emailConfirm')
    console.log(validEmail(email1 + ''))
    if (!email1) {
      setError({ name: 'email', text: 'Email requerido' })
      return
    }
    if (!validEmail(email1 + '')) {
      setError({ name: 'email', text: 'Email inválido' })
      return
    }

    if (email1 !== email2) {
      setError({
        name: 'email',
        text: 'Los email no coinciden',
      })
      return
    }

    const pass1 = formData.get('pass')
    const pass2 = formData.get('passConfirm')
    if (!pass1) {
      setError({ name: 'pass', text: 'Contraseña requerida' })
      return
    }
    const passError = invalidPass(pass1 + '')
    if (passError) {
      setError({
        name: 'pass',
        text: passError,
      })
      return
    }
    if (pass1 !== pass2) {
      setError({
        name: 'pass',
        text: 'Las contraseñas no coinciden',
      })
      return
    }

    const data = Object.fromEntries(formData)
    console.log(data)
    setError({ name: undefined, text: undefined })
    // return
    target.reset()
    disposeFn()
    toast(`Usuario ${email1} creado correctamente`)
  }
  return { error, handleSubmit }
}
