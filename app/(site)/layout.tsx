import { Analytics } from '@vercel/analytics/react';
import Header from '@components/site/Header'
import '@styles/site.globals.css'

import { Inter } from 'next/font/google'
import Head from '@site/head'
import { cookies, draftMode } from 'next/headers';

// import PreviewProvider from '@components/sanity/PreviewProvider';
import { Metadata, ResolvingMetadata } from 'next';
import localFont from "next/font/local";
import { client } from '@lib/data/client';
import ThemeHandler from '@components/site/Theme'
import dynamic from 'next/dynamic';
import Navigation from '@components/site/Navigation';
import { settings } from '@/lib/data/data';

const PreviewProvider = dynamic(() => import('@components/site/PreviewProvider'))

const inter = Inter({ subsets: ['latin'] })
const firaCode = localFont({
	src: "../../public/fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
	variable: "--font-montserrat",
});

export async function generateMetadata(
	{ params }: any,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const preview = draftMode().isEnabled ? { token: process.env.SANITY_API_READ_TOKEN } : undefined

	const titleTemplate = `${settings.title} | %s`

	return {
		title: {
			template: titleTemplate,
			default: settings.title,
		},
		description: "Generic description.",
		keywords: ['Next.js', 'React', 'JavaScript'],
		// authors: [{ name: 'svey', url: 'https://svey.xyz' }],
		// creator: 'Hayden Soule',
		// publisher: 'Hayden Soule',
	}
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode,
}) {

	const preview = draftMode().isEnabled ? { token: process.env.SANITY_API_READ_TOKEN } : undefined
	const componentParams = {
		preview: preview,
		client: client
	}

	const headerHeightString = preview ?
		'[--total-header-height:calc(var(--header-height)+var(--preview-header-height))]' :
		'[--total-header-height:var(--header-height)]'

	let documentClasses = `${inter.className} ${firaCode.variable} ${headerHeightString}`
	
	return (
		<html lang="en" className={documentClasses} suppressHydrationWarning>
			<Head />
			<body className='relative min-h-screen overflow-x-hidden bg-gradient-to-b from-bg-primary to-bg-secondary from-10% to-80% duration-300 transition-all'>
				<ThemeHandler>
					<Header componentParams={componentParams} />
					<main className='pb-24 min-h-full'>
						{ (preview && preview.token) ? (
							<PreviewProvider token={preview.token}>
								{children}
							</PreviewProvider>
						) : (
							children
						)}
						<Navigation />
					</main>
				</ThemeHandler>
				<Analytics />
			</body>
		</html>
	) 
}



