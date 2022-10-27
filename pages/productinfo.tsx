import type { NextPage } from 'next'
import Topbar from 'components/topbar/topbar'
import Footer from 'components/footer/footer'
import Contentcontainer from 'components/contentcontainer/contentcontainer'


const productinfo: NextPage = () => {
    var contentcontiners = ["Items", "Similar", "Other stuff by.."]
    return (
        <div className="flex w-screen h-screen flex-col">
            <div className="h-14 w-full">
                <Topbar />
            </div>
            <div className="h-full w-full">
                <div className="flex-grow h-full w-full">
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

export default productinfo
