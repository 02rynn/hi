import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async()=>{
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=86fc153457462429d8ff36735a84752d&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=disney&with_watch_monetization_types=flatrate");
    const json = await response.json();
    setMovies(json.results);
    setLoading(false);
  };
  //우선순위를 정하는 것 . 무조건 fatch가 먼저되어야하기에 await해놓고 그 다음 async 실행되도록

  useEffect(()=>{
    getMovies();

  },[])


  //***************요즘은 then보다 await 이랑 async() ? 더 많이 사용함  */
  // useEffect(() => {
  //   //fetch로 데이터를 요청할 서버
  //   fetch(
  //     "https://api.themoviedb.org/3/discover/movie?api_key=86fc153457462429d8ff36735a84752d&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=disney&with_watch_monetization_types=flatrate"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setMovies(json.results);
  //       // console.log(json);
  //        setLoading(false); //데이터를 가지고 온것을 확인했으면 false로 바꿔줌
  //     });
  // }, []); //API를 가져오는건 딱 한번만 할거기 때문에 useEffect 디펜던시에 아무것도 넣지않아서 한번만 실행되도록
  //responce,json()메서드를 호출하면 json데이터를 js객체로 변환
  //json의 값을 setMovies에 담아서 렌더링
  console.log(movies);
  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : <div>movies.map(movie => <div key={results.id}> {results.title}</div>)</div>}
     
    </div>
  );
}

export default App;
