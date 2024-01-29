'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
const ShowRoute = () => {
    const pathname = usePathname()
  return (
    <Link href={{pathname}}>
    <div className="text-black">
      {pathname}
    </div>
    </Link>
  )
}

export default ShowRoute
