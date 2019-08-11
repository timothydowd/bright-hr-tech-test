const { sortData } = require('../utils')
const { expect } = require('chai')
const deepFreeze = require('deep-freeze')


describe('sortData', () => {
    it('when given an empty array of data and a criteria returns an empty array', () => {
        const data = []
        const criteria = 'type'
        deepFreeze(data)
        deepFreeze(criteria)
        expect(sortData(criteria, data)).to.eql([]) 
    });
});