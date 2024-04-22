import { Analytics } from '@vercel/analytics/react';
import Header from '@components/site/Header'
import Footer from '@components/site/Footer'
import '@styles/site.globals.css'

import { Inter } from 'next/font/google'
import Head from '@site/head'
import { cookies, draftMode } from 'next/headers';

import { Metadata, ResolvingMetadata } from 'next';
import localFont from "next/font/local";
import { client } from '@sanity/lib/client';
import dynamic from 'next/dynamic';
import { loadSettings } from '@/sanity/lib/loadQuery';
// import { settings } from '@/data';


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
	const settings = await loadSettings()

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
			<body className='relative min-h-screen overflow-x-hidden'>
				<Header componentParams={componentParams} />
				<main className='min-h-full'>
					{ (preview && preview.token) ? (
						<PreviewProvider token={preview.token}>
							{children}
						</PreviewProvider>
					) : (
						children
					)}
				</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	) 
}



