import React from 'react'
import './search.css'
import API from '../../utils/API'


class SearchForm extends React.Component {

    state = {
        topic: "",
        startYear: +"",
        endYear: +""
    }

    handleSubmit = event => {
        event.preventDefault();
        
        // this.setState({
        //     topic: "",
        //     startYear: +"",
        //     endYear: +""
        // });

        console.log(this.state.topic);
        console.log(this.state.startYear);
        console.log(this.state.endYear);
        const {topic, startYear, endYear} = this.state;
        this.props.clickHandler(topic, startYear, endYear)
        // API.getArticles(this.state.topic,this.state.startYear,this.state.endYear)
        // .then(res => console.log(res))
        // .catch(err => console.log("Error in API getArticle call: ",err));
        //THEN WE ACTUALLY DO SOMETHING WITH IT ONCE WE HAVE AN API.
    };

    // componentDidMount() {
    //     API.getBaseBreedsList()
    //       .then(res => this.setState({ breeds: res.data.message }))
    //       .catch(err => console.log(err));
    //   }

    // handleChange = event => {
    //     this.setState( 
    //         {value: event.target.value});
    //   }

      handleChange = event => {
       const {name, value} = event.target;
       this.setState({
           [name]: value
       })
      }

    render() {
        return (
            <div className="searchSection">
            <form onSubmit={this.handleSubmit}>
                <h3>Search:</h3>
                <div className="form-group">
                    <label >Topic</label>
                    <input 
                    type="text" 
                    className="form-control searchInput"
                    id="topic"
                    name="topic"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Input topic of interest!" />
                    
                </div>
                <div className="form-group">
                    <label >Start Year</label>
                    <input 
                    type="text/date" 
                    className="form-control" 
                    id="startYear" 
                    name="startYear" 
                    placeholder="YYYY"
                    value={this.state.value}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label >End Year</label>
                    <input 
                    type="text/date" 
                    className="form-control" 
                    id="endYear" 
                    name="endYear" 
                    placeholder="YYYY"
                    value={this.state.value}
                    onChange={this.handleChange} />
                </div>
                <button 
                    className="btn btn-primary submitBtn"
                    type="Submit"
                >
                    Search!
                </button>
            </form>
            </div>
        )
    }
}


export default SearchForm;