app/layout.tsx


import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export const metadata = {
title: 'Target SEO Solutions – ROI Driven SEO Agency',
description: 'ROI-driven SEO strategies for local and national businesses'
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="bg-white text-black">
<Header />
{children}
<Footer />
</body>
</html>
)
}