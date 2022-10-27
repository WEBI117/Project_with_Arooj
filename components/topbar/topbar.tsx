import React from 'react'
import Menuitem from './menuitem'

const topbar = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex items-center justify-start bg-indigo-500">
                <div className="text-lg font-bold text-white pl-5">
                    wooj.com
                </div>
            </div>
        </div>
    )
}

export default topbar
