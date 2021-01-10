import './App.css';
import Navbar from './components/Navbar'
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsContent from './News/NewsContent';
import Footer from './components/Footer';

function App() {
  const [ category, setCategory ] = useState(["general"])
  const [ news, setNews ] = useState( )
  const [ newsResult, setResult ] = useState()
  const APIKEY = "5a9e11485d3e43b5879899c09075f7c9"

  useEffect(() => {
    getdata()
  },[category,newsResult])

  const getdata = async ( ) => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`)
    const data = await response.data.articles 
    console.log(data)
    setNews(data);
    setResult(data.totalResult)
     
    console.log(newsResult)

  }
  return (
    <div className="App">
       <Navbar setCategory={setCategory}/>
       <NewsContent />
       <Footer />
    </div>
  );
}

export default App;
