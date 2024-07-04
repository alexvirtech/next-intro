import { useRouter } from "next/router"
import { MainLayout } from "../../components/layout"
import Link from "next/link"

export default function Post() {
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
        </MainLayout>
    )
}
