import React from 'react';


class SearchForm extends React.Component {

    style = {

    }


    render() {
        return (
            <form>
                <h3>Search:</h3>
                <div className="form-group">
                    <label >Topic</label>
                    <input type="text" className="form-control" id="topic" placeholder="Input topic of interest!" />
                </div>
                <div className="form-group">
                    <label >Start Year</label>
                    <input type="text/date" className="form-control" id="start-year" placeholder="YYYY" />
                </div>
                <div className="form-group">
                    <label >End Year</label>
                    <input type="text/date" className="form-control" id="end-year" placeholder="YYYY" />
                </div>
            </form>
        )
    }
}


export default SearchForm;