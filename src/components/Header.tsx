import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
       
            <Link href='/en'>English</Link>
            <Link href='/ar'>Arabic</Link>

    </div>
  )
}

export default Header