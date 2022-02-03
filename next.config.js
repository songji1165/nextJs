const API_KEY = process.env.API_KEY;
// const MOVIE_URL = (path)=>`https://api.themoviedb.org/3/${path}?api_key=${API_KEY}`;

module.exports = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent : false, // 브라우저나 검색엔진이 이 브라우저를 기억하는지 결정하는 여부
      },
      {
        source: "/old-blog/:path",
        destination: "/new-blog/:path",
        permanent : false,
      },
      {
        source: "/old-blog2/:path*",
        destination: "/new-blog2/:path*",
        permanent : false,
      }
    ]
  },
  async rewrites(){
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        // destination: MOVIE_URL("/movies")
      },
      // {
      //   source: "/api/movies/:id",
      //   destination: MOVIE_URL("/movies/:id")
      // }
    ]
  }
}
