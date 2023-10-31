import Row from './Row';
import './App.css';
import requests from './request';
import Banner  from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className='app'>
      <Nav/>
      {/*NAV */}
       {/*BANNER */}
       <Banner/>
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflix0riginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchTopRated}/>
      <Row title="Documentaries" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="" fetchUrl={requests.fetchRomanceMovies}/>
      
    </div>
  );
}

export default App;
