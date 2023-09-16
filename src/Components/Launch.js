import React, { Component } from 'react'
import { gql } from 'graphql-tag';
import { Query } from 'react-apollo';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
 Query LaunchQuery($flight_number:Int !) {
   launch(flight_number : $flight_number) {
     flight_number 
     mission_name
     launch_year 
     launch_success 
     launch_date_local ,
     rocket {
       rocket_id 
       rocket_name 
       rocket_type

     }
   }
 }
`;
export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt();
    return (
        <Fragment>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}> 
          {
            ({loading , error , data }) => {
              if (loading) return <h4>loading ...</h4>
              if (error) return console.log(error);
              
              return <div>
                <h1 className="display-4 my-3"> <span className ="text-dark">mission</span>:{data.launch.mission_name}</h1>
              </div> 
            }
          }
        
          </Query>
      </Fragment>
    )
  }
}

export default Launch