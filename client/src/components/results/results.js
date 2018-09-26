import React from 'react';
import SaveButton from '../save-button';

class ResultsCard extends React.Component {

    state = {

    }


    render() {
        return (

            <div className="resultsSection">
                <h3>Results:</h3>
                <ul>
                    <li>
                        {}
                        <SaveButton />
                    </li>
                </ul>
            </div>
        )
    }
}


export default ResultsCard;