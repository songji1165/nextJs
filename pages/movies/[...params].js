import {useRouter} from "next/router";

export default function Detail(){
    const router = useRouter();

    const [title, id] = router.query.params || []; // <-- 단순 csr 에러 잡기 위함 [] 추가하기
    return (
        <div>
            <h4>
                {title}
            </h4>
        </div>
    )
}

// 서버에서만 돌아가는 코드 (SSR)
// export async function getServerSideProps({params: params}) {
//     return {
//         props: {
//             params
//         }
//     }
// }