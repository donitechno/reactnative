import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { View,Text, StyleSheet } from 'react-native'

class HeaderComponent extends Component {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Testing</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default HeaderComponent;
