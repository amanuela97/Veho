import React, { useEffect, useState } from 'react';
import { Content, Container, Text, Button, StyleProvider } from 'native-base';
import CustomHeader from '../components/CustomHeader';
import RegisterCarForm from '../components/RegisterCarForm';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import * as firebase from 'firebase';

const AddCarDetails = ({ navigation }) => {
    const [currentUser, setCurrentUser] = useState('')

    useEffect(() => {
        const user = firebase.auth().currentUser
        setCurrentUser(user.uid)
    });

    return (
        <StyleProvider style={getTheme(platform)}>
            <Container>
                <CustomHeader handleBackButton={() => navigation.goBack(null)} title='Add car details' subtitle={currentUser} />
                <Content padder>
                    <RegisterCarForm navigation={navigation} />
                </Content>
            </Container>
        </StyleProvider>
    );
}

export default AddCarDetails;