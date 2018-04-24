// import React, { Component } from 'react';
// import { Image } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


var custom = require('../101.jpg');
var pistmap = require('../Assets/pistmap.png');

// export default class Carlendar extends Component {
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Content>
//           <Card style={{flex: 0}}>
//             <CardItem>
//               <Left>
//                 <Thumbnail source={pistmap} />
//                 <Body>
//                   <Text>Seminarium 1</Text>
//                   <Text note>Juni 15, 2018</Text>
//                 </Body>
//               </Left>
//             </CardItem>
//             <CardItem>
//               <Body>
//                 <Image source={custom} style={{height: 200, width: 200}}/>
//                 <Text>
//                   Kom och lyssna på allt om tillgänglighet!
//                 </Text>
//               </Body>
//             </CardItem>
//             <CardItem>
//               <Left>
//                 <Button transparent textStyle={{color: '#87838B'}}>
//                   <Icon name="logo-facebook" />
//                   <Text>1,926 likes</Text>
//                 </Button>
//               </Left>
//             </CardItem>
//           </Card>
//         </Content>
//       </Container>
//     );
//   }
// }

import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';


const cards = [
  {
    text: 'Seminarium 1',
    name: 'lägg till i kalender',
    image: require('../Assets/Almedalen.png'),
  },
  {
    text: 'Seminarium 2',
    name: 'lägg till i kalender',
    image: require('../Assets/people.jpg'),
  },
  {
    text: 'Seminarium 3',
    name: 'lägg till i kalender',
    image: require('../Assets/almedalen2018.jpg')
  },
];
export default class DeckSwiperExample extends Component {
  render() {
    return (
      <Container style={{ marginTop: 25 }}>
        <Header />
        <View>
          <DeckSwiper
          ref={(c) => this._deckSwiper = c}
            dataSource={cards}
             
                  
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>För andra året i rad genomförs Tillgänglighetsarenan. Syftet är att lyfta tillgänglighet och utformning i samhällsdebatten och ge frågorna en tydlig hemvist i Almedalen.</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 200, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="add-circle" style={{ color: 'blue' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 10, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Föregående</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            
            <Text>Nästa </Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
      </Container>
    )}
}