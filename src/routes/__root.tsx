import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#f6efe6" },
      { title: "AtS Constructions & Engineering — Singapore" },
      {
        name: "description",
        content:
          "AtS Constructions & Engineering — Singapore-based partner for refineries, pipelines, commercial spaces and apartments. Senior-led, safety-first.",
      },
      { name: "author", content: "AtS Constructions & Engineering" },
      { property: "og:site_name", content: "AtS Constructions & Engineering" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "AtS Constructions & Engineering — Singapore" },
      { name: "twitter:title", content: "AtS Constructions & Engineering — Singapore" },
      {
        name: "description",
        content:
          "Builds a multi-page website and brand system for AtS Constructions & Engineering.",
      },
      {
        property: "og:description",
        content:
          "Builds a multi-page website and brand system for AtS Constructions & Engineering.",
      },
      {
        name: "twitter:description",
        content:
          "Builds a multi-page website and brand system for AtS Constructions & Engineering.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8d495237-e64f-4165-b185-c1fd0979dd86/id-preview-66bb98cc--ba74c942-55f8-4dd9-a9cf-c64ce8e26ea3.lovable.app-1779647831024.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8d495237-e64f-4165-b185-c1fd0979dd86/id-preview-66bb98cc--ba74c942-55f8-4dd9-a9cf-c64ce8e26ea3.lovable.app-1779647831024.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "/" },
      // ADD THESE THREE LINES: Points the browser directly to your transparent logo file
      { rel: "icon", type: "image/png", href: "/ats-logo-transparent.png" },
      { rel: "shortcut icon", type: "image/png", href: "/ats-logo-transparent.png" },
      { rel: "apple-touch-icon", href: "/ats-logo-transparent.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AtS Constructions & Engineering",
          description:
            "Singapore-based construction and engineering firm specialising in refineries, pipelines, commercial spaces and apartments.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "18 Cross Street, #11-08 Cross Street Exchange",
            addressLocality: "Singapore",
            postalCode: "048423",
            addressCountry: "SG",
          },
          telephone: "+65 6123 4567",
          email: "hello@ats-engineering.sg",
          areaServed: "SG",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>{" "}
      {/* Clean and properly closed body tag */}
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
