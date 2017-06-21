import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Weekday from 'functions'

chai.use(chaiChange)

describe('Weekday', () => {
  'use strict'

  it('is a function', () => {
      expect(Weekday).to.be.a('function')
  })

})
