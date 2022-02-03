import "../styles/globals.css";
import Layout from "../components/Layout"; // 커스텀 App Component 에서만 css 를 임포트 할 수 있음.

export default function app({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps}/>

        </Layout>
    )
}