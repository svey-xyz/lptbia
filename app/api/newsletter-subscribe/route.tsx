import { mailchimpApiKey, mailchimpDatacenter } from "@/lib/env";
import { NextResponse } from "next/server";
import mailchimp, { ErrorResponse } from "@mailchimp/mailchimp_marketing"
import { json } from "stream/consumers";

type Payload = {
	email: string
	audienceID: string;
}

export async function POST(req: Request) {

	const data: Payload = await req.json()
	if (!data.audienceID) return NextResponse.json({ message: 'No audience ID provided' }, { status: 401 });
	if (!data.email) return NextResponse.json({ message: 'No email provided' }, { status: 401 });

	try {

		mailchimp.setConfig({
			apiKey: mailchimpApiKey,
			server: mailchimpDatacenter
		})

		const signupResponse = await mailchimp.lists.addListMember(data.audienceID, {
			email_address: data.email,
			status: "pending",
		});
		
		// const signupResponse = await fetch(
		// 	`https://${mailchimpDatacenter}.api.mailchimp.com/3.0/lists/${data.audienceID}/members`,

		// 	{
		// 		body: JSON.stringify({
		// 			email_address: data.email,
		// 			status: "subscribe"
		// 		}),
		// 		headers: {
		// 			Authorization: `apikey ${mailchimpApiKey}`,
		// 			"Content-Type": "application/json",
		// 		},
		// 		method: "POST",
		// 	}
		// );
		// console.log(`signupResponse: `, signupResponse)

		console.log(signupResponse)

		// const response = signupResponse ?
		// 	NextResponse.json({message: 'Successfully subscribed!'}, { status: 200 }) :
		// 	NextResponse.json({ message: 'Something went wrong signing you up for the newsletter!'}, { status: 400 })

		return NextResponse.json({ message: 'Successfully subscribed!', data: signupResponse }, { status: 200 })
	} catch (error: unknown) {
		const mailchimpError = getMailchimpError(error);
		if (mailchimpError) {
			const customMessage = mailchimpError.title == "Member Exists" ? "Already subscribed!" : null
			return NextResponse.json({ message: customMessage || mailchimpError.detail || "Mailchimp error occurred.", data: error }, { status: 400 })
		}

		return NextResponse.json({ message: "An unexpected error occurred.", data: error }, { status: 400 })
	}
}

function getMailchimpError(error: unknown): mailchimp.ErrorResponse | null {
	if (
		error &&
		typeof error === "object" &&
		"response" in error &&
		error.response &&
		typeof error.response === "object" &&
		"body" in error.response
	) {
		return (error.response as any).body as mailchimp.ErrorResponse;
	}
	return null;
}