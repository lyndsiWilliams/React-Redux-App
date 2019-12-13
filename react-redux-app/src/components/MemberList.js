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
      <h1>The Overlord's Blades</h1>
      <div>
        {props.freeCompanyMembers.map(freeCompanyMembers => (
          <Card key={freeCompanyMembers.ID}>
            <CardImg top width="100%" src={freeCompanyMembers.Avatar} alt="Card image cap" />
            <CardBody>
              <CardTitle>{freeCompanyMembers.Name}</CardTitle>
              <CardSubtitle>Rank: {freeCompanyMembers.Rank}</CardSubtitle>
            </CardBody>
          </Card>
          // <p key={freeCompanyMembers.ID}>{freeCompanyMembers.Name}</p>
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchMembers}>Display Blades</button>
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