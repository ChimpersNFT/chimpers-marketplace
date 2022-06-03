import { FC } from "react"

const BannedOnOpenSea: FC = () => {
  return (

    <div className="col-span-full md:col-span-4 lg:col-span-5 lg:col-start-2">
      <article className="col-span-full rounded-2xl border text-red-600 border-red bg-white p-6 dark:bg-[#0b131f]">
        Reported for suspicious activity on OpenSea
      </article>
    </div>
  )
}

export default BannedOnOpenSea;
