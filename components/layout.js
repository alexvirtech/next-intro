import Head from "next/head"
import Link from "next/link"

export function MainLayout({ children, title = "Home" }) {
    const pageTitle = `MyApp${title ? " | " + title : ""}`

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="My first nextJS app" />
            </Head>
            <div className="max-w-[1000px] mx-auto py-2 flex flex-col min-h-[100vh]">
                <nav className="w-full bg-blue-300 p-6 flex justify-between gap-2">
                    <div className="flex justify-start gap-3">
                        <Link
                            href={"/"}
                            className={
                                "text-blue-800 font-bold hover:underline px-2 py-1 rounded " + (title === "Home" && " bg-white")
                            }
                        >
                            Home
                        </Link>
                        <Link
                            href={"/coins"}
                            className={
                                "text-blue-800 font-bold hover:underline  px-2 py-1 rounded " + (title === "Coins" && " bg-white")
                            }
                        >
                            Coins
                        </Link>
                        <Link
                            href={"/about"}
                            className={
                                "text-blue-800 font-bold hover:underline px-2 py-1 rounded " + (title === "About" && " bg-white")
                            }
                        >
                            About
                        </Link>
                    </div>
                    <div>Temp</div>
                </nav>
                <main className="grow">{children}</main>
                <footer className="w-full bg-blue-300 p-6 text-center">
                    <div className="">Temp for Footer</div>
                </footer>
            </div>
        </>
    )
}
