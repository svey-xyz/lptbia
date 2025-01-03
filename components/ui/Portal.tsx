'use client'

import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const Portal = ({ parentID, children, className }: { parentID: string, children: ReactNode, className?: string }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		return () => setIsMounted(false);
	}, []);

	if (!isMounted) return null;

	const portalRoot = document.getElementById(parentID);

	if (!portalRoot) return null;

	return ReactDOM.createPortal(children, portalRoot);
};