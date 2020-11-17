import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { Button, Form, Input, Container, Text, Item, Label, Content } from 'native-base';
import useRegisterForm from '../hooks/RegisterHook.js';
import * as firebase from 'firebase';
import 'firebase/firestore';




const RegisterForm = ({ navigation, toLogin}) => {
    const {
        handleEmailChange,
        handleFirstNameChange,
        handleLastNameChange,
        handleConfirmPasswordChange,
        handlePasswordChange,
        inputs,
        errors
    } = useRegisterForm();

    const register = async () => {
            let check = true;
            console.log('inputs', inputs);
            if(inputs.firstName !== '' && inputs.lastName !== '' && inputs.email !== '' && inputs.password !== '' && inputs.confirmPassword !== '' && inputs.password === inputs.confirmPassword) {
                await firebase.auth().createUserWithEmailAndPassword(inputs.email, inputs.password).catch(function (error) {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                    check = false
                });
                await firebase.auth().signInWithEmailAndPassword(inputs.email, inputs.password).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                    check = false;
                });
                const db = firebase.firestore();
                (await db.collection('users').add({
                    email: inputs.email,
                    firstname: inputs.firstName,
                    lastname: inputs.lastName
                }));

                if (check === true) {
                    navigation.replace('AddCarDetails')
                } else {
                    console.log("account not created")
                }
            } else {
                if(inputs.firstName === ''){
                     handleFirstNameChange(inputs.firstName)
                }
                if(inputs.lastName === ''){
                    await handleLastNameChange(inputs.lastName)
                }
                if(inputs.email === ''){
                    await handleEmailChange(inputs.email)
                }
                if(inputs.password === ''){
                    await handlePasswordChange(inputs.password)
                }
                if(inputs.confirmPassword === ''){
                   await handleConfirmPasswordChange(inputs.confirmPassword)
                }

            }
        console.log("register pushed", errors)
    };

    return (
        <Form>
            <Item floatingLabel>
                <Label>First Name</Label>
                <Input
                value={inputs.firstName}
                onChangeText={handleFirstNameChange}
                />
            </Item>
            <Item floatingLabel>
                <Label>Last Name</Label>
                <Input
                value={inputs.lastName}
                onChangeText={handleLastNameChange}
                />
            </Item>
            <Item floatingLabel>
                <Label>Email</Label>
                <Input
                keyboardType='email-address'
                value={inputs.email}
                onChangeText={handleEmailChange}
                />
            </Item>
            <Item floatingLabel>
                <Label>Password</Label>
                <Input

                secureTextEntry
                value={inputs.password}
                onChangeText={handlePasswordChange}
                />
            </Item>
            <Item floatingLabel>
                <Label>Retype password</Label>
                <Input
                secureTextEntry
                value={inputs.confirmPassword}
                onChangeText={handleConfirmPasswordChange}
                />
            </Item>
            {errors.firstName || errors.lastName || errors.email || errors.password || !inputs.firstName || !inputs.lastName || !inputs.email || !inputs.password || !inputs.confirmPassword ?
            <Button
                full
                disabled
                style={GlobalStyles.button}
                onPress={register}
            >
                <Text>
                    Register
                </Text>
            </Button>
                :
                <Button
                    full
                    style={GlobalStyles.button}
                    onPress={register}
                >
                    <Text>
                        Register
                    </Text></Button>}
            <Button full transparent style={GlobalStyles.button} onPress={toLogin}>
                <Text>Back to login</Text>
            </Button>
        </Form>
    );
};

export default RegisterForm;
