import {useRouter} from "next/router";

export default function Detail(){
    const router = useRouter();
    return (
        <div>
            This is Movie Detail {router.query.id}
        </div>
    )
}