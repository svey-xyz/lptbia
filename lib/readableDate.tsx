import { dateData } from "@lib/data/types";
import moment from 'moment-timezone';

type displayDateSpecificity = "YYYY-MM-DD, HH:mm" | "YYYY-MM-DD" | "YYYY-MM" | "YYYY" | "YY-MM-DD" | "LL";

export function readableDate(data?: dateData, overrideDisplayDateSpecificity?: displayDateSpecificity): string | undefined {
	if (!data) return;

	const startDateText = data.startDate ? moment(data.startDate).tz('America/Toronto').format(overrideDisplayDateSpecificity ?? data.displayDateSpecificity) : ''

	const endDateText = data.endDate ? moment(data.endDate).tz('America/Toronto').format(overrideDisplayDateSpecificity ?? data.displayDateSpecificity) : ''

	let date = startDateText;
	date += endDateText ? ` : ${endDateText}` : ''

	return date;
}