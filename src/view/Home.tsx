import React, * as react from 'react';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useIsFocused } from '@react-navigation/native';
import { Button, NativeBaseProvider } from 'native-base';
import Swiper from 'react-native-swiper';

const Home = () =>{
    let series = [1,2,3,4,5];

    useEffect(()=>{
        
    }, [])

    return(
    <NativeBaseProvider>
        {/* Search Bar */}
        <View style={styles.SearchBarWrapper}>
            <Text>
                SearchBAR
            </Text>
        </View>
        {/* Add plant button/Demo Plants*/ }
        <View>
            <Button>
               <Text>Add A Plant</Text>
            </Button>
        </View>
        <ScrollView>
            <View style={styles.swiperWrapper}>
                <Swiper
                    showsButtons = {false}
                    loop = { false }
                    showsPagination={false}
                    >
                        {series?.map((num, index) => ( 
                            <View style={styles.SwiperView}
                            key={index}>
                                <Text>
                                    {num} Plant data Big box
                                </Text>
                            </View>
                        ))}
                </Swiper>
            </View>
                
                        <Button style={styles.buttonFormat}>
                            <Text style={styles.buttonText}> All Plants &gt; </Text>
                        </Button>
                        <Button style={styles.buttonFormat}>
                            <Text> Plants by Water Usage &gt; </Text>
                        </Button>
                        <Button style={styles.buttonFormat}>
                            <Text> Plants by Zone &gt; </Text>
                        </Button>
                        <Button style={styles.buttonFormat}>
                            <Text> All Plants &gt; </Text>
                        </Button>
                        <Button style={styles.buttonFormat}>
                            <Text> All Plants &gt;</Text>
                        </Button>
                        <Button style={styles.buttonFormat}>
                            <Text> All Plants &gt; </Text>
                        </Button>
                        <Button style={styles.buttonFormat}>
                            <Text> All Plants &gt; </Text>
                        </Button>
                        <Button style={styles.buttonFormat}>
                            <Text> All Plants &gt; </Text>
                        </Button>
                        <Button style={styles.buttonFormat}>
                            <Text> All Plants &gt; </Text>
                        </Button>

            
        </ScrollView>
    </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    swiperWrapper:{
        height: '35%',
       //margin: '3%',
    },
    SwiperView: {
        flexDirection: 'row',
        height: '88%',
        borderWidth: 1,
        margin: '3%',
    },
    SearchBarWrapper: {
        alignContent: 'center',
        alignItems: 'center',
        marginTop: '21%',
        marginBottom: '7%',
        margin: '2%',
        height: 31,
        borderWidth: 1,
        borderRadius: 5,

    },
    buttonFormat: {
        flexDirection: 'row',
        height: 50,        
        padding: 25,
        margin: '1.2%',
        borderRadius: 12,
        borderWidth: 1,
    },
    buttonText: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
    },

});

export default Home;