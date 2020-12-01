
import React, { Component } from "react";
import { Container, Header, Content, Picker, Form } from "native-base";
import { useState, useEffect } from 'react'
import useFirebase from "../hooks/FireBaseHook";
import * as firebase from "firebase";

const CarDropdown = (props) => {
    const selected = props.selected

    const {
        getUserCars,
        carArray,
    } = useFirebase();

    useEffect(() => {
        getUserCars()
    }, []);

    const itemsList = () => {
        return (carArray.map((item, index) => {
            return ((<Picker.Item label={item.name} key={index} value={item} />))
        }));
    };

    return (
        <Picker
            note
            mode="dropdown"
            selectedValue={selected}
            onValueChange={(value) => { props.onSelect(value) }}>
            {itemsList()}
        </Picker>
    );
};

export default CarDropdown