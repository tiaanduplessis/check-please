import {check, required, pattern, exact, string} from './src'

const isValidFoo = check(
  exact('foo'),
  pattern(/foo/),
  required('Foo is required'),
  string('Foo should be string')
)

console.log(isValidFoo('foo').valid) // true
