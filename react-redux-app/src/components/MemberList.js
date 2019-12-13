import React from 'react';
import { connect } from 'react-redux';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { getMembers } from '../actions/xivActions';

const MemberList = props => {
  const fetchMembers = e => {
    e.preventDefault();
    props.getMembers();
  };

  return (
    <div>
      <h1 inverse style={{color: "black", background: "rgba(0, 0, 0, 0.3)"}}>The Overlord's Blades</h1>
      <div className="blade-card-cont">
        <div className="blade-card">
        {props.freeCompanyMembers.map(freeCompanyMembers => (
          <Card key={freeCompanyMembers.ID} inverse body style={{backgroundImage:"linear-gradient(darkgray, black)"}}>
            <CardImg top width="100%" src={freeCompanyMembers.Avatar} alt="Card image cap" />
            <CardBody>
              <CardTitle>{freeCompanyMembers.Name}</CardTitle>
              <CardSubtitle>Rank: {freeCompanyMembers.Rank}</CardSubtitle>
            </CardBody>
          </Card>
        ))}
        </div>
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <Button onClick={fetchMembers}>Unsheathe Blades</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  freeCompanyMembers: state.freeCompanyMembers,
  error: state.error
});

export default connect (
  mapStateToProps,
  { getMembers }
)(MemberList);