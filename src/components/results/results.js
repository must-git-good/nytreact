import React from 'react';
import SaveButton from '../save-button';

class ResultsCard extends React.Component {

    style = {

    }


    render() {
        return (

            <div className="resultsSection">
                <h3>Results:</h3>
                <ul>
                    <li>
                        Results: <SaveButton />
                    </li>
                </ul>
            </div>
        )
    }
}


export default ResultsCard;