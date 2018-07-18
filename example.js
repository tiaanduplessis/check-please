import {check, exists, pattern, exact, str} from './src'

const isValidFoo = check(
  exact('foo'),
  pattern(/foo/),
  exists('Email is required'),
  str('Email should be string')
)

console.log(isValidFoo('foo').valid) // true