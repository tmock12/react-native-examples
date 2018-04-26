import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, FlatList } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  _renderLibrary({ item: library }) {
    return <ListItem library={library} />;
  }

  _keyExtractor(item, index) {
    return item.id.toString();
  }

  render() {
    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={this.props.libraries}
        renderItem={this._renderLibrary}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
