const { sortData } = require('../utils')
const { expect } = require('chai')
const deepFreeze = require('deep-freeze')
const testData = require('../data/testData.json')
const chai = require('chai')
chai.use(require('chai-sorted'))


describe('sortData', () => {
    it('1 - when given an empty array of data and a criteria of "type" returns an empty array', () => {
        const data = []
        const criteria = 'type'
        deepFreeze(data)
        deepFreeze(criteria)
        expect(sortData(criteria, data)).to.eql([]) 
    });

    it('2 - when given an array of data containing 1 object and a criteria of "type", returns the array with 1 object', () => {
    const data = [
        {
            "type": "pdf",
            "name": "Employee Handbook",
            "added": "2017-01-06"
        }
    ]
    const criteria = 'type'
    deepFreeze(data)
    deepFreeze(criteria)
    expect(sortData(criteria, data)).to.eql(data)
    });

    it('3 - when given an array of data containing 2 unordered objects by a criteria of type, returns an array with the objecs in order of type', () => {
        const data = [
            {
                "type": "pdf",
                "name": "Employee Handbook",
                "added": "2017-01-06"
            },
            {
                "type": "csv",
                "name": "Cost centres",
                "added": "2016-08-12"
            }
        ]
        const criteria = 'type'
        const expected = [
            {
                "type": "csv",
                "name": "Cost centres",
                "added": "2016-08-12"
            },
            {
                "type": "pdf",
                "name": "Employee Handbook",
                "added": "2017-01-06"
           }
        ]
        deepFreeze(data)
        deepFreeze(criteria)
        expect(sortData(criteria, data)).to.eql(expected)
    });

    it('4 - when given an array of data containing a number of objects, and a criteria of type, returns an array with the objects in order of type', () => {
        const data = testData
        const criteria = 'type'
        deepFreeze(data)
        deepFreeze(criteria)
        const sortedTypes = sortData(criteria, data).map( item => {
            return item[criteria]
        })
        console.log('4 - sortedTypes: ',sortedTypes)
        expect(sortedTypes).to.be.sorted()
    });


});

