import React from 'react';
import { Platform } from 'react-native';
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
  createMaterialTopBarNavigator
} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/Welcome';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import FavoritesScreen from './screens/Favorites';
import SettingsScreen from './screens/Settings';
import RegisterScreen from './screens/Register';
import VerificationScreen from './screens/SMSVerification'
import UserInfo from './screens/UserInfo'
import UserPreferences from './screens/UserPreferences'

import { HamburgerIcon, SettingsIcon, BackIcon } from './components/icons';

import { CustomDrawerContent } from './components';
import { colors } from './utils/constants';

const AppMainTab = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={23} color={colors.WHITE} />
      ),
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={23} color={colors.WHITE} />
      ),
      headerStyle: {
        backgroundColor: colors.MAIN_GREEN,
      },
      headerTitle: 'Home',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
    })
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Friends',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="heartbeat" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Friends',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="heartbeat" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.MAIN_GREEN,
      },
      headerTitle: 'Friends',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
    })
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Cart',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="shopping-cart" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Cart',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="shopping-cart" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.MAIN_GREEN,
      },
      headerTitle: 'Cart',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
      headerRight: <SettingsIcon onPress={() => navigation.navigate('Settings')} />,
    })
  },
}, {
  tabBarOptions: {
    activeTintColor: colors.WHITE,
    inactiveTintColor: colors.PINK_50,
    inactiveBackgroundColor: colors.MAIN_GREEN,
    activeBackgroundColor: colors.MAIN_GREEN,
    showIcon: true,
    showLabel: Platform.OS === 'ios',
    indicatorStyle: {
      backgroundColor: colors.PINK_300,
    },
    style: {
      backgroundColor: colors.PINK_100,
    },
    upperCaseLabel: false,
  },
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
});

const AppMainStack = StackNavigator({
  Home: { screen: AppMainTab },
  Settings: { screen: SettingsScreen },
}, {
  cardStyle: {
    backgroundColor: colors.MAIN_GREEN,
  },
  mode: 'modal',
});

const AppDrawer = DrawerNavigator({
  Home: {
    screen: AppMainStack,
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-settings" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.PINK_100,
      },
      headerTitle: 'Settings',
      headerTitleStyle: {
        color: colors.MAIN_GREEN,
      },
      headerLeft: <BackIcon onPress={() => navigation.goBack()} />,
		}),
  },
}, {
  contentComponent: props =>
    (<CustomDrawerContent
      {...props}
		/>),
  contentOptions: {
    activeBackgroundColor: colors.MAIN_GREEN,
    activeTintColor: colors.WHITE,
		inactiveTintColor: colors.MAIN_GREEN,
  },
});

const RegisterNavigator = StackNavigator({
	Register: { screen: RegisterScreen,
		navigationOptions: ({ navigation }) => ({
			headerLeft: <BackIcon onPress={() => navigation.goBack()}/>,
		headerStyle: {
			backgroundColor: colors.MAIN_GREEN,
			},
		headerTitle: 'Registration',
		headerTitleStyle: {
			color: colors.WHITE,
		},
		}),
		mode: 'modal',
	}},
	{
		tabBarPosition: 'top',
		animationEnabled: true,
	}
);

const SMSNavigator = StackNavigator({
	Register: { screen: VerificationScreen,
		navigationOptions: ({ navigation }) => ({
			headerLeft: <BackIcon onPress={() => navigation.goBack()}/>,
		headerStyle: {
			backgroundColor: colors.MAIN_GREEN,
			},
		headerTitle: 'SMSVerification',
		headerTitleStyle: {
			color: colors.WHITE,
		},
		}),
		mode: 'modal',
	}},
	{
		tabBarPosition: 'top',
		animationEnabled: true,
	}
);

const Navigator = TabNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: { screen: AppDrawer },
	Register: { screen: RegisterNavigator},
	Verification: { screen: SMSNavigator},
	UInfo: { screen: UserInfo },
	UPref: { screen: UserPreferences},
}, {
  navigationOptions: {
    tabBarVisible: false,
  },
  swipeEnabled: false,
});

export default Navigator;
