import React, { Component } from 'react';
import { CardSection } from './common';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { titleStyle, contentStyle } = styles;
    const { id, title, description } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.props.expanded &&
            <CardSection>
              <Text style={contentStyle}>
                {description}
              </Text>
            </CardSection>}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  contentStyle: {
    paddingLeft: 15,
    flex: 1,
  },
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
