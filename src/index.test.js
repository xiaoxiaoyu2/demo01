const { isInArr, getIndex } = require('../src/index')
test('判断一个数是否在数组里test1', () => {
  expect(isInArr(3, [1, 2, 3])).toBe(true)
})

test('判断一个数是否在数组里test2', () => {
  expect(isInArr(3, [1, 2, 23])).toBe(false)
})

test('判断某个字符位置test1', () => {
  expect(getIndex('h', 'hello')).toBe(0)
})

test('判断某个字符位置test2', () => {
  expect(getIndex('o', 'hear')).toBe(-1)
})
