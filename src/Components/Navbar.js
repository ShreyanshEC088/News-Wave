import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import {Link,} from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="#">News Monkey</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/home">Home</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/business">Bussiness</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/entment">Entertainment</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/home">General</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/health">Health</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/science">Science</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/sports">Sports</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/tech">Technology</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

