import {TopNav, Breadcrumbs, Page, H1, H2, GridRow, GridCol, H3, Paragraph, UnorderedList, ListItem} from 'govuk-react';

function App() {
    return (
        <div className="App">
            <Page
                beforeChildren={
                    <Breadcrumbs>
                        <Breadcrumbs.Link href="/section">
                            Section
                        </Breadcrumbs.Link>
                        <Breadcrumbs.Link href="/section/sub-section">
                            Sub-section
                        </Breadcrumbs.Link>
                        Current page
                    </Breadcrumbs>
                }>

                <GridRow>
                    <GridCol setWidth='two-thirds'>
                        <H1>Service name goes here</H1>
                        <Paragraph>Use this service to:</Paragraph>
                        <UnorderedList>
                            <ListItem>1. A list</ListItem>
                        </UnorderedList>
                    </GridCol>
                    <GridCol setWidth='one-third'>
                        <H3>Subsection</H3>
                    </GridCol>
                </GridRow>

            </Page>
        </div>
    )
}

export default App

