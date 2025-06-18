export function generateBonusCode(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const codeLength = 8
  let result = ''
  
  for (let i = 0; i < codeLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  
  return result
}

export function calculateBonusAmount(): number {
  // Fixed bonus amount: CHF 100 reserved for one month
  return 100
}

export function getBonusExpiryDate(): Date {
  // Bonus codes expire 1 month from creation
  const expiryDate = new Date()
  expiryDate.setMonth(expiryDate.getMonth() + 1)
  return expiryDate
}

export function isValidBonusCode(code: string): boolean {
  // Basic validation: 8 characters, alphanumeric
  const codeRegex = /^[A-Z0-9]{8}$/
  return codeRegex.test(code)
}