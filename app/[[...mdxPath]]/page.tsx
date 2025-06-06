import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'


type Props = {
    params: Promise<Params>
}

type Params = {
    mdxPath: string[]
}

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: Props) {
    const params = await props.params
    const { metadata } = await importPage(params.mdxPath)
    return metadata
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props: Props) {
    const params = await props.params
    const result = await importPage(params.mdxPath)
    const { default: MDXContent, toc, metadata } = result
    return (
        <Wrapper toc={toc} metadata={metadata}>
            <MDXContent {...props} params={params} />
        </Wrapper>
    )
}