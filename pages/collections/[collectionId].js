import React, { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Collection = () => {
    const router = useRouter()
    console.log(router.query)
    console.log(router.query.collectionId)
    return (
        <Link href='/'>
            <h2>
                {router.query.collectionId}
            </h2>
        </Link>
    )
}

export default Collection