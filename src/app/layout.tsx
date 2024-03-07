import './globals.css';
import type { Metadata } from 'next';
import Wrapper from '@/UI/Wrapper';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Modal from '@/UI/Modal';
import AuthProvider from '@/providers/AuthProvider';

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
						<Modal />
					</Wrapper>
				</body>
			</AuthProvider>
		</html>
	);
}
