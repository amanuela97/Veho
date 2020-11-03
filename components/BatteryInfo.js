import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from 'react-native-easy-grid';

const BatteryInfo = (props) => {
    const [batteryStatus, setBatteryStatus] = useState(props.batteryStatus)

    // GET-function from parent changes shown batteryStatus
    return (
        <View style={styles.batteryContent}>
            <Grid style={styles.batteryGrid}>
                <Row size={3}>
                    <Icon name="bolt" size={75} color="#000"></Icon>
                </Row>
                <Row size={1}>
                    <Text style={styles.batteryText}>{batteryStatus}%</Text>
                </Row>
            </Grid>
        </View>
    );
};

// StyleSheet is needed to get custom content working. Global style will be used for colors and fonts
const styles = StyleSheet.create({
    batteryContent: {
        height: 170,
        alignItems: 'center',
        margin: 8
    },
    batteryGrid: {
        width: 170,
        height: 170,
        backgroundColor: 'rgba(255,255,255,1.0)',
        borderRadius: 170,
        alignItems: 'center',
        padding: 30,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1
    },
    batteryText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 28
    }
});

export default BatteryInfo;