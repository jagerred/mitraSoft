import { Suspense } from 'react';
import LazyLoader from '../components/LazyLoader/LazyLoader';

export const suspenseComponent = (component, loader = <LazyLoader />) => (
	<Suspense fallback={loader}>{component}</Suspense>
);
