const API_KEY = process.env.API_KEY;
// const API_KEY = "5481b26a7f45662cd735f1c07167cccd";

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
      }
    ]
  }
}
