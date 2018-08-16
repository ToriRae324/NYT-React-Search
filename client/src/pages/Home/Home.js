import React, { Component } from "react";
import API from "../../utils/API";
import DB from "../../utils/DB"
import { FormBtn, FormInput } from "../../components/Search";
import ResultItem from "../../components/Results/ResultItem";

class Home extends Component {

    state = {
        results: [],
        topic: "",
        startYear: "",
        endYear: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.search(this.state.topic, this.state.startYear, this.state.endYear)
            .then(res => { this.setState({ results: res.data.response.docs }) }
            )
            .catch(err => console.log(err));
    }

    getArticles() {
        API.search(this.state.topic, this.state.startYear, this.state.endYear)
    }

    saveArticle = (headline, date, snippet, url) =>() => {
        const savedArticle = {
            headline: headline,
            date: date,
            snippet: snippet,
            url: url
        }
        DB.save(savedArticle).then( alert("Article Saved"))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Search
                    </div>
                    <div className="card-body">
                        <div className="Form">
                            <form>
                                <FormInput
                                    value={this.state.topic}
                                    onChange={this.handleInputChange}
                                    name="topic"
                                    placeholder="Topic *"
                                />
                                <FormInput
                                    value={this.state.startYear}
                                    onChange={this.handleInputChange}
                                    name="startYear"
                                    placeholder="Start Year * (YYYY)"
                                />
                                <FormInput
                                    value={this.state.endYear}
                                    onChange={this.handleInputChange}
                                    name="endYear"
                                    placeholder="End Year * (YYYY)"
                                />
                                <FormBtn
                                    disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Find Articles
                                </FormBtn>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="Results">
                    <div className="card">
                        <div class="card-header">
                            Search Results
                        </div>
                        <div className="card-body">

                            {this.state.results.map(item =>

                                <ResultItem
                                    key={item.headline.main}
                                    url={item.web_url}
                                    snippet={item.snippet}
                                    headline={item.headline.main}
                                    date={item.pub_date}
                                    Article={this.saveArticle}
                                    buttonText="Save for later"
                                />
                            )}


                        </div>
                    </div>
                </div>

            </div>

        )
    }

}

export default Home;