
import React, { Component } from "react";
import { Container, Header, Content, Picker, Form } from "native-base";
import { useState, useEffect } from 'react'
import useFirebase from "../hooks/FireBaseHook";
import * as firebase from "firebase";

const DropDownMenu = (props) => {
    const selected = props.selected

    const {
        getLocations,
        locations,
    } = useFirebase();

    useEffect(() => {
        getLocations().then(console.log('locations?', locations))
        console.log('useEffect called')
        console.log(locations)
    }, []);

    const itemsList = () => {
        return (locations.map((item, index) => {
            return ((<Picker.Item label={item.name} key={index} value={item} />))
        }));
    };

    return (
        <Picker
            note
            style={{ width: 160 }}
            mode="dropdown"
            selectedValue={selected}
            onValueChange={(value) => { props.onSelect(value) }}>
            {itemsList()}
        </Picker>
    );
};

export default DropDownMenu

