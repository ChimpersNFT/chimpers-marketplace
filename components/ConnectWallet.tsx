import { FC, useContext } from 'react'
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'
import EthAccount from './EthAccount'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { HiOutlineLogout } from 'react-icons/hi'
import FormatEth from './FormatEth'
import ConnectWalletModal from './ConnectWalletModal'
import { GlobalContext } from 'context/GlobalState'
import itcher from './ThemeSwitcher'

const ConnectWallet: FC = () => {
  const { data: account, isLoading } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: account?.address })
  const { data: ensName } = useEnsName({ address: account?.address })
  const { connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const wallet = connectors[0]
  const { dispatch } = useContext(GlobalContext)

  if (isLoading) return null

  if (!account) return <ConnectWalletModal />

  return (
    <div className="flex gap-2">
      {account && (
        <Link href={`/address/${account.address}`}>
          <a className="border flex cursor-pointer items-center p-4 outline-none transition hover:bg-neutral-100 hover:text-[#1F2937]  dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-600">
            My Chimpers 
          </a>
        </Link>
      )}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="btn-primary-outline ml-auto rounded-full border-transparent bg-gray-100 normal-case dark:border-neutral-600 dark:bg-neutral-900 dark:ring-primary-900 dark:focus:ring-4">
          <EthAccount
            address={account.address}
            ens={{
              avatar: ensAvatar,
              name: ensName,
            }}
          />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          align="end"
          sideOffset={6}
          className="space-y-1 px-1.5 py-2 radix-side-bottom:animate-slide-down bg-transparent"
        >
          <div className="group bg-white flex w-full items-center justify-between rounded px-4 py-3 outline-none transition dark:border-white dark:bg-[#0b131f]">
            <span>Balance </span>
            <span>
              {account.address && <Balance address={account.address} />}
            </span>
          </div>
          <DropdownMenu.Item asChild>
            <button
              key={wallet.id}
              onClick={() => {
                dispatch({ type: 'CONNECT_WALLET', payload: false })
                disconnect()
              }}
              className="group bg-white flex w-full cursor-pointer items-center justify-between gap-3 rounded px-4 py-3 outline-none transition hover:bg-neutral-100  dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:border-white dark:bg-[#0b131f]"
            >
              <span>Disconnect</span>
              <HiOutlineLogout className="h-6 w-7" />
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

export default ConnectWallet

type Props = {
  address: string
}

export const Balance: FC<Props> = ({ address }) => {
  const { data: balance } = useBalance({ addressOrName: address })
  return <FormatEth amount={balance?.value} />
}
