import React from 'react';
import { Form, Item, Input, Text, Spinner } from 'native-base';
import { StyleSheet } from 'react-native';
import GlobalButton from './GlobalButton';
import ErrorText from './ErrorText';

const AddManagerForm = (props) => {

    const {
        foundUser,
        add,
        search,
        error,
        searching,
        adding,
        handleEmailInput,
        clear
    } = props;

    return(
        <>
            <Text style={styles.titleText}>Add a manager</Text>
            {foundUser ?
            adding ?
            <Spinner />
            :
            <>
                <Text>Found user!</Text>
                <Text>Email: {foundUser.email}</Text>
                <Text>Full name: {foundUser.firstname} {foundUser.lastname} </Text>
                <GlobalButton text="Add as a manager" onPress={ () => add(foundUser.id) } />
                <GlobalButton text="Clear" transparent={true} onPress={clear} />
            </>
            :
            searching ?
            <Spinner />
            :
            error.type ==='searchUser' ?
            <ErrorText text={error.message} />
            :
            <>
                <Form>
                    <Item>
                        <Input autoCapitalize="none" keyboardType="email-address" placeholder="Enter email..." onChangeText={text => handleEmailInput(text) } />
                    </Item>
                </Form>
                <GlobalButton text="Search" onPress={search} />
            </>}
        </>
    );
}

const styles = StyleSheet.create({ 
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
    },
});

export default AddManagerForm;
