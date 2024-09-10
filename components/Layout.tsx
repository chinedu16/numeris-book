// components/Layout.tsx
import Head from "next/head";
import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Numeris Book</title>
        <meta
          name="description"
          content="Checkout our page"
          key="desc"
        />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
      </Head>

     
      <div className="h-screen flex overflow-hidden">
        <Sidebar />

        <div className="flex-1 px-10 flex flex-col overflow-hidden bg-[#F5F6FA]">
          
          <Header />

          <main className="flex-1 overflow-y-auto">
            {children}
          </main>

          
        </div>
      </div>
    </div>
  );
};

export default Layout;
