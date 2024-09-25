import React, { ReactNode } from 'react';

export const Standard = ({children, index}:{children:ReactNode, index: number}) => {
	return (
		<div>
			{ children }
		</div>
	);
};

export default Standard
