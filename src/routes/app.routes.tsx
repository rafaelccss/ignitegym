import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { config } from "@gluestack-ui/config";

import HomeSvg from "@assets/home.svg"
import HistorySvg from "@assets/history.svg"
import ProfileSvg from "@assets/profile.svg"


import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

type AppRoutes = {
    exercise: undefined
    history: undefined
    home: undefined
    profile: undefined
}

export type AuthNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()


export function AppRoutes() {
    const { fontSizes } = config.tokens
    const iconSize = fontSizes["2xl"]

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
        }}>
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg fill={color} width={iconSize} height={iconSize} />
                    )
                }}
            />

            <Screen
                name="history"
                component={History}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HistorySvg fill={color} width={iconSize} height={iconSize} />
                    )
                }}
            />
            
            <Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ProfileSvg fill={color} width={iconSize} height={iconSize} />
                    )
                }}
            />
            <Screen
                name="exercise"
                component={Exercise}
            />
        </Navigator>
    )
}