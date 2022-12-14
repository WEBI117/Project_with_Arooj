import type { NextPage } from 'next'
import Head from 'next/head'
import Topbar from 'components/topbar/topbar'
import Footer from 'components/footer/footer'
import Contentcontainer from 'components/contentcontainer/contentcontainer'


const Home: NextPage = () => {
    var contentcontiners = ["New", "Trending", "Funky"]
    return (
        <div className="flex w-screen h-screen flex-col">
            <div className="h-14 w-full">
                <Topbar />
            </div>
            <div className="h-full w-full">
                <div className="flex-grow h-full w-full">
                    {/* list of content containers. */}
                    {
                        contentcontiners.map(heading => { return <Contentcontainer heading={heading} /> })
                    }
                </div>
            </div>

            <div className="h-14 w-full">
                <Footer />
            </div>
        </div>
    )
}

export default Home
