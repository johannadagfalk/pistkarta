import React, { Component } from 'react';
import { Header, Left, Right, Button, Icon, Body, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class MapHeader extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: '#008ccf' }}>
                <Left>
                <Button transparent onPress={Actions.information}>
                        <Icon name='information-circle' style={{ color: "white" }}/>
                    </Button>
                </Left>
                <Body >
                    <Title style={{ color: "white" }} >PISTKARTA</Title>

                </Body>
                <Right>
                <Button transparent onPress={Actions.feedback}>
                        <Icon name='text' style={{ color: "white" }}/>
                    </Button>
                    <Button transparent onPress={Actions.calendar}>
                        <Icon name='calendar' style={{ color: "white" }} />
                    </Button>
                </Right>
            </Header>
        );
    }
}

