
'use strict'
const assert = require('chai').assert
const app = require('../part-1/functions')
const weekday = require('../part-1/functions').weekday
const snippet = require('../part-1/functions').snippet
const numProps = require('../part-1/functions').numProps
const filterBetween = require('../part-1/functions').filterBetween


describe('Functions', () => {

  describe('Weekday', () => {

    it('should return "Thu" for Date(2017, 5, 15)', () => {
      let result = weekday(new Date (2017, 5, 15))
      assert.equal(result, 'Thu')
    })

    it('should return "Mon" for Date(2017, 5, 19)', () => {
      let result = weekday(new Date (2017, 5, 19))
      assert.equal(result, 'Mon')
    })

    it('should check for input validity', () => {
      let result = weekday(new Date())
      assert.equal(result, '')
    })

  })

  describe('Snippet', () => {

    it('should shorten a string to a given maxlength', () => {
      let result = snippet('My string', 7)
      assert.equal(result, 'My stri')
    })

    it('should check for input validity', () => {
      let result = snippet(arg1, arg2)
      assert.equal(result, '')
    })

  })

  describe('NumProps', () => {

    it('should return the number of properties of the passed object', () => {
      let result = numProps({
        prop1: "val1",
        prop2: "val2",
        prop3: "val3"
      })
      assert.equal(result, 3)
    })

    it('should check for input validity', () => {
      let result = numProps()
      assert.equal(result, '')
    })

  })

  describe('FilterBetween', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7]

    it('should return a filetered array [3, 4, 5, 6]', () => {
      let result = filterBetween(arr, 3, 6)
      assert.deepEqual(result, [3, 4, 5, 6])
    })

    it('should return a filetered array [5, 6, 7]', () => {
      let result = filterBetween(arr, 5, 10)
      assert.deepEqual(result, [5, 6, 7])
    })

    it('should check input validity', () => {
      let result = filterBetween()
      assert.equal(result, '')
    })

  })

})
