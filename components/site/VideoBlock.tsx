import React from 'react';

import { ReactElement } from 'react';

const VideoBlock = ({source, children}:{source: string, children?:ReactElement}) => {
	return (
		<div className="relative h-[900px] overflow-hidden items-center flex flex-col justify-center -mt-[--total-header-height]
			after:absolute after:inset-0 after:bg-bg-secondary/[.65]">
			<div className="h-full w-full top-0 left-0 absolute overflow-hidden">
				<video autoPlay loop className="absolute min-w-full min-h-full object-cover">
					<source src={source} type="video/mp4" />
				</video>
			</div>
			<div className="relative items-center flex main-padding z-10 h-full">
				{ children }
			</div>
		</div>
	);
};

export default VideoBlock;