"use client";

import dynamic from "next/dynamic";
import { suspend } from "suspend-react";

const LiveQueryProvider = dynamic(() => import("next-sanity/preview"));
const UniqueKey = Symbol("@lib/sanity.client");

export default function PreviewProvider({
	children,
	token,
}: {
	children: React.ReactNode;
	token?: string;
}) {

	const { client } = suspend(() => import("@/lib/data/client"), [UniqueKey])
	if (!token) throw new TypeError("Missing token");

	return (
		<LiveQueryProvider client={client} token={token} logger={console}>
			{children}
		</LiveQueryProvider>
	);
}