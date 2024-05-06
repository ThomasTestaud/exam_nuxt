export default defineEventHandler((event) => {

    const { amount } = getQuery(event)

    const persons = []

    for (let i = 0; i < Number(amount); i++) {
        persons.push({
            fullname: $faker.person.fullName(),
            bio: $faker.person.bio(),
            gender: $faker.person.gender(),
            email: $faker.internet.email(),
            zodiacSign: $faker.person.zodiacSign(),
            jobarea: $faker.person.jobArea(),
        })
    }

    return { persons }
})