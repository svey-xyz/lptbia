import { object_Date } from "@/types";
import moment from 'moment-timezone';
import { ReactNode } from "react";

type displayDateSpecificity = "YYYY-MM-DD, HH:mm" | "YYYY-MM-DD" | "YYYY-MM" | "YYYY" | "YY-MM-DD" | "LL";

export function readableDate(data?: object_Date, overrideDisplayDateSpecificity?: displayDateSpecificity, endDate?: boolean): ReactNode {
	if (!data) return;

	const startDateText = data.startDate ? moment(data.startDate).tz('America/Toronto').format(overrideDisplayDateSpecificity ?? data.displayDateSpecificity) : ''

	const endDateText = data.endDate ? moment(data.endDate).tz('America/Toronto').format(overrideDisplayDateSpecificity ?? data.displayDateSpecificity) : ''

	const displayEndDate = endDateText && endDate
	return (
		<div>
			<span className="block">
				{startDateText} {displayEndDate ? ':' : '' }
			</span>
			{ displayEndDate && 
				<span className="block">
					{ endDateText }
				</span>
			}
		</div>
	);
}