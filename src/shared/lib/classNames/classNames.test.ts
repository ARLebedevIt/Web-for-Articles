import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('testClass')).toBe('testClass')
  })

  test('with several params of fn', () => {
    const result = 'className test1 test2'
    expect(classNames('className', {}, ['test1', 'test2'])).toBe(result)
  })

  test('with several params and mods', () => {
    const result = 'className test1 test2 hovered scrollable'
    expect(classNames(
      'className',
      { hovered: true, scrollable: true },
      ['test1', 'test2'],
    )).toBe(result)
  })

  test('with several params and mods with false', () => {
    const result = 'className test1 test2 hovered'
    expect(classNames(
      'className',
      { hovered: true, scrollable: false },
      ['test1', 'test2'],
    )).toBe(result)
  })

  test('with several params and mods with undefined', () => {
    const result = 'className test1 test2 hovered'
    expect(classNames(
      'className',
      { hovered: true, scrollable: undefined },
      ['test1', 'test2'],
    )).toBe(result)
  })
})
