import Link from "next/link"
import {useRouter} from "next/router";

/** NextJs : Styled Jsx (nextjs만 지원해주는 방법)
 * - 컴포넌트 단위로 독립적 (Scoped)
 *      - 다른 컴포넌트의 동일 클래스 이름을 신경쓰지 않아도 됨
 * - import 가 필요 없음
*/
export default function NavBar() {
    const router = useRouter(); // nextJs 가 제공해주는 router (nextJs에 이미 내장되어있긴 때문에, install이 필요없다)
    console.log("NextJs Router - location 정보 제공: ", router);

    const props = {
        color : 'tomato'
    };

    return (<nav>
        <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <style jsx>{`
            a{
                text-decoration: none;
            }
            .active{
                color: ${props.color};
            }
        `}</style>
    </nav>)
}


/* NextJs : Css 모듈로 스타일 추가하는 방법

import styles from "./Navbar.module.css";

export default function NavBar() {
    const router = useRouter(); // nextJs 가 제공해주는 router (nextJs에 이미 내장되어있긴 때문에, install이 필요없다)
    console.log("NextJs Router - location 정보 제공: ", router);
    return (<nav>
            <Link href="/">
                <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a>
            </Link>
            <Link href="/about">
                <a className={[
                    styles.link,
                    router.pathname === "/about" ? styles.active : ""
                ].join(" ")}>About</a>
            </Link>
        </nav>)
}
 */