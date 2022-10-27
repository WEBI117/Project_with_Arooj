import React from 'react'
import Contentitem from './contentitem'
const getitemlist = (callback: () => void) => {
    var itemlist = [];
    for (let i = 0; i < 3; i++) {
        itemlist.push(
            <Contentitem index={i + 1} parentCallback={callback} />
        )
    }
    return itemlist
}

const callback = () => {
    console.log("Hello")
}
const contentcontainer = (props: { heading: string }) => {
    var list = getitemlist(callback)
    return (
        <div className="h-1/5 w-full flex flex-col overflow-x-auto bg-black">
            <div className="text-white">
                {props.heading}
            </div>
            <div className="flex h-full w-full">
                {list}
            </div>
        </div>
    )
}

export default contentcontainer
