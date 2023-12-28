import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/core";
import {RootState} from "../../../redux/rootReducer.tsx";
import {connect} from "react-redux";
import React from "react";
import TransactionItem from "../../home/components/TransactionItem";
import Icon from 'react-native-vector-icons/Fontisto';
import CategoryItem from "../../shared/components/CategoryLIstItem";
import {ICategoryItem} from "../../../redux/category/reducer/CategoryReducer.tsx";

interface TransactionListProps {
    categories: ICategoryItem;
}


function CategoryList(props: TransactionListProps) {
    const navigation = useNavigation();

    function loadData() {
        let categoryArray = makeCategoryArray();
        return categoryArray.map((value, key) => (
            <TouchableOpacity key={key}

                              onPress={() => {
                                  // @ts-ignore
                                  navigation.navigate('CategoryPage',
                                      {

                                          categoryID: value.categoryID

                                      })
                              }}>
                <CategoryItem name={value.name} allocated={value.allocated}
                              available={value.available}/>
            </TouchableOpacity>
        ));
    }

    function makeCategoryArray() {
        let temp = [];
        for (let key in props.categories) {
            let tempItem = props.categories[key];
            tempItem = {
                ...tempItem,
                categoryID: key,
            };
            temp.push(tempItem);
        }

        return temp;
    }


    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'column',
            width: '90%',
            height: '100%',
            borderRadius: 15,
            backgroundColor: '#FAF9F9',
        }, searchBox: {
            display: 'flex',
            flexDirection: 'row',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '10%',
            width: '100%',
            marginBottom: 10,
            marginLeft: 20,
        }


    });

    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <Icon name="search" size={25}/>
                <TextInput placeholder={"Search"}/>

            </View>
            <ScrollView
                contentContainerStyle={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '95%',
                }}>
                {loadData()}
            </ScrollView>
        </View>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        categories: state.categories,
    };
};
export default connect(mapStateToProps)(CategoryList);
