import React, { Component } from 'react'
import NewsComp from './NewsComp'
import Spiner from './Spiner';
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps = {
        country:"in",
        pageSize:8,
        domain:"general",
    }
    static propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        domain:PropTypes.string,
    }

    articles = [
        // {
        //     "source": {
        //         "id": null,
        //         "name": "Investing.com"
        //     },
        //     "author": "Reuters",
        //     "title": "Europe's Euclid space telescope set for launch to explore 'dark universe' By Reuters - Investing.com",
        //     "description": "Europe's Euclid space telescope set for launch to explore 'dark universe'",
        //     "url": "https://www.investing.com/news/world-news/europes-euclid-space-telescope-set-for-launch-to-explore-dark-universe-3118166",
        //     "urlToImage": "https://i-invdn-com.investing.com/news/world_news_2_69x52._800x533_L_1419494365.jpg",
        //     "publishedAt": "2023-07-01T04:03:00Z",
        //     "content": "By Steve Gorman\r\n(Reuters) - A SpaceX rocket in Florida stood poised for launch on Saturday carrying an orbital telescope built to shed light on mysterious cosmic phenomena known as dark energy and d… [+4406 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "YouTube"
        //     },
        //     "author": null,
        //     "title": "Mysterious giant 'gravity hole' in Indian Ocean unravelled | World DNA | Latest World News | WION - WION",
        //     "description": "This enormous \"hole\" in the Indian Ocean, according to a recent study that was just published in the journal Geophysical Research Letters on Thursday, is cau...",
        //     "url": "https://www.youtube.com/watch?v=vmK1v_i1CPg",
        //     "urlToImage": "https://i.ytimg.com/vi/vmK1v_i1CPg/maxresdefault.jpg",
        //     "publishedAt": "2023-07-01T04:01:19Z",
        //     "content": null
        // },
        // {
        //     "source": {
        //         "id": "the-times-of-india",
        //         "name": "The Times of India"
        //     },
        //     "author": "TIMESOFINDIA.COM",
        //     "title": "Neeraj Chopra wins in Lausanne to clinch back-to-back Diamond League titles - Indiatimes.com",
        //     "description": "More sports News: Neeraj Chopra, the Olympic champion, showcased his exceptional form as he made a triumphant return after a one-month injury lay-off to secure first pl",
        //     "url": "https://timesofindia.indiatimes.com/sports/more-sports/athletics/neeraj-chopra-wins-in-lausanne-to-clinch-back-to-back-diamond-league-titles/articleshow/101407744.cms",
        //     "urlToImage": "https://static.toiimg.com/thumb/msid-101407815,width-1070,height-580,imgsize-64498,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        //     "publishedAt": "2023-07-01T02:47:00Z",
        //     "content": "Top-10: Legends who never won the ODI World Cup"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "Hindustan Times"
        //     },
        //     "author": "HT Tech",
        //     "title": "Garena Free Fire Redeem codes for July 1: Booyah Pass Season 7 is here! - HT Tech",
        //     "description": "Garena Free Fire Redeem codes for July 1: Know how to claim these codes which contain diamonds, costumes, weapons, bundles and more.",
        //     "url": "https://tech.hindustantimes.com/how-to/garena-free-fire-redeem-codes-for-july-1-booyah-pass-season-7-is-here-71688178367753.html",
        //     "urlToImage": "https://images.hindustantimes.com/tech/img/2023/07/01/1600x900/8c60a97e945c8d1bd76c3d1e3d0dcb81jpg_1655084471263_1688178609777.jpg",
        //     "publishedAt": "2023-07-01T02:41:20Z",
        //     "content": "Garena Free Fire Redeem codes for July 1: Free Fire is a game that is constantly in motion. The developers of this ever-evolving game are always working on something new and bringing fun additions to… [+2514 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "Financial Express"
        //     },
        //     "author": "The Financial Express",
        //     "title": "25 bus passengers dead after vehicle catches fire on Samruddhi Expressway in Maharashtra - The Financial Express",
        //     "description": null,
        //     "url": "https://www.financialexpress.com/india-news/25-bus-passengers-dead-after-vehicle-catches-fire-on-samruddhi-expressway-in-maharashtra/3150719/",
        //     "urlToImage": null,
        //     "publishedAt": "2023-07-01T01:51:52Z",
        //     "content": null
        // }
    ]
    constructor() {
        super();
        console.log("Constructor fro news body!")
        this.state = {
            // articles: this.articles
            articles: [],
            page: 1,
            loading: false,
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.domain}&apiKey=7c98d687f77a4f3ebd3f62884b708b5a&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false });

    }
    handlePreviousCLick = async () => {
        // alert("Previous is CLicked");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.domain}&apiKey=7c98d687f77a4f3ebd3f62884b708b5a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false,
        })
    }
    handleNextClick = async () => {
        // alert("Next is CLicked");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.domain}&apiKey=7c98d687f77a4f3ebd3f62884b708b5a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json();
            // this.setState({loading:false});
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false,
            })
        }
    }
    render() {
        return (
            <div className="container my-5">
                <h1 className="text-center" style={{margin:"30px"}}>NewsWave - Top Headlines</h1>
                {this.state.loading && <Spiner/>}
                <div className="row">
                    {!this.state.loading &&this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsComp title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 55) : ""} imageUrl={element.urlToImage} newsUrl={element.url}
                            author={element.author} date={element.publishedAt}/>

                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlePreviousCLick} class="btn btn-dark ">&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} class="btn btn-dark ">Next &rarr;</button>
                </div>
            </div>
        )
    }
}
