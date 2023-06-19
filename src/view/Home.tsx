import * as react from 'react';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const Home = () =>{
    useEffect(()=>{
        
    }, [])

    return(
        <ScrollView>
            <Text> We're here!</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    buttonFormat: {
        alignContent: 'center',
    },

});

export default Home;