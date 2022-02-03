import NavBar from "../components/NavBar";
import "../styles/globals.css"; // 커스텀 App Component 에서만 css 를 임포트 할 수 있음.

export default function app({Component, pageProps}) {
    return (
        <>
            <NavBar/>
            <Component {...pageProps}/>
            <span>Hello World</span>
            <style jsx global>{`
                a{
                    color: skyblue;
                }
        `}</style>
        </>
    )
}