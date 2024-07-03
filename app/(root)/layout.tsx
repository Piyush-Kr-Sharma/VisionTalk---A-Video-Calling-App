import { ReactNode } from 'react';

import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VisionTalk',
  description: 'Video calling App',
  icons: {
    icon: '/icons/logo.svg',
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  // children is passed as props and it comes from ReactNode coming from react
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>{' '}
      {/* this component will wrap all of their pages/children within it */}
    </main>
  );
};

export default RootLayout;
