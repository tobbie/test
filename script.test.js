
const googleSearch = require('./script');

const dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
]

describe('googleSearch', () => {
    it('this is a test', () => {
        expect('hello').toBe('hello');
    })
    
    it('searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
    })
    
    it('works with undefined and null', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })
    
    it('it returns 3 items', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
        
    })
});

