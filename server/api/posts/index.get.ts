export default defineEventHandler((event) => {

    const { amount } = getQuery(event)

    const posts = []

    for (let i = 0; i < Number(amount); i++) {
        posts.push({
            id: i,
            title: $faker.lorem.words(),
            body: $faker.lorem.paragraphs(),
            price: Math.random() * 100,
            rating: Math.random() * 5,
            author: $faker.person.fullName(),
            publishedDay: $faker.date.past(),
        })
    }

    return { posts }
})