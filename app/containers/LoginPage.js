import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ListView,
    AsyncStorage,
    Platform,
    TouchableOpacity,
    Button
} from 'react-native';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as homeActions from '../actions/home_act';
import * as navigationActions from '../actions/navigation_act';

import PlayerSearch from './PlayerSearch';
import PlayerProfile from './PlayerProfile';

import _ from 'lodash';
import UserManager from 'oidc-client';

import Colors from '../themes/Colors';
import base from '../themes/BaseStyles';
import Fonts from '../themes/Fonts';

export const mapStateToProps = state => ({
    alpha: state.settingsState.alpha,
    mod: state.settingsState.mod,
    legend: state.settingsState.legend,
    secondLegend: state.settingsState.secondLegend,
    legendHex: state.settingsState.legendHex,
    profile: state.homeState.profile
});

export const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({...homeActions, ...navigationActions}, dispatch)
});

class Login extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        var settings = {
            authority: 'http://steamcommunity.com/openid',
            client_id: 'ClaimedID',
            redirect_uri: '',
            response_type: 'claimed_id id',
            scope: 'openid',
        };
        var client = new UserManager(settings);
        // var test = new OidcClient;
    }

    onLoginPressed() {
        console.log("Pressed");
    }

    render() {
        return (
            <View style = {containerStyle}>
                <View style = {styles.contentContainer}>
                    <Text style = {styles.noDataText}>
                        This is login page
                    </Text>
                </View>
            </View>
        )
    }
}

const baseStyles = _.extend(base.general, {
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    localContainer: {
        flexDirection: 'column',
        alignSelf: 'stretch',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: Colors.mainBackground
    }
});

const styles = StyleSheet.create(baseStyles);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
