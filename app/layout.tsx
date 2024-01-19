import React from "react";

// Custom Provider component to wrap the app in the Redux store.
import { Providers } from "@/redux/providers";

// Global styles
import "../assets/styles/globals.scss";
import "@/node_modules/rsuite/dist/rsuite-no-reset.min.css";

// App component
import { App } from "@/components/App";

// Our App's metadata, used for SEO and injected into the <head>
export const metadata = {
  title: "Next.js Clients App",
  description: "Generated by Next.js"
};

// The root layout for our app
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <App>{children}</App>
        </Providers>
      </body>
    </html>
  );
}