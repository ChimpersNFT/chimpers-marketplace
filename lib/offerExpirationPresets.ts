import { DateTime } from 'luxon'

const expirationPresets = [
  {
    preset: 'oneHour',
    value: () =>
      DateTime.now().plus({ hours: 1 }).toMillis().toString().slice(0, -3),
    display: '1 Hour',
  },
  {
    preset: 'oneDay',
    value: () =>
      DateTime.now().plus({ days: 1 }).toMillis().toString().slice(0, -3),
    display: '1 Day',
  },
  {
    preset: 'threeDays',
    value: () =>
      DateTime.now().plus({ days: 3 }).toMillis().toString().slice(0, -3),
    display: '3 Days',
  },
  {
    preset: 'oneWeek',
    value: () =>
      DateTime.now().plus({ weeks: 1 }).toMillis().toString().slice(0, -3),
    display: '7 Days',
  },
  {
    preset: 'threeMonths',
    value: () =>
      DateTime.now().plus({ months: 3 }).toMillis().toString().slice(0, -3),
    display: '3 Months',
  },
  {
    preset: 'sixMonths',
    value: () =>
      DateTime.now().plus({ months: 6 }).toMillis().toString().slice(0, -3),
    display: '6 Months',
  },
  {
    preset: 'none',
    value: () => '0',
    display: 'None',
  },
]

export default expirationPresets
