import React, { Component } from "react";
import API from "../../utils/API";
import DB from "../../utils/DB"
import ResultItem from "../../components/Results"

class Saved extends Component {

    state = {
        articles: []
    }

    getArticles(){
        DB.get()
        .then(res =>
        this.setState({articles: res.data}))
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getArticles();
    }

    componentDidUpdate() {
        this.getArticles();
    }
    deleteArticle = (id) => {
        alert(`Article Deleted`)
        DB.delete(id)
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div class="card-header">
                        Saved Articles
                    </div>
                
                        <div className="card-body">

                            {this.state.articles.map(item =>

                                <ResultItem
                                    key={item.headline.main}
                                    url={item.web_url}
                                    snippet={item.snippet}
                                    headline={item.headline.main}
                                    date={item.pub_date}
                                    onClick={this.deleteArticle}
                                />
                            )}


                        </div>
                    </div>
                </div>


        )
    }

}

export default Saved;