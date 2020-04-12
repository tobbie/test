const googleDatabase = [
    'cats.com',
    'souprecipeis.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavourtitecats.com'
]

const googleSearch = (searchTerm, db) => {
       const matches = db.filter(item =>
         {
             return item.includes(searchTerm)
         }
     )

     return matches.length > 3 ? matches.slice(0, 3) : matches;
}



module.exports = googleSearch;