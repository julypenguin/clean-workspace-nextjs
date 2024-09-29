/**
 * 秒數轉時間物件
 */
export const getTimeDataBySeconds = (
  sec: number | string, // 總秒數
  normal = false, // 是否要正常時間化，hh 不會超過 24, mm ss 不會超過 60
): {
  value: number // 剩餘秒數
  DDhhmmss: string // 格式化字串 00:00:00:00 依照 normal 選項決定突破值
  hhmmss: string // 格式化字串 00:00:00 依照 normal 選項決定突破值
  mmss: string // 格式化字串 00:00 依照 normal 選項決定突破值
  day: number // 日
  hour: number // 時
  minute: number // 分
  second: number // 秒
} => {
  const value = Math.max(0, Number(sec))
  const day = Math.floor(value / 86400)
  const hour = Math.floor((value % 86400) / 3600)
  const minute = Math.floor((value % 3600) / 60)
  const second = Math.floor(value % 60)
  const DD = String(day).padStart(2, '0')
  const hh = String(hour).padStart(2, '0')
  const mm = String(minute).padStart(2, '0')
  const ss = String(second).padStart(2, '0')
  return {
    value,
    DDhhmmss: `${DD}:${hh}:${mm}:${ss}`,
    hhmmss: normal ? `${hh}:${mm}:${ss}` : `${String(hour + day * 24).padStart(2, '0')}:${mm}:${ss}`,
    mmss: normal ? `${mm}:${ss}` : `${String(minute + (hour + day * 24) * 60).padStart(2, '0')}:${ss}`,
    day,
    hour,
    minute,
    second,
  }
}
