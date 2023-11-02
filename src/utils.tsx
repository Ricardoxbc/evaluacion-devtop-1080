export const invalidName = (text: string) => /([0-9]|\s|[^a-zA-Z])/g.test(text)

export const validEmail = (text: string) =>
  /(\d|\w)+@\w{2,}\.([a-zA-Z]{2,5})$/g.test(text)

export const invalidPass = (text: string) => {
  if (text.length < 8) return 'La contraseña debe ser de al menos 8 caracteres'

  if (!/[A-Z]/g.test(text))
    return 'La contraseña debe incluir al menos una letra mayúscula'

  if (!/\d/g.test(text)) return 'La contraseña debe incluir al menos un número'

  if (!/[^A-Za-z0-9]/g.test(text))
    return 'La contraseña debe incluir al menos un caracter especial'

  return null
}
