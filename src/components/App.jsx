import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Navbar = lazy(() => import('./modules/Navbar/Navbar'));
const HomePage = lazy(() => import('./pages/Home page/HomePage'));
const MoviesPage = lazy(() => import('./pages/Movies page/MoviesPage'));
const NotFoundPage = lazy(() => import('./pages/Not found page/NotFoundPage'));
const SingleMoviePage = lazy(() =>
  import('./pages/Single movie page/SingleMoviePage')
);
const Cast = lazy(() => import('./pages/Single movie page/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Single movie page/Reviews/Reviews'));

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<SingleMoviePage />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
