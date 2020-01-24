// React
import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
// Actions
import { getMembers } from '../actions';
// Styling
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const MemberList = props => {
  console.log('MEMBERLIST PROPS', props);

  return (
    <div>
      {/* Blade Cards */}
      <Button style={{color: "black", border: "1px solid black"}} onClick={props.getMembers}>Unsheathe Blades</Button>
      {props.error && <p className="error">{props.error}</p>}
      <br/>
      <br/>
      {props.isFetching && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      <div className="blade-card-cont">
        <div className="blade-card">
          {props.freeCompanyMembers && !props.isFetching && props.freeCompanyMembers.map(freeCompanyMembers => (
            <Card key={freeCompanyMembers.ID} style={{borderRadius: "10px", border: "5px solid black"}}>
              <CardImg top width="100%" src={freeCompanyMembers.Avatar} alt="Card image cap" />
              <CardBody>
                <CardTitle>{freeCompanyMembers.Name}</CardTitle>
                <CardSubtitle>Rank: {freeCompanyMembers.Rank}</CardSubtitle>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  freeCompanyMembers: state.xivReducer.freeCompanyMembers,
  error: state.xivReducer.error,
  isFetching: state.xivReducer.isFetching
});

export default connect (
  mapStateToProps,
  { getMembers }
)(MemberList);