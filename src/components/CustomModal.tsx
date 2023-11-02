import { useRef } from 'react'
import { TextField } from '@mui/material'
import { useValidSubmit } from '../hooks/useFormValidate'

export interface ErrorType {
  name: 'name' | 'lastname' | 'pass' | 'email' | undefined
  text: string | undefined
}

interface Props {
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  show: boolean
  handleDispose: () => void
}

export function CustomModal({ handleDispose, show }: Props) {
  const { error, handleSubmit } = useValidSubmit({ disposeFn: handleDispose })
  const { name, text } = error

  const modalRef = useRef(null)
  const handle = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      handleDispose()
    }
  }

  return (
    <section
      ref={modalRef}
      className={`modal-container ${show ? 'active' : ''}`}
      onClick={handle}
    >
      <div className='modal'>
        <form onSubmit={handleSubmit}>
          <h2>Registro</h2>
          <div className='modal-content'>
            <TextField
              name='name'
              variant='outlined'
              size='small'
              label='Nombre:'
              margin='normal'
              autoComplete='no'
              error={name === 'name'}
            />
            <TextField
              name='lastname'
              variant='outlined'
              size='small'
              label='Apellido:'
              margin='normal'
              autoComplete='no'
              error={name === 'lastname'}
            />
          </div>
          <TextField
            name='email'
            type='email'
            variant='outlined'
            size='small'
            label='Email:'
            margin='normal'
            autoComplete='no'
            error={name === 'email'}
            fullWidth
          />
          <TextField
            name='emailConfirm'
            type='email'
            variant='outlined'
            size='small'
            label='Confirmar email:'
            margin='normal'
            autoComplete='no'
            error={name === 'email'}
            fullWidth
          />
          <div className='modal-content'>
            <TextField
              name='pass'
              type='password'
              variant='outlined'
              size='small'
              label='Contraseña:'
              margin='normal'
              error={name === 'pass'}
            />
            <TextField
              name='passConfirm'
              type='password'
              variant='outlined'
              size='small'
              label='Confirmar contraseña:'
              margin='normal'
              error={name === 'pass'}
            />
          </div>
          {name && text && <small className='error'>{text}</small>}
          <button className='primary'>Registrar</button>
        </form>
      </div>
    </section>
  )
}
