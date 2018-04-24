import React, { Component } from 'react';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Text,
    Icon,
    Right,
    Left,
    CheckBox,
    Body,
    List,
    ListItem,
    Switch,
    Separator
} from 'native-base';


export default class Settings extends Component {
    
    // showFooter(isFalse) {
    //     console.log(isFalse);
    //     this.props.callbackFromParent(isFalse);
    // }

    render() {
        // { this.showFooter(false) }
        return (
            <Container>
                <Header />
                <Content>
                    <Separator bordered>
                        <Text>INSTÄLLNINGAR</Text>
                    </Separator>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon name="plane" />
                            </Left>
                            <Body>
                                <Text>Airplane Mode</Text>
                            </Body>
                            <Right>
                                <Switch value={false} />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="wifi" />
                            </Left>
                            <Body>
                                <Text>Wi-Fi</Text>
                            </Body>
                            <Right>
                                <Text>GeekyAnts</Text>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="bluetooth" />
                            </Left>
                            <Body>
                                <Text>Bluetooth</Text>
                            </Body>
                            <Right>
                                <Text>On</Text>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                    <Text></Text>
                    <Separator bordered>
                        <Text>ALLMÄNT</Text>
                    </Separator>
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon active name="logo-googleplus" />
                                <Text>Google Plus</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Icon active name="logo-facebook" />
                            <Text>Facebook</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                    <Separator bordered>
                        <Text>GÄLLANDE KARTOR</Text>
                    </Separator>
                    <ListItem>
                        <CheckBox checked={true} color="green" />
                        <Body>
                            <Text>SKUTT gröna gator </Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={true} color="blue" />
                        <Body>
                            <Text>BJÖRNEN blå gator</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={true} color="red" />
                        <Body>
                            <Text>TEGEBACKEN röda gator </Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={true} color="black" />
                        <Body>
                            <Text>VÄGGEN svarta gator </Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}


// import React, {

// AppRegistry,

// Component,

// StyleSheet,

// Text,

// View,

// Image

// } from 'react-native';


// import SettingsList from 'react-native-settings-list';



// export default class Settings extends Component {

// constructor(){

// super();

// this.onValueChange = this.onValueChange.bind(this);

// this.state = {switchValue: false};

// } 

// render() {

// var bgColor = '#DCE3F4';

// return (

// <View style={{backgroundColor:'#EFEFF4',flex:1}}>

// <View style={{borderBottomWidth:1, backgroundColor:'#f7f7f8',borderColor:'#c8c7cc'}}>

// <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16}}>Settings</Text>

// </View>

// <View style={{backgroundColor:'#EFEFF4',flex:1}}>

// <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>

// <SettingsList.Header headerStyle={{marginTop:15}}/>

// <SettingsList.Item

// //icon={

// // <Image style={styles.imageStyle} source={require('./images/airplane.png')}/>

// //}

// hasSwitch={true}

// switchState={this.state.switchValue}

// switchOnValueChange={this.onValueChange}

// hasNavArrow={false}

// title='Airplane Mode'

// />

// <SettingsList.Item

// //icon={<Image style={styles.imageStyle} source={require('./images/wifi.png')}/>}

// title='Wi-Fi'

// titleInfo='Bill Wi The Science Fi'

// titleInfoStyle={styles.titleInfoStyle}

// onPress={() => Alert.alert('Route to Wifi Page')}

// />

// <SettingsList.Item

// //icon={<Image style={styles.imageStyle} source={require('./images/blutooth.png')}/>}

// title='Blutooth'

// titleInfo='Off'

// titleInfoStyle={styles.titleInfoStyle}

// onPress={() => Alert.alert('Route to Blutooth Page')}

// />

// <SettingsList.Item

// //icon={<Image style={styles.imageStyle} source={require('./images/cellular.png')}/>}

// title='Cellular'

// onPress={() => Alert.alert('Route To Cellular Page')}

// />

// <SettingsList.Item

// //icon={<Image style={styles.imageStyle} source={require('./images/hotspot.png')}/>}

// title='Personal Hotspot'

// titleInfo='Off'

// titleInfoStyle={styles.titleInfoStyle}

// onPress={() => Alert.alert('Route To Hotspot Page')}

// />

// <SettingsList.Header headerStyle={{marginTop:15}}/>

// <SettingsList.Item

// //icon={<Image style={styles.imageStyle} source={require('./images/notifications.png')}/>}

// title='Notifications'

// onPress={() => Alert.alert('Route To Notifications Page')}

// />

// <SettingsList.Item

// //icon={<Image style={styles.imageStyle} source={require('./images/control.png')}/>}

// title='Control Center'

// onPress={() => Alert.alert('Route To Control Center Page')}

// />

// <SettingsList.Item

// //icon={<Image style={styles.imageStyle} source={require('./images/dnd.png')}/>}

// title='Do Not Disturb'

// onPress={() => Alert.alert('Route To Do Not Disturb Page')}

// />

// <SettingsList.Header headerStyle={{marginTop:15}}/>

// <SettingsList.Item

// //icon={<Image style={styles.imageStyle} source={require('./images/general.png')}/>}

// title='General'

// onPress={() => Alert.alert('Route To General Page')}

// />

// <SettingsList.Item

// //icon={<Image style={styles.imageStyle} source={require('./images/display.png')}/>}

// title='Display & Brightness'

// onPress={() => Alert.alert('Route To Display Page')}

// />

// </SettingsList>

// </View>

// </View>

// );

// }

// onValueChange(value){

// this.setState({switchValue: value});

// }



// }