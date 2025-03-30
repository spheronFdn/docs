import { Metadata } from 'next'
import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import CustomFooter from '@/components/footer'
import { SpheronLogo } from "@/components/icons/spheron-full";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    template: '%s | Spheron',
    default: 'Spheron',
  },
  description: "Power your dapp with Spheron's next-generation infrastructure.",
  metadataBase: new URL('https://docs.spheron.network'),
  openGraph: {
    title: {
      template: '%s | Spheron',
      default: 'Spheron',
    },
    description: "Power your dapp with Spheron's next-generation infrastructure.",
    url: "https://docs.spheron.network/",
    images: "https://www.spheron.network/meta-og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: '%s | Spheron',
      default: 'Spheron',
    },
    description: "Power your dapp with Spheron's next-generation infrastructure.",
    images: "https://www.spheron.network/meta-og-image.png",
    site: "https://spheron.network",
  },
}

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<span className="flex items-center"><SpheronLogo /></span>}
    projectLink="https://github.com/spheronfdn"
    chatLink="https://sphn.wiki/discord"
  />
)


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head faviconGlyph="✦">
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 600 }}>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={<CustomFooter />}
          navigation={{
            prev: true,
            next: true
          }}
          sidebar={{
            defaultMenuCollapseLevel: 1,
          }}
        // search={<OramaSearch />}
        // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html >
  )
}