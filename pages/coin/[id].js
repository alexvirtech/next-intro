import { useRouter } from "next/router"
import { MainLayout } from "../../components/layout"
import Link from "next/link"

export default function Coin({data}) {
    const router = useRouter()
    //console.log(router)
    return (
        <MainLayout title="Coins">
            <div className="max-w-[1000px] my-4 mx-auto flex justify-between">
                <div className="text-3xl text-blue-600 font-bold">Coin {router.query.id}</div>
                
                <div className="pt-3">
                    <Link href="/coins" className="text-blue-800 font-bold hover:underline">Back to All Coins</Link>
                </div>
            </div>
            {/* <pre>{JSON.stringify(data,null,4)}</pre> */}
            {
               
                    <div>
                        {Object.entries(data).map(([k,v]) => (
                            <div className="flex justify-start gap-2">
                                <div className="w-[80px]">{k}</div>
                                <div className="w-1/2">{v}</div>
                            </div>   
                        ))}
                        
                    </div>
                
            }
        </MainLayout>
    )
} 

export async function getServerSideProps(req) {
    const resp = await fetch(`https://api.mtw-testnet.com/assets/${req.query.id}`)
    const data = await resp.json()
    delete data["summary"]
    // Pass data to the page via props
    return { props: { data } }
  }