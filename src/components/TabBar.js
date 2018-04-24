import React, { Component } from 'react';
import { Text, View, TabBarIOS, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import Map from './pages/Map';
import { Button } from './common';
import Test from './Test';
import LibraryList from './LibraryList';

class TabBar extends Component {
    state = { selectedTab: 0 };

    constructor() {
        super();
        this.state = {
            selectedTab: 0
        };
        
    }

    handelTabPress(tab) {
        this.setState({ selectedTab: tab })
    }

    render() {
        return (
            <TabBarIOS>
                    <TabBarIOS.Item 
                        systemIcon="favorites"
                        selected={this.state.selectedTab === 0}
                        onPress={this.handelTabPress.bind(this, 0)}
                    >
                    <LibraryList />
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="more"
                        selected={this.state.selectedTab === 1}
                        onPress={this.handelTabPress.bind(this, 1)}
                    >
                        <Map />
                    </TabBarIOS.Item>
                </TabBarIOS>

        )
    }
}
const styles = StyleSheet.create({
    text: {
      textAlign: 'center',
      color: '#333333',
      marginTop: 50,
    },
    view: {
      backgroundColor: '#fed',
      flex: 1
    }
  });



export default TabBar;

