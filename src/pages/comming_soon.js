import Head from 'next/head';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>The Flare - Coming Soon</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="text-center">
                <h1 className="text-4xl font-bold">The Flare</h1>
                <p className="text-xl mt-4">Coming Soon!</p>
            </main>
        </div>
    );
}