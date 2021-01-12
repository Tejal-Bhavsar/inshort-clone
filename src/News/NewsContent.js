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

            {news.map((newsItem) => (
                 <NewsCard  newsItem={newsItem} key={newsItem.title} newsResult={newsResult}/>
            ))}
           

        </Container>
    )
}

