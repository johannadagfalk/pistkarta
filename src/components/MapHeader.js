import React, { Component } from 'react';
import { Header, Left, Right, Button, Icon, Body, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class MapHeader extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: '#4A90E2' }}>
                <Left>
                </Left>
                <Body >
                    <Title style={{ color: "white" }} >PISTKARTA</Title>

                </Body>
                <Right>
                <Button transparent onPress={Actions.feedback}>
                        <Icon name='at' style={{ color: "white" }}/>
                    </Button>
                    <Button transparent onPress={Actions.settings}>
                        <Icon name='settings' style={{ color: "white" }} />
                    </Button>
                </Right>
            </Header>
        );
    }
}

