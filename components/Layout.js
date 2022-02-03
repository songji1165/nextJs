import NavBar from "./NavBar";

export default function Layout({children}){
    return(
        <>
            <NavBar/>
            <div>
                {children}
            </div>
            <section className="footer">This is Footer Section</section>
            <style jsx global>{`
                a{
                    color: skyblue;
                }
            `}</style>
        </>
    )
}