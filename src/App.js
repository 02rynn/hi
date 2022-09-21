import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const[loading, setLoading] = useState(true);
  const[movies, setMovies] = useState([])
  useEffect(()=>{ //fetch로 데이터를 요청할 서버 
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=86fc153457462429d8ff36735a84752d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5&with_companies=disney&with_watch_monetization_types=flatrate')
    .then((response)=>response.json())
    .then((json)=> {
      setMovies(json);
      setLoading(false);
    });
  },[]); //API를 가져오는건 딱 한번만 할거기 때문에 useEffect 디펜던시에 아무것도 넣지않아서 한번만 실행되도록
  //responce,json()메서드를 호출하면 json데이터를 js객체로 변환 
  //json의 값을 setMovies에 담아서 렌더링
  
  return (
    <div className="App">
    {loading? <h1>Loading...</h1> : null}
    <ul>
      {movies.map((data)=> (<li>{data.title}</li>))}  {/*데이터가 있는데... 안가져와지는듯? */}
    </ul>
    </div>
  );
}

export default App;
