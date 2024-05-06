export default defineEventHandler((event) => {

    const { amount } = getQuery(event)

    const books = []
    const categorys = ['Sport', 'History', 'Science', 'Art', 'Music', 'Literature', 'Politics', 'Philosophy', 'Religion', 'Economics', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Geography', 'Astronomy', 'Psychology', 'Sociology', 'Anthropology', 'Linguistics', 'Law', 'Medicine', 'Engineering', 'Computer Science', 'Agriculture', 'Architecture', 'Business', 'Education', 'Environmental Studies', 'Library Science', 'Military Science', 'Public Administration', 'Transportation', 'Criminal Justice', 'Journalism', 'Communication', 'Film', 'Television', 'Theatre', 'Dance', 'Visual Arts', 'Design', 'Fashion', 'Culinary Arts', 'Music', 'Literature', 'Performing Arts', 'Religion', 'Philosophy', 'History', 'Languages', 'Linguistics', 'Literature', 'Mathematics', 'Science', 'Social Sciences', 'Art', 'Music', 'Literature', 'Politics', 'Philosophy', 'Religion', 'Economics', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Geography', 'Astronomy', 'Psychology', 'Sociology', 'Anthropology', 'Linguistics', 'Law', 'Medicine', 'Engineering', 'Computer Science', 'Agriculture', 'Architecture', 'Business', 'Education', 'Environmental Studies', 'Library Science', 'Military Science', 'Public Administration', 'Transportation', 'Criminal Justice', 'Journalism', 'Communication', 'Film', 'Television', 'Theatre', 'Dance', 'Visual Arts', 'Design', 'Fashion', 'Culinary Arts', 'Music', 'Literature', 'Performing Arts', 'Religion', 'Philosophy', 'History', 'Languages', 'Linguistics', 'Literature', 'Mathematics', 'Science', 'Social Sciences', 'Art', 'Music', 'Literature', 'Politics', 'Philosophy', 'Religion', 'Economics', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Geography', 'Astronomy', 'Psychology', 'Sociology', 'Anthropology', 'Linguistics', 'Law', 'Medicine', 'Engineering', 'Computer Science',]

    for (let i = 0; i < Number(amount); i++) {
        books.push({
            id: i,
            title: $faker.lorem.words(),
            rating: Math.random() * 5,
            author: $faker.person.fullName(),
            category: categorys[Math.floor(Math.random() * categorys.length)],
        })
    }

    return { books }
})