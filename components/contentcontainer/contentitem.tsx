import React from 'react'
import Link from "next/link"

const contentitem = (props: { index: number, parentCallback: () => void }) => {
    return (
        <div className="w-1/3 h-full p-5">
            <Link href="/productinfo">
                <div className="h-full w-full flex justify-center items-center bg-cyan-500" onClick={() => props.parentCallback()}>
                    item {props.index}
                </div>
            </Link>
        </div>
    )
}

export default contentitem 
