import * as p from '../'

test('should be defined', () => {
  const methods = ['check', 'checkWrapper', 'bool', 'str', 'num', 'pattern']
  methods.forEach(methodsName => {
    expect(p[methodsName]).toBeDefined()
  })
})

test('should perform checks', () => {
  expect(p.check(p.bool())(true).valid).toBeTruthy()
  expect(p.check(p.str())('true').valid).toBeTruthy()
  expect(p.check(p.num())(5.55).valid).toBeTruthy()
  expect(p.check(p.int())(5).valid).toBeTruthy()
})

test('should compose checks', () => {
  expect(p.check(p.str(), p.exact('true', p.exists()))('true').valid).toBeTruthy()
})

test('should return message if invalid', () => {
  const msg = 'should exist'
  expect(p.check(p.exists(msg))('').message).toBe(msg)
})
