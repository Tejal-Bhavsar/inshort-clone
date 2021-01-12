import './App.css';
import Navbar from './components/Navbar'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import NewsContent from './News/NewsContent'


function App() {
  const [ category, setCategory ] = useState([])
  const [ news, setNews ] = useState( )
  const [ newsResult, setResult ] = useState()
  const APIKEY = "5a9e11485d3e43b5879899c09075f7c9"

  useEffect(() => {
    getdata()
  },[category,newsResult])

  const getdata = async ( ) => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}&category=${category}`)
    const data = await response.data.articles 
    console.log(data,"helli")
    setNews(data);
    setResult(data.totalResult)
     
     console.log(news,"naya news")
     

  }
  return (
    <div className="App">
       <Navbar setCategory={setCategory}/>
       <NewsContent news={news} newsResult={newsResult}/>
       <Footer />
    </div>
  );
}

export default App;
