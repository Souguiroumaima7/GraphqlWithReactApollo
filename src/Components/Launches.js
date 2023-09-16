import {React} from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo';
import launchItem from './Launch_item';
import mission_key from './mission_key';
import { Fragment } from 'react';

const LAUNCHES_QUERY = gql`
query LaunchesQuery {
   launches {
      flight_number 
      mission_name
      launch_date_local 
      launch_success
   }
}
`;
export default function Launches()  {
  return (
    <Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      <mission_key/>
      <Query query={LAUNCHES_QUERY}>
        {
          ({ loading, error, data }) => {
            if (loading)
              return <h4> loading ....</h4>
            if (error)
              console.log(error);
            return <Fragment>
              {
                data.Launches.map(launch => {
                  <launchItem key={launch.flight_number} launch={launch} />
                })
              }
            </Fragment>
           
          }
        }
      </Query>
    </Fragment>
  );
}
