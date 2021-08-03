import React from 'react';
import Header from './../Header/Header';
import './App.css';
import './../Searchbox/Searchbox'
import Searchbox from './../Searchbox/Searchbox';
import ResultContainer from './../Results/Results';

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
    state = {
        headerText: "Name the Project!!",
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {

        if (inputText) {
            this.setState({
                headerExpanded: false,
                suggestedNames: name(inputText)
            })
        }
        else {
            this.setState({
                headerExpanded: true,
                suggestedNames: []
            })
        }

    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText} />
                <Searchbox on handleInputChange={this.handleInputChange} />

                <ResultContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
};


export default App;