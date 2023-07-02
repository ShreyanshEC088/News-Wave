import React, { Component } from 'react'

export default class NewsComp extends Component {
    render() {
        const { title, description, imageUrl, newsUrl,author,date } = this.props;
        return (
            <div>
                <div className="card my-4 mx-4 d-flex" style={{ }}>
                    <img src={imageUrl ? imageUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1NaUkqGdg-9yhEThWMntGUjEzeVUvtfhKA"} className="card-img-top" alt="Error" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p class="card-text"><small class="text-body-secondary"><strong>By {author?author:"Unknown"} on {date}</strong></small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

