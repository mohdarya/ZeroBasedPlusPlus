import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/core";
import {RootState} from "../../../redux/rootReducer.tsx";
import {connect} from "react-redux";
import React from "react";
import TransactionItem from "../../home/components/TransactionItem.tsx";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ICategoryItem} from "../../../redux/category/reducer/CategoryReducer.tsx";
import CategoryItem from "./CategoryListItem.tsx";

interface TransactionListProps {
    categories: ICategoryItem;
}


function CategoryList(props: TransactionListProps) {
    const navigation = useNavigation();

    function loadData() {
        let categoryArray = makeCategoryArray();
        return categoryArray.map((value, key) => (
            <TouchableOpacity key={key} onPress={() => {
                // @ts-ignore
                navigation.navigate('AllocationAmountEntry',
                    {

                        categoryID: value.categoryID

                    })
            }}>
                <CategoryItem  name={value.name}
                              available={value.available} allocated={value.allocated} budget={value.budget} frequency={value.frequency.toLowerCase()}  categoryIcon={value.icon}/>
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
        }, searchBox: {
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%',
            alignItems: 'flex-start',

        }


    });

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '100%',
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
