import React from 'react';

import { ReactElement } from 'react';

const VideoBlock = ({source, children}:{source: string, children?:ReactElement}) => {
	return (
		<div className="relative h-[900px] overflow-hidden pt-[400px] pb-[100px] items-center flex flex-col justify-center">
			<div className="h-full w-full top-0 left-0 absolute overflow-hidden">
				<video autoPlay loop className="absolute min-w-full min-h-full object-cover">
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