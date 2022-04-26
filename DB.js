const d1 = new Date()
const d2 = new Date()
const { v4: uuidv4 } = require('uuid')

const db = {
  posts: [
    {
      id: uuidv4(),
      date: `${d1.toDateString()} ${d1.toLocaleTimeString()}`,
      username: 'Boka',
      message: 'Legendary singer',
      image: 'https://upload.wikimedia.org/wikipedia/ru/e/e4/%D0%94%D0%B0%D0%B2%D0%B8%D0%B4%D1%8F%D0%BD_%D0%91%D0%BE%D1%80%D0%B8%D1%81_%D0%90%D1%80%D0%BA%D0%B0%D0%B4%D1%8C%D0%B5%D0%B2%D0%B8%D1%87.jpg',
      rating: 0,
    },
    {
      id: uuidv4(),
      date: `${d2.toDateString()} ${d2.toLocaleTimeString()}`,
      username: 'Joka',
      message: 'Popular singer',
      image: 'https://a.allegroimg.com/original/118b82/e6d33e5141018a6d124e18b7d9d9/MASKA-JOKER-2019-HALLOWEN-JOAQUIN-PHOENIX-HIT',
      rating: 0,
    },
  ],
}

module.exports = {
  db,
}
