import { Container } from '@material-ui/core'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'



export default function NewsContent({news,newsResult}) {
    return (
        <Container maxWidth="md">
            <div className="content">
                <span>
                    For the best experience use <strong>inshort</strong> app in mobile
                </span>
                <img src="https://assets.inshorts.com/website_assets/images/appstore.png"  className="download"  alt="download" />
                <img  className="download" src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="download" />
            </div>

            { news ?( 
            news.map((newsItem) => (
                 <NewsCard  newsItem={newsItem} key={newsItem.title} newsResult={newsResult}/>
            )) ) : <div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div> }
           

        </Container>
    )
}

