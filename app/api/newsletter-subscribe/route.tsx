import { mailchimpApiKey, mailchimpDatacenter } from "@/lib/env";
import { NextResponse } from "next/server";

type Payload = {
	email: string
	audienceID: string;
}

export async function POST(req: Request) {

	const data: Payload = await req.json()
	if (!data.audienceID) return NextResponse.json({ error: 'No audience ID provided' }, { status: 401 });
	if (!data.email) return NextResponse.json({ error: 'No email provided' }, { status: 401 });


	try {
		
		const signupResponse = await fetch(
			`https://${mailchimpDatacenter}.api.mailchimp.com/3.0/lists/${data.audienceID}/members`,

			{
				body: JSON.stringify({
					email_address: data.email,
					status: "subscribe"
				}),
				headers: {
					Authorization: `apikey ${mailchimpApiKey}`,
					"Content-Type": "application/json",
				},
				method: "POST",
			}
		);

		const response = signupResponse.ok ? NextResponse.json({}, { status: 200 }) : NextResponse.json({error: 'Something went wrong signing you up for the newsletter!'}, { status: 400 })

		return response
	} catch (error) {
		return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 500 });
	}
}