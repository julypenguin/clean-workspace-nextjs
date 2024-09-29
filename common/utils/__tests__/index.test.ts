import { describe, expect, test } from '@jest/globals'
import { copyText, createUrl, createUUID, formatThousandths, getDevice, getUserAgent, parseJson, truncateToDecimals } from '../'

describe('Common', () => {
  /** getUserAgent */
  test('getUserAgent', () => {
    expect(getUserAgent()).not.toEqual('')
  })

  /** getDevice */
  test('getDevice', () => {
    const agents = {
      Android: 'Mozilla/5.0 (Linux; Android 11; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.181 Mobile Safari/537.36',
      iOS: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
      PC: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    }
    Object.keys(agents).forEach((key) => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: agents[key as keyof typeof agents],
        writable: true,
        configurable: true,
      })
      expect(getDevice()).toEqual(key)
    })
  })

  /** copyText */
  test('copyText', () => {
    expect(copyText('不可能複製成功')).toEqual(false)
  })

  /** createUrl */
  test('createUrl', () => {
    expect(createUrl('')).toEqual(undefined)
    expect(createUrl('/path')).toEqual(undefined)
    expect(createUrl('http://localhost:3000')).toBeInstanceOf(URL)
    expect(createUrl('/path', 'http://localhost:3000')).toBeInstanceOf(URL)
  })

  /** createUUID */
  test('createUUID', () => {
    for (let i = 0; i < 8; i++) {
      const uuid = createUUID()
      const uuidRegex = /^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/i
      expect(uuid).toMatch(uuidRegex)
    }
  })

  /** parseJson */
  test('parseJson', () => {
    expect(parseJson('{}')).toEqual({})
    expect(parseJson('')).toBe(undefined)
    expect(parseJson('', { abc: 123 })).toEqual({ abc: 123 })
    expect(parseJson('{"abc":456}', { abc: 123 })).toEqual({ abc: 456 })
    expect(parseJson('[]')).toEqual([])
    expect(parseJson('[{"abc":123}]')).toEqual([{ abc: 123 }])
  })

  /** truncateToDecimals */
  test('truncateToDecimals', () => {
    expect(truncateToDecimals(10, 2, false)).toBe('10.00')
    expect(truncateToDecimals(10.121999)).toBe('10.12')
    expect(truncateToDecimals(10.129)).toBe('10.12')
    expect(truncateToDecimals(999.999, 3)).toBe('999.999')
    expect(truncateToDecimals(999.99, 3, false)).toBe('999.990')
    expect(truncateToDecimals(999, 3)).toBe('999')
    expect(truncateToDecimals(999, 3, false)).toBe('999.000')
    expect(truncateToDecimals(0, 2)).toBe('0')
    expect(truncateToDecimals(0, 2, false)).toBe('0.00')
    expect(truncateToDecimals(0, 8, false)).toBe('0.00000000')
    expect(truncateToDecimals(-10.123, 2)).toBe('-10.12')
    expect(truncateToDecimals(-10.129, 2)).toBe('-10.12')
    expect(truncateToDecimals(-10.0, 4, false)).toBe('-10.0000')
    expect(truncateToDecimals(-999.999, 3)).toBe('-999.999')
    expect(truncateToDecimals(0.000123, 6)).toBe('0.000123')
    expect(truncateToDecimals(0.000123, 2)).toBe('0')
    expect(truncateToDecimals(0.000123, 2, false)).toBe('0.00')
    expect(truncateToDecimals(123456789.987654, 2)).toBe('123456789.98')
    expect(truncateToDecimals(1.2345e5, 2)).toBe('123450')
    expect(truncateToDecimals('123.4567', 3)).toBe('123.456')
    expect(truncateToDecimals('123.4567', 3, false)).toBe('123.456')
    expect(truncateToDecimals('999.999', 3, false)).toBe('999.999')
    expect(truncateToDecimals(12345, 0)).toBe('12345')
    expect(truncateToDecimals(12345.6789, 0)).toBe('12345')
    expect(truncateToDecimals(214000000000.6789, 2)).toBe('214000000000.67')
    expect(truncateToDecimals(-214000000000.6789, 2)).toBe('-214000000000.67')
    expect(truncateToDecimals(-214000.9999999999, 8)).toBe('-214000.99999999')
  })

  /** formatThousandths */
  test('formatThousandths', () => {
    expect(formatThousandths(0.0)).toBe('0')
    expect(formatThousandths(0.99, 2)).toBe('0.99')
    expect(formatThousandths(0.9, 2, false)).toBe('0.90')
    expect(formatThousandths(0, 8, false)).toBe('0.00000000')
    expect(formatThousandths(999.0, 2, false)).toBe('999.00')
    expect(formatThousandths(999.0000199, 5, false)).toBe('999.00001')
    expect(formatThousandths(1999)).toBe('1,999')
    expect(formatThousandths(1999999)).toBe('1,999,999')
    expect(formatThousandths(1999999, 2, false)).toBe('1,999,999.00')
    expect(formatThousandths(1999999.99, 2)).toBe('1,999,999.99')
    expect(formatThousandths(1999999.9, 2)).toBe('1,999,999.9')
    expect(formatThousandths(214000000000)).toBe('214,000,000,000')
    expect(formatThousandths(-214000000000)).toBe('-214,000,000,000')
    expect(formatThousandths(-1000.12345678, 2)).toBe('-1,000.12')
    expect(formatThousandths(-1000.12345678, 4)).toBe('-1,000.1234')
    // round
    expect(formatThousandths(0.004, 2, false, 'round')).toBe('0.00')
    expect(formatThousandths(0.004, 2, true, 'round')).toBe('0')
    expect(formatThousandths(0.005, 2, false, 'round')).toBe('0.01')
    expect(formatThousandths(0.005, 1, false, 'round')).toBe('0.0')
    expect(formatThousandths(99999.5, 0, false, 'round')).toBe('100,000')
    expect(formatThousandths(99999.5, 1, false, 'round')).toBe('99,999.5')
    expect(formatThousandths(99999.5, 2, false, 'round')).toBe('99,999.50')
    expect(formatThousandths(-99999.1, 0, false, 'round')).toBe('-99,999')
    expect(formatThousandths(-99999.6, 0, false, 'round')).toBe('-100,000')
    // floor
    expect(formatThousandths(0.004, 2, false, 'floor')).toBe('0.00')
    expect(formatThousandths(0.004, 2, true, 'floor')).toBe('0')
    expect(formatThousandths(0.004, 0, true, 'floor')).toBe('0')
    expect(formatThousandths(99999.1, 0, true, 'floor')).toBe('99,999')
    expect(formatThousandths(99999.1, 2, false, 'floor')).toBe('99,999.10')
    expect(formatThousandths(99999.1, 2, true, 'floor')).toBe('99,999.1')
    expect(formatThousandths(-99999.1, 0, false, 'floor')).toBe('-100,000')
    expect(formatThousandths(-99999.1, 2, true, 'floor')).toBe('-99,999.1')
    // ceil
    expect(formatThousandths(0.0, 0, true, 'ceil')).toBe('0')
    expect(formatThousandths(0.01, 2, false, 'ceil')).toBe('0.01')
    expect(formatThousandths(0.01, 2, true, 'ceil')).toBe('0.01')
    expect(formatThousandths(0, 0, false, 'ceil')).toBe('0')
    expect(formatThousandths(99999.1, 0, true, 'ceil')).toBe('100,000')
    expect(formatThousandths(99999.1, 2, false, 'ceil')).toBe('99,999.10')
    expect(formatThousandths(99999.1, 2, true, 'ceil')).toBe('99,999.1')
    expect(formatThousandths(99999.1, 2, true, 'ceil')).toBe('99,999.1')
    expect(formatThousandths(99999.1, 2, true, 'ceil')).toBe('99,999.1')
    expect(formatThousandths(-0.0, 0, true, 'ceil')).toBe('0')
    expect(formatThousandths(-0.01, 2, false, 'ceil')).toBe('-0.01')
    expect(formatThousandths(-0.01, 2, true, 'ceil')).toBe('-0.01')
    expect(formatThousandths(-0, 0, false, 'ceil')).toBe('0')
    expect(formatThousandths(-99999.1, 0, true, 'ceil')).toBe('-99,999')
    expect(formatThousandths(-99999.1, 2, false, 'ceil')).toBe('-99,999.10')
  })
})
