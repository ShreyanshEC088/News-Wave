import React, { Component } from 'react'

export default class NewsComp extends Component {

    render() {
        const { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div>
                <div className="card my-4 mx-4 d-flex" style={{ height:"auto",width: "18rem" }}>
                    <img src={imageUrl ? imageUrl : "https://i0.wp.com/s3.ap-south-1.amazonaws.com/img.paisawapas/images/2022/10/20113253/Rectangle-1English-Newspapers-in-India-1.png?fit=1200%2C600&ssl=1"} className="card-img-top" alt="cricket" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

