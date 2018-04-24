import React, { Component } from 'react';
import { Header, Left, Right, Button, Icon, Body, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class InfoHeader extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: '#4A90E2' }}>
                <Left>
                </Left>
                <Body>
                    <Title style={{ color: "white" }}>Information</Title>
                </Body>
                <Right>
                <Button transparent onPress={Actions.calendar}>
                        <Icon name='calendar' style={{ color: "white" }}/>
                    </Button>
                </Right>
            </Header>
        );
    }
}
