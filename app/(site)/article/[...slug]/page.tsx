import Pages from '@/components/Pages'
import { generateStaticSlugsForArticles } from '@/lib/server/generateStaticSlugs'

export async function generateStaticParams() {
	const staticSlugs = await generateStaticSlugsForArticles()
	return staticSlugs
}

type Props = {
	params: { slug: string }
}

const Page = ({ params }: Props) => {
	const { slug } = params

	return <Pages.ArticleRoute type={slug[0]} slug={slug[1]} />
}

export default Page