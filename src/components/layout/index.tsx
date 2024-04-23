import { Grid, GridItem } from "@chakra-ui/react"
import Top from "../top"
import Footer from "../footer"

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props
    return (
        <>
            <Grid className='grid' templateColumns='1fr' templateRows='64px auto 64px' gap={3}>
                <GridItem colSpan={1} rowSpan={1}>
                    <Top />
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    {children}
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Footer />
                </GridItem>
            </Grid>
        </>
    )
}

export default Layout