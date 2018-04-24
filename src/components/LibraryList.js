// import React, { Component } from 'react';
// import { ListView, View, Image } from 'react-native';
// import { connect } from 'react-redux';
// import ListItem from './ListItem';
// import Map from './Map';
// import { Button } from './common';
// import Test from './Test';

// class LibraryList extends Component {

//    componentWillMount() {
//        const ds = new ListView.DataSource({
//            rowHasChanged: (r1, r2) => r1 !== r2
//         });

//         this.dataSource = ds.cloneWithRows(this.props.libraries);
//    }


// //    //NYTT
// //    onButtonPress = () => {
// //        if (this.state.onFirstPage) {
// //            this.setState({ onFirstPage: false });
// //            console.log(this.state.onFirstPage);
// //        } else {
// //            this.setState({ onFirstPage: true });
// //            console.log(this.state.onFirstPage);
// //        }
// //        };

//    //SLUT
// /*  renderContent() {
//     switch (this.state.onFirstPage) {
//        case true:
//            return ( */
       
//    renderRow(library) {
//        return <ListItem library={library} />;
//    }
// //    renderMap() {
// //        return <Map />
// //    }

//    renderList() {
//        return (
//         <ListView
//        dataSource={this.dataSource}
//        renderRow={this.renderRow}
//         />
//        );
//    }


// //    renderContent() {
// //     console.log(this.state.onFirstPage);
// //     switch (this.state.onFirstPage) {
        

// //         case true:
// //             return (
// //             <View>
// //             <Button onPress={this.onButtonPress}>First</Button>
// //             <View>
// //             {this.renderList()}
// //             </View>
// //             </View> 
// //             );
// //         case false: 
// //         return (
// //             <View>
// //             <Button onPress={this.onButtonPress}>Second</Button>
// //             <View>
// //             {this.renderMap()}
// //             </View>
// //             </View> 
// //             );

// //         default: 
// //             return (
// //             <View>
// //             <Button onPress={this.onButtonPress}>Third</Button>
// //             </View>
// //             );
// //     }
// // }

// render() {
//     return (
//          <View> 
//          <View>
//              {this.renderList()}
//          </View>
//          <Image
//              source={require('./Assets/img1.png')}
//          />
//          <Image
//              source={require('./Assets/img2.png')}
//              style={{height: 50}}
//          />
//          {/* <Image
//              source={require('./Assets/img3.png')}
//              style={{width: 80, height: 80}}
//          />
//          <Image
//              source={require('./Assets/img4.png')}
//              style={{width:200, height: 80}}
//          /> */}
//          </View>

//     );
//    }

// }


// const mapStateToProps = state => ({ libraries: state.libraries });

// export default connect(mapStateToProps)(LibraryList);

import React, { Component } from 'react';
import { Text } from 'react-native';
import { Content } from 'native-base';

export default class Settings extends Component {
    render() {
        return (
            <Content style= {{marginTop: 75}}><Text>Hello</Text></Content>
        );
    }
}
module.export = Settings;