import { block } from '@/types';
import React from 'react';

export const Standard = ({data}:{data: block}) => {
	return (
		<div>
			Block not found: { data._type }
		</div>
	);
};

export default Standard;