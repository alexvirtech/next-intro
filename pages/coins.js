import { MainLayout } from "../components/layout"
import { useRouter } from "next/router"

export default function Coins({data}) {
    const router = useRouter()

    return (
        <MainLayout title="Coins">
            <div className="max-w-[1000px] my-4 mx-auto text-3xl text-blue-600 font-bold">Coins</div>
            {data && data.length > 0 ? (
                <div>
                    {data.map((coin) => (
                        <div className="py-1 px-6 m-1 bg-green-200 hover:bg-green-300 cursor-pointer rounded float-left" 
                        onClick={() => router.push(`/coin/${coin}`)} key={coin}>{coin}</div>
                    ))}
                    <div className="clear-both"></div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </MainLayout>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.mtw-testnet.com/assets/symbols')
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
  }
