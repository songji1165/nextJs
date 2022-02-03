import {useRouter} from "next/router";

export default function Detail({params}){
    const router = useRouter();
console.log("PARAMS?", params);
    const [title, id] = params || []; // <-- 단순 csr 에러 잡기 위함 [] 추가하기
    return (
        <div>
            <h4>
                {title}
            </h4>
        </div>
    )
}

export async function getServerSideProps({params: {params}}) {
    console.log(params);
    return {
        props: {
            params: params
        }
    }
}