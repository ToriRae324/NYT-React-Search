import React, { Component } from "react";
import API from "../../utils/API";
import DB from "../../utils/DB"
import ResultItem from "../../components/Results/ResultItem.1"

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

    
    deleteArticle = (id) =>() => {
        DB.delete(id).then(()=>this.getArticles())
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
                                    key={item._id}
                                    _id={item._id}
                                    url={item.url}
                                    snippet={item.snippet}
                                    headline={item.headline}
                                    date={item.date}
                                    Article={this.deleteArticle}
                                    buttonText="Delete"
                                />
                            )}


                        </div>
                    </div>
                </div>


        )
    }

}

export default Saved;