
'use strict';

var React = require('react-native');
var { StyleSheet, Dimensions, Platform } = React;

var primary = require('../../themes/variable').brandPrimary;

module.exports = StyleSheet.create({
    header: {
        width: Dimensions.get('window').width,
        paddingLeft: 15,
        paddingRight: 15
    },
    rowHeader: {
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignSelf: 'stretch',
        paddingTop: Platform.OS === 'android' ? 7 : 0
    },
    btnHeader: {
        paddingTop: 10
    },
    imageHeader: {
        height: 25, 
        width: 95,
        resizeMode: 'contain',
        marginTop: 10
    },
    container: {
        flex: 1,
        width: null,
        height: null
    },
    bg: {
        backgroundColor: primary
    },
    signupHeader: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        padding: 5
    },
    roundedButton: {
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius:30,
        width: 60,
        height:60
    },
    profilePic: {
        width: 60, 
        height: 60,
        borderRadius: Platform.OS === 'android' ? 60 : 30
    },
    signupContainer: {
        marginTop: 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    inputGrp: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginBottom: 20,
        borderWidth: 0, 
        paddingLeft: 15
    },
    input: {
        paddingLeft: 15
    },
    notificationSwitchContainer: {
        backgroundColor: '#fff', 
        padding: 20
    },
    notificationHeader: {
        color: primary,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    switchText: {
        color: '#222',
        fontWeight: 'bold', 
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'flex-start'
    },
    aswitchText: {
        color: '#222',
        fontWeight: 'bold', 
        paddingTop: 10,
        paddingBottom: 10
    },
    switchContainer: {
        alignSelf: 'flex-end'
    },
    aswitchContainer: {
        // alignSelf: 'flex-end'
    },
    switch: {
        transform: [{scaleX: 0.75}, {scaleY: 0.75}],
        alignSelf: 'flex-end',
        marginTop: Platform.OS === 'android' ? -3 : -5,
        paddingTop: Platform.OS === 'android' ? 0 : 10,
        paddingBottom: Platform.OS === 'android' ? 0 : 10
    }
});