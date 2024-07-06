import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Search } from "./pages/Search/Search";
import { MovieDetail } from "./pages/MovieDetail/MovieDetail";
import { Header } from "./components/Header/Header";
import { SearchKeywords } from "./pages/SearchKeywords/SearchKeywords";
import SearchTVShow from "./pages/SearchTVShow/SearchTVShow";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/search/keywords",
        element: <SearchKeywords />,
      },
      { path: "/search/tvShow", 
        element: <SearchTVShow /> 
      },
      {
        path: "/movie/:movieId",
        element: <MovieDetail />,
      },
    ],
  },
]);
