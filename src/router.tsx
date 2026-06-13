import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from './components/layout/RootLayout';
import { SimulationFormPage } from './pages/SimulationFormPage';
import { SimulationResultsPage } from './pages/SimulationResultsPage.tsx';

export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <SimulationFormPage />,
			},
			{
				path: '/resultado',
				element: <SimulationResultsPage />,
			},
			{
				path: '/historico',
				element: <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">Em breve...</div>,
			},
		],
	},
]);
