// React
import React from 'react';
import { connect } from 'react-redux';
// Actions
import { getSongs } from '../actions';
// Styling
import {
  Card, CardBody,
  CardTitle, Button
} from 'reactstrap';

const SongList = props => {
  console.log(props);

  return (
    <div>
      {/* Orchestrion List */}
      <Button inverse style={{color: "black", border: "1px solid black"}} onClick={props.getSongs}>Unfurl Orchestrion Roll</Button>
      {props.error && <p className="error">{props.error}</p>}
      <div className="song-list">
        {props.songs && !props.isFetching && props.songs.map(songs => (
          <Card key={songs.ID}>
            <CardBody>
              <CardTitle>{songs.Name}</CardTitle>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  songs: state.songReducer.songs,
  error: state.songReducer.error
});

export default connect (
  mapStateToProps,
  { getSongs }
)(SongList);