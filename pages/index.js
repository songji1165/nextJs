import Seo from "../components/Seo";


export default function Home({results}) {
    return (
        <div className="container">
            <Seo title="home"/>
                {results?.map((movie, idx) => {
                    return (<div className="movie" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                        <h4>{movie.original_title}</h4>
                    </div>);
                })}
            <style jsx>{`
            .container {
              display: grid;
              grid-template-columns: 1fr 1fr;
              padding: 20px;
              gap: 20px;
            }
            .movie{
                cursor: pointer;
            }
            .movie img {
              max-width: 100%;
              border-radius: 12px;
              transition: transform 0.2s ease-in-out;
              box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            .movie:hover img {
              transform: scale(1.05) translateY(-10px);
            }
            .movie h4 {
              font-size: 18px;
              text-align: center;
            }
      `}
            </style>
        </div>);
}

// 서버에서만 돌아가는 코드 (SSR)
export async function getServerSideProps() {
    // next-rewrite 사용하는 경우 : localhost:3000/api/movies (client 인 경우 , "/api/movies" )
    const {results} = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)).json();
    console.log("results : ", results);
    return {
        props: {
            results
        }
    }
}