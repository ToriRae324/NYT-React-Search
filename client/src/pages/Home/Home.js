import React, { Component } from "react";
import API from "../../utils/API";
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
        .then(res => 
            {this.setState({results: res.data.response.docs})}
        
    )
        .catch(err => console.log(err));
    }



    getArticles() {
        API.search(this.state.topic, this.state.startYear, this.state.endYear)
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                <div className="card-body">
                <div className="Form">
                    <form>
                        <FormInput
                            value={this.state.topic}
                            onChange={this.handleInputChange}
                            name="topic"
                            placeholder="Topic (Required)"
                        />
                        <FormInput
                            value={this.state.startYear}
                            onChange={this.handleInputChange}
                            name="startYear"
                            placeholder="Start Year (YYYY-Required)"
                        />
                        <FormInput
                            value={this.state.endYear}
                            onChange={this.handleInputChange}
                            name="endYear"
                            placeholder="End Year (YYYY-Required)"
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
                    <div className="card-body">
                    <ol>
                    {this.state.results.map(item =>
                    <li>
                    <ResultItem
                    key={item.headline.main}
                    url={item.web_url}
                    headline={item.headline.main}
                    date={item.pub_date}
                    />
                    </li>)}
                    </ol>

                </div>
                </div>
</div>

            </div>

        )
    }

}

export default Home;