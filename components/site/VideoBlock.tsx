import React from 'react';

import { ReactElement } from 'react';

const VideoBlock = ({source, children}:{source: string, children?:ReactElement}) => {
	return (
		<div className="relative h-[900px] overflow-hidden pt-[400px] pb-[100px] items-center flex flex-col justify-center">
			<div className="h-full w-full top-0 left-0 absolute overflow-hidden">
				<video autoPlay loop className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full h-auto">
					<source src={source} type="video/mp4" />
				</video>
			</div>
			<div className="absolute w-full min-w-full h-full top-0 left-0 bg-bg-secondary/65" />
			<div className="relative items-center flex main-padding z-10">
				{ children }
			</div>
		</div>
	);
};

export default VideoBlock;