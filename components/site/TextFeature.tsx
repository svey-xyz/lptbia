import React, { ReactNode } from 'react';

const TextFeature = ({title, caption, children}:{title: string, caption:string | undefined, children:ReactNode|undefined}) => {
	return (
		<div className="main-padding">
			<div className="max-w-prose-short text-accent flex flex-col py-12 gap-4">
				<span className="text-4xl font-bold">
					Welcome to {title}
				</span>
				{caption &&
					<span className="font-bold">
						{caption}
					</span>
				}
			</div>

		</div>
	);
};

export default TextFeature;