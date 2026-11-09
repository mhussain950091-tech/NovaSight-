import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"NovaSight | AI-Powered Dashboard Intelligence",description:"Transform datasets into intelligent, interactive analytics."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
