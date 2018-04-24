import React, { Component } from 'react';
import { Container, Content, Header, View, Button, Icon, Fab } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class FAB extends Component {
    constructor() {
        super();
        this.state = {
            active: 'false'
        };
    }
    render() {
        return (
            <Container style={{ marginBottom: 210}}>
            <View style={{ flex: 1}}>
                <Fab
                    // active={this.state.active}
                    active={false}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#4A90E2', marginBottom: 210 }}
                    position="bottomRight"
                    // onPress={() => this.setState({ active: !this.state.active })}>
                    onPress={Actions.calendar}>
                    <Icon name="calendar" />
                    <Button style={{ backgroundColor: '#34A34F', marginBottom: 210 }}>
                        <Icon name="logo-whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998', marginBottom: 210 }} onPress={Actions.feedback}>
                        <Icon name="logo-facebook" />
                    </Button>
                    <Button style={{ backgroundColor: '#DD5144', marginBottom: 210 }} onPress={Actions.feedback}>
                        <Icon name="mail" />
                    </Button>
                </Fab>
            </View>
            </Container>
        );
    }
}