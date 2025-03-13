import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ffffff",
                tabBarInactiveTintColor: "#8E8E93",
                tabBarStyle: {
                    backgroundColor: "#3e424b",
                    borderTopWidth: 1,
                    borderTopColor: "black",
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 5,
                },
                headerStyle: {
                    backgroundColor: "#000000",
                },
                headerTintColor: "#fff", // Opcional: para definir a cor do texto do cabeçalho
            }}
            >
            <Tabs.Screen 
            name="home"
            options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                ),
            }} 
            />
            <Tabs.Screen
            name="profile"
            options={{
                title: "Perfil",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" size={size} color={color} />
                ),
            }}
            />
            <Tabs.Screen
            name="news"
            options={{
                title: "Notícias",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="newspaper" size={size} color={color} />
                ),
            }}
            />
        </Tabs>
    );
}
