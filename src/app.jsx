import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import HomePage from './pages/home/HomePage';
import TransactionAddition
  from './pages/transactionAddition/TransactionAddition';
import NumberEntry from './pages/shared/containers/NumberEntry';
import TextEntry from './pages/shared/containers/TextEntry';
import ListSelection from './pages/shared/containers/ListSelection';
import TransactionListPage from './pages/transactionList/TransactionListPage';
import CategoryListPage from './pages/categoryListPage/CategoryListPage';
import CategoryPage from './pages/categorypage/CategoryPage';
import CategoryCreationPage
  from './pages/categorycreation/CategoryCreationPage';
import AllocationPage from './pages/allocation/AllocationPage';
import TransferPage from './pages/transferpage/TransferPage';

function App(props) {

  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomePage"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen
              name="TransactionAddition"
              component={TransactionAddition}
            />
            <Stack.Screen name="NumberEntry" component={NumberEntry} />
            <Stack.Screen
              name="TransactionList"
              component={TransactionListPage}
            />
            <Stack.Screen name="TextEntry" component={TextEntry} />
            <Stack.Screen name="ListSelection" component={ListSelection} />
            <Stack.Screen name="CategoryListPage" component={CategoryListPage} />
            <Stack.Screen name="CategoryPage" component={CategoryPage} />
            <Stack.Screen name="CategoryCreationPage" component={CategoryCreationPage} />
            <Stack.Screen name="AllocationPage" component={AllocationPage} />
            <Stack.Screen name="TransferPage" component={TransferPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
