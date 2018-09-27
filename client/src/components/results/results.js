import React from 'react';
import SaveButton from '../save-button';
import API from '../../utils/API';

class ResultsCard extends React.Component {

    state = {
        articles: ["No articles accessed yet."],
        savedArticles: [] 
    }

    // componentWillReceiveProps(props){
    //     console.log("+++",props);
    //     if (this.state.articles !== props) {
    //         this.setState({
    //             articles: props
    //         })
    //         // this.publishResults();
    //     } else {
    //         return console.log("Failed");
    //     }
    //     console.log(this.props);
    //     console.log(this.props.value);
    //     console.log(this.props.value.data);
    //     console.log(this.props.value.data.response);
    //     console.log(this.props.value.data.response.docs);
    //     console.log(this.props.value.data.response.docs[0].headline.main);
    // }


    // console.log("results updated");
    // console.log(props);
    // console.log(this.props.articles);

    // this.setState({
    //     articleOne: this.props.value.data.response.docs[0].headline.main,
    //     articleTwo: " ",
    //     articleThree: " ",
    //     articleFour: " ",
    //     articleFive: " "
    // })


    // console.log("================>", articles);

    // const articlesArray = this.props.value.data.response.docs;

    // const headlines = articles.map((article) =>{
    //     return (
    //         <li
    //             key={article.id}>{}
    //         </li>
    //     )
    // });



    // publishResults = (numRes) => {
    //     console.log("pubResHappened");
    //     for (let i=0;i<numRes;i++){
    //     return(
    //         <div>
    //         <li>
    //             {this.state.articles.value.data.response.docs[i].headline.main}
    //         </li>
    //         <SaveButton />
    //         </div>
    //     )
    //     };
    // };

    handleSaveSubmit = event => {
        event.preventDefault();
        console.log("Save Button: ", (event.target.title));
        const saveMe = event.target.title;
        alert(saveMe);
        API.saveArticle(saveMe)
        .then(()=>{})
        .catch((err)=>{throw(err)});
        // console.log("Save Button: ", (event.target.web_url));
        // console.log("Save Button: ", event.target.value.headline.main + " " + event.target.value.web_url);
    };

    renderResults = () => {
        console.log("this.props.articles: ", this.props.articles);
        if (this.props.articles.length === 0) {
            return (<span>  </span>)
        }
        else {
            return (
                <ul>
                    <li>
                        <a href={this.props.articles[0].web_url}>
                            {this.props.articles[0].headline.main}
                            <button 
                            className="saveBtn" 
                            onClick={this.handleSaveSubmit}
                            title={ JSON.stringify({headline: this.props.articles[0].headline.main, web_url: this.props.articles[0].web_url }) }
                            
                            >Save!</button>
                        </a>
                        <div>
                            
                        </div>
                    </li>
                    <li>
                        <a href={this.props.articles[1].web_url}>
                            {this.props.articles[1].headline.main}
                        </a>
                        <SaveButton />
                    </li>
                    <li>
                        <a href={this.props.articles[2].web_url}>
                            {this.props.articles[2].headline.main}
                        </a>
                        <SaveButton />
                    </li>
                    <li>
                        <a href={this.props.articles[3].web_url}>
                            {this.props.articles[3].headline.main}
                        </a>
                        <SaveButton />
                    </li>
                    <li>
                        <a href={this.props.articles[4].web_url}>
                            {this.props.articles[4].headline.main}
                        </a>
                        <SaveButton />
                    </li>
                </ul>
            )
        }
        // console.log("renderResults active)");
        // if(this.props.articles.docs.length > 0){
        //     console.log("props recvd");
        //     return(
        //         <ul>
        //             Test.
        //         </ul>
        //     )
        // } else if (this.props.articles.docs  0){
        //     console.log("NO PROPS");
        //     return (<ul></ul>)
        // }




    };

    // componentDidUpdate = () => {
    //     console.log("update flag"); 
    //     if(this.props){
    //         console.log("props recvd");
    //         this.renderResults();
    //     } else if (!this.props){
    //         console.log("NO PROPS");
    //     }
    // }





    render() {
        return (
            <div
                className="resultsSection"
            >
                <h3>Results:</h3>
                {this.renderResults()}
            </div>
        )
    };
}



export default ResultsCard;