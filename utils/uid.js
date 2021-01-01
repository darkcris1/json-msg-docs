export default function uid(length = 50) {
  const chars = 'abcdefghijklmopqrstnuvwxyz-1234567890'
  let result = ''
  for (let i = 0; i < length; i++) {
    const randomChars = chars[Math.floor(Math.random() * chars.length)]
    result += randomChars
  }
  return result
}
