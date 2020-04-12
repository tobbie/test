const fetch = require('node-fetch');
const puppies = require('./script2');

describe('test puppies api call', () => {

    it('calls puppies api', () => {
        expect.assertions(4)
       return puppies.getPuppiesAsync(fetch).then(data => {
            expect(data.title).toEqual('Recipe Puppy')
            expect(data.status).toEqual(200)
            expect(data.results.length).toBeGreaterThan(5)
            expect(data.version).toEqual(0.1)
      
        });
   })
})

