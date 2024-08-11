import './globals.css';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import Wrapper from '@/UI/Wrapper';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Modal from '@/UI/Modal';
import AuthProvider from '@/providers/AuthProvider';
import Loader from '@/components/Loader';

export const metadata: Metadata = {
	title: 'A_in_spiring',
	description: 'Tech blog for aspiring developers',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<AuthProvider>
				<body className='bg-primary-100 text-light-100 font-plex'>
					<Wrapper>
						<Navbar />
						<main>{children}</main>
						{/* <Footer /> */}
						<Suspense fallback={<Loader />}>
							<Modal />
						</Suspense>
					</Wrapper>
				</body>
			</AuthProvider>
		</html>
	);
}
