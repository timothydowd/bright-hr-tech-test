const { sortData } = require('../utils')
const { expect } = require('chai')
const deepFreeze = require('deep-freeze')


describe('sortData', () => {
    it('when given an empty array of data and a criteria of "type" returns an empty array', () => {
        const data = []
        const criteria = 'type'
        deepFreeze(data)
        deepFreeze(criteria)
        expect(sortData(criteria, data)).to.eql([]) 
    });

    it('when given an array of data containing 1 object and a criteria of "type", returns the array with 1 object', () => {
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

    it('when givven ana array of data containing 2 unordered objects by a criteria of type, returns an array with the objecs in order of type', () => {
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


});

