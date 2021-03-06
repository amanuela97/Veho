import React from 'react';
import { FlatList } from 'react-native';
import AdminPanelListItem from './AdminPanelListItem';


const AdminPanelList = ({ data, remove, removing, error, edit, switchToLocation, currentUser, switching }) => (
    <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
        <AdminPanelListItem 
            item={item} 
            currentUser={currentUser} 
            switchToLocation={switchToLocation} 
            remove={remove} 
            removing={removing} 
            error={error} 
            edit={edit}  
            switching={switching}
        />}
    />
);

export default AdminPanelList;
