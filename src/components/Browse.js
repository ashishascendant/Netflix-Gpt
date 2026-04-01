
import Header from './Header';
import useNowplayingmovies from './Hooks/useNowplayingmovies';

const Browse = () => {
   useNowplayingmovies();
  return (
    <div>
     <Header/>
    </div>
  )
}

export default Browse;
