import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div>home</div>
            <Link to='/user'>User Page</Link>
            <Link to='/admin'>Admin Page</Link>
            <Link to='/hospital'>Hospital Page</Link>
        </>
    )
}
