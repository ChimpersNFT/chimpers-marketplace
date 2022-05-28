import { BigNumberish } from 'ethers'
import { formatBN } from 'lib/numbers'
import { FC } from 'react'

type Props = {
  amount: BigNumberish | null | undefined
  maximumFractionDigits?: number
  children?: React.ReactNode
}

const FormatCurrency: FC<Props> = ({
  amount,
  maximumFractionDigits = 4,
  children,
}) => {
  const value = formatBN(amount, maximumFractionDigits)

  return (
    <div className="inline-flex flex-none gap-1">
      {value !== '-' ? children : null}
      <span className="flex-grow">{value}</span>
    </div>
  )
}

export default FormatCurrency
