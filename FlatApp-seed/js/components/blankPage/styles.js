'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null
    },
    logoHeader: {
        width: 20,
        height: 28,
        alignSelf: 'center'
    }
});

