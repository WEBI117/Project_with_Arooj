import type { NextPage } from 'next'
import Head from 'next/head'
import Topbar from 'components/topbar/topbar'
import Footer from 'components/footer/footer'

const landing: NextPage = () => {
    return (
        <div className="w-screen h-screen">
            <Topbar />
            <Footer />
        </div>
    )
}

export default landing
