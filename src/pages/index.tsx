import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <h1 className="text-red-600 text-lg">Home!</h1>
        </>
    )
}
