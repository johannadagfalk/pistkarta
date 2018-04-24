import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation 
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Card from './common/Card';
import CardSection from './common/CardSection';
import { Icon, Left, Right, Body, Thumbnail, Separator } from 'native-base';

var bild = require('./Assets/Almedalen.png');

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    //tillagt
    constructor() {
        super();
        this.state = { informationExpanded: false };
        this.state = { trackedID: null }
      }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ paddingLeft: 10, paddingRight: 10 }}>
                    {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    // turnBackArrow(selectID, trackID) {
    //     if (selectID!==trackID) {

    //     }
    //     else { }
    // }

    //tillagt
    renderIcon() {
        console.log("in renderIcon")
        if (this.state.informationExpanded) {
            this.setState({ informationExpanded: false })
        }
        else {
            this.setState({ informationExpanded: true })
        }
    }

    renderInformation(selectedID) {
        if(this.state.informationExpanded) {
            this.props.selectLibrary(100)
        }
        else {
            this.props.selectLibrary(selectedID)
        }
    }

    buttonFunction(selectedID) {
       // this.setState({ trackedID: selectedID })
        // this.turnBackArrow(selectedID, trackedID)
        this.renderIcon();
        this.renderInformation(selectedID)

    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        // const { separera } = this.props.separera;

        //tillagt
        const expandIcon = "arrow-down"
        const shrinkIcon = "arrow-up"

        return (
            <TouchableWithoutFeedback
            onPress={() => this.buttonFunction(id)}


            >
                <View>
                
                    <CardSection>
                    
                    
                <Thumbnail source={bild} />
              
                        <View style={{ flex: 2 }}>
                        <Text style={titleStyle}>
                        {title}
                        </Text>
                        <Text>
                            
                        </Text>
                        </View>
                     
                     
                        <View style={{ flex: 1 }}>
                        {/* <Icon name= "arrow-down" style={{ color: 'black', left: 200 }} /> */}  
                        <Icon name={(this.state.informationExpanded === true) ? shrinkIcon : expandIcon} style={{ color: 'black', left: 65 }} />
                        </View>
                      
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem); 
