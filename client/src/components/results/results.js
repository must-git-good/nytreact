import React from 'react';
import SaveButton from '../save-button';


class ResultsCard extends React.Component {

    state = {
        articles: ["No articles accessed yet."]
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




    render() {
        return (
            <div className="resultsSection">
                <h3>Results:</h3>
                <ul>
                    <li>
                        {this.props.articles}
                        <SaveButton />
                    </li>
                    <li>
                        {this.props.articles}
                        <SaveButton />
                    </li>
                </ul>
            </div>
        )
    };
}


ResultsCard.defaultProps = {
    name: "No news loaded yet!"
};


export default ResultsCard;