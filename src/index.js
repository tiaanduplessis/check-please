import type from '@tiaanduplessis/type'

/**
 * Apply multiple validation functions to a value
 * @param {Function} funcs Validation function to apply
 *
 * @example
 * const isRequired = check(exists("It should exist"))
 * isRequired("value")
 */
export function check (...funcs) {
  return val => {
    for (let i = 0; i < funcs.length; i++) {
      const current = funcs[i]

      if (type.isFunc(current)) {
        const result = current(val)
        if (!result.valid) {
          return result
        }
      }
    }
    return { valid: true, message: '' }
  }
}

/**
 * Helper wrapper for creating validation function
 * @param {Function} func Function used for validation
 *
 * @example
 *
 * function longerThanFive(msg) {
 *  return checkWrapper(val => val.length > 5)(msg)
 * }
 */
export function checkWrapper (func = () => true) {
  return (msg = '') => {
    return val => {
      const result = func(val)
      return {
        valid: result,
        message: result ? '' : msg
      }
    }
  }
}

/**
 * Check if value exists
 *
 * @param {String=} msg Message when validation fails
 *
 * @returns {Function}
 */
export function exists (msg) {
  return checkWrapper(val => !type.isEmpty(val))(msg)
}

/**
 * Check if value does not exist
 *
 * @param {String=} msg Message when validation fails
 *
 * @returns {Function}
 */
export function empty (msg) {
  return checkWrapper(type.isEmpty)(msg)
}

/**
 * Check if value is Boolean
 *
 * @param {String=} msg Message when validation fails
 *
 * @returns {Function}
 */
export function bool (msg) {
  return checkWrapper(type.isBool)(msg)
}

/**
 * Check if value is Integer
 *
 * @param {String=} msg Message when validation fails
 *
 * @returns {Function}
 */
export function int (msg) {
  return checkWrapper(val => type.isNum(val) && Number.isInteger(val))(msg)
}

/**
 * Check if value is Number
 *
 * @param {String=} msg Message when validation fails
 *
 * @returns {Function}
 */
export function num (msg) {
  return checkWrapper(type.isNum)(msg)
}

/**
 * Check if value is String
 *
 * @param {String=} msg Message when validation fails
 *
 * @returns {Function}
 */
export function str (msg) {
  return checkWrapper(type.isStr)(msg)
}

/**
 * Check if value matches given regex pattern
 *
 * @param {RegExp} pattern
 * @param {String=} msg Message when validation fails
 *
 * @returns {Function}
 *
 * @example
 *
 * check(pattern(/foo/), exists())
 */
export function pattern (pattern, msg) {
  return checkWrapper(val => pattern && val && pattern.test(val))(msg)
}

/**
 *
 * @param {*} val
 * @param {*} msg
 */
export function exact (val, msg) {
  return checkWrapper(cur => val && cur && val === cur)(msg)
}
