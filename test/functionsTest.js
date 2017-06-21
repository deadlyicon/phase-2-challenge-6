
'use strict'
const assert = require('chai').assert
const app = require('../part-1/functions')
const weekday = require('../part-1/functions').weekday
// const snippet = require('../part-1/functions/').snippet
// const numProps = require('../part-1/functions/').numProps
// const filterBetween = require('../part-1/functions/').filterBetween


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

  })

})
