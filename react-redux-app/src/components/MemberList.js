// React
import React from 'react';
import { connect } from 'react-redux';
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
      <div className="blade-card-cont">
        <div className="blade-card">
          {props.freeCompanyMembers && !props.isFetching && props.freeCompanyMembers.map(freeCompanyMembers => (
            <Card key={freeCompanyMembers.ID}>
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
  error: state.xivReducer.error
});

export default connect (
  mapStateToProps,
  { getMembers }
)(MemberList);