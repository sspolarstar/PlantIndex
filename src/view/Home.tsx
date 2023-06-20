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
        <View>
            <Button>
               <Text>Add A Plant</Text>
            </Button>
        </View>
        <ScrollView>
            <View>
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
                <View style={styles.OptionButton}>
                        <Button>
                            <Text> All Plants '&gt;' </Text>
                        </Button>
                        <Button>
                            <Text> Plants by Water Usage '&gt;' </Text>
                        </Button>
                        <Button>
                            <Text> Plants by Zone '&gt;' </Text>
                        </Button>
                        <Button>
                            <Text> All Plants '&gt;' </Text>
                        </Button>
                        <Button>
                            <Text> All Plants '&gt;' </Text>
                        </Button>
                        <Button>
                            <Text> All Plants '&gt;' </Text>
                        </Button>
                        <Button>
                            <Text> All Plants '&gt;' </Text>
                        </Button>
                </View>

            </View>
        </ScrollView>
    </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    OptionButton: {
        width: '100%',
        height: 25,
        borderRadius: 15,
        borderWidth: 4,
        margin: '1.2%',
        padding: '1.2%',
    },
    SwiperView: {
        //flex: 1,
        width: '100%',
        height: 125,
        borderWidth: 1,
        margin: '0.5%',
        padding: '3%',
        
    },
    SearchBarWrapper: {
        paddingTop: '7%',
        margin: '2%',
    },
    buttonFormat: {
        alignContent: 'center',
    },

});

export default Home;