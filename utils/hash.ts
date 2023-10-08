const hash = (key: string) => key.length < 5 ? key : `${'*'.repeat(key.length - 4)}${key.slice(-4)}`

export default hash