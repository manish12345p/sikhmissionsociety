import '../index.css';
import AppWrapper from './AppWrapper';

export const metadata = {
  title: 'Sikh Mission Society',
  description: 'Find your perfect Sikh Life Partner',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
