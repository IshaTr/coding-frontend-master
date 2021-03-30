const faker = require('faker')

faker.locale = 'de'

const delimitedTypes = ['_', '.', '-', '']
const DEFAULT_ACCOUNT = 'default'
const PASSWORD = 'password'

const generateEmail = ({ firstName, lastName }) => {
  const delimiter =
    delimitedTypes[faker.random.number(delimitedTypes.length - 1)]
  const randomNumber = faker.random.number(100)

  return `${firstName}${delimiter}${lastName}${randomNumber}@${faker.internet.domainName()}`
}

class FakeDataGenerator {
  constructor(accountType = DEFAULT_ACCOUNT) {
    this.accountType = accountType
    this.timer = null
  }

  generateFakeUser = () => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const result = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: generateEmail({ firstName, lastName }),
      contactName: firstName + ' ' + lastName,
      password: PASSWORD,
      accountType: this.accountType,
      phoneNumber: faker.phone.phoneNumber(),
      brandingStreet:
        faker.address.streetName() + ' ' + faker.random.number(100),
    }

    while (
      /([äöüÄÖÜß]|[a-z0-9._%+-])+@[a-z0-9.-]+\.[a-z]{2,3}/.test(result.email)
    ) {
      result.email = generateEmail({ firstName, lastName })
    }

    return result
  }

  createIntervalBasedFakeUserGenerator = (cbFn, time) => {
    this.timer = setInterval(() => {
      cbFn(new FakeDataGenerator().generateFakeUser())
    }, time)
  }

  clearTimer = () => {
    return clearInterval(this.timer)
  }
}

module.exports = FakeDataGenerator
