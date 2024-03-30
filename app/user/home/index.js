import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, router } from "expo-router";
import { theme } from "../../../constants/Colors";
import {
    heightPercentageToDP,
    widthPercentageToDP,
} from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ArticleCard from "../../../components/articleCard";
const blogData = [
    {
        id: 1,
        title: "COVID-19: The Intersection of Physical and Mental Health",
        post_date: "2024-03-20T14:38:17.170+00:00",
    },
    {
        id: 4,
        title: "COVID-19: The Intersection of Physical and Mental Health",
        post_date: "2024-03-20T14:38:17.170+00:00",
    },
    {
        id: 7,
        title: "COVID-19: The Intersection of Physical and Mental Health",
        post_date: "2024-03-28T06:29:30.268+00:00",
    },
];
const Home = () => {
    const [role, setRole] = useState("");
    useEffect(() => {
        const getRole = async () => {
            const role = await AsyncStorage.getItem("role");
            setRole(role);
        };
        getRole();
    }, []);
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.body}>
                <View style={styles.row}>
                    <Image
                        source={require("../../../assets/avatars/male/0.png")}
                        style={styles.avatar}
                    />
                    <View>
                        <Text style={styles.greetingHeader}>
                            Good Afternoon,
                        </Text>
                        <Text style={styles.greetingName}>
                            {role == "DOCTOR" && "Dr. "}
                            Manan Malhotra
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                        <Text style={styles.articleHeader}>Articles</Text>
                    </View>
                    <View style={styles.seeAllContainer}>
                        <Pressable
                            onPress={() => router.push("user/home/blogs")}
                        >
                            <Text style={styles.seeAll}>See All</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.articles}>
                    {blogData.map((blog) => (
                        <Pressable
                            key={blog.id}
                            onPress={() =>
                                router.push(`user/home/blogs/${blog.id}`)
                            }
                        >
                            <ArticleCard
                                title={blog.title}
                                post_date={blog.post_date}
                            />
                        </Pressable>
                    ))}
                </View>
                <View style={styles.verticalLine}></View>
                <View style={styles.row2}>
                    <View style={styles.itemContainer}>
                        <View style={styles.item}>
                            <Image
                                source={require("../../../assets/images/forums.png")}
                                style={styles.itemImage}
                            />
                        </View>
                        <Pressable
                            onPress={() =>
                                router.push("user/home/selfHelpVideos")
                            }
                        >
                            <View style={styles.item}>
                                <Image
                                    source={require("../../../assets/images/videos.png")}
                                    style={styles.itemImage}
                                />
                            </View>
                        </Pressable>
                        <View style={styles.item}>
                            <Image
                                source={require("../../../assets/images/relax.png")}
                                style={styles.itemImage}
                            />
                        </View>
                    </View>
                    <View style={styles.itemTextContainer}>
                        <View style={styles.itemText}>
                            <Text style={styles.itemHeading}>Forums</Text>
                        </View>
                        <Pressable
                            onPress={() =>
                                router.push("user/home/selfHelpVideos")
                            }
                        >
                            <View style={styles.itemText}>
                                <Text style={styles.itemHeading}>Videos</Text>
                            </View>
                        </Pressable>
                        <View style={styles.itemText}>
                            <Text style={styles.itemHeading}>Relax</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Home;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: "15%",
    },
    row: { flexDirection: "row" },
    avatar: {
        width: 50,
        height: 50,
        marginHorizontal: 15,
        marginVertical: 10,
    },
    greetingHeader: {
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 5,
        fontWeight: "bold",
        fontSize: 15,
        color: theme.colors.primary,
    },
    greetingName: {
        marginHorizontal: 10,
        fontWeight: "bold",
        fontSize: 20,
    },
    articleHeader: {
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 5,
        fontWeight: "bold",
        fontSize: 20,
        color: theme.colors.secondary,
    },
    seeAllContainer: {
        marginLeft: "auto",
        marginRight: 30,
        marginVertical: 13,
    },
    seeAll: {
        marginTop: 10,
        marginBottom: 5,
        fontWeight: "bold",
        fontSize: 14,
        color: theme.colors.button,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
    },
    articles: {
        height: "55%",
    },
    articleCard: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "91%",
        height: 120,
        backgroundColor: theme.colors.background,
        borderRadius: 10,
        borderBlockColor: theme.colors.primary,
        borderWidth: 1,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        flexDirection: "row",
    },
    articleTitleContainer: {
        height: "100%",
        width: "65%",
    },
    articleTitle: {
        padding: "8%",
        fontSize: 16,
        fontWeight: "bold",
    },
    articleDateContainer: {
        // backgroundColor: theme.colors.secondary,
        height: "100%",
        width: "35%",
    },
    articleDate: {
        padding: "8%",
        paddingTop: "15%",
        fontSize: 13,
        fontWeight: "600",
        color: theme.colors.primary,
    },
    verticalLine: {
        height: heightPercentageToDP(0.1),
        width: "91%",
        alignSelf: "center",
        opacity: 0.2,
        backgroundColor: "black",
        marginVertical: 5,
    },
    itemContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        width: "91%",
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: "row",
    },
    itemTextContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        width: "91%",
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: "row",
    },
    item: {
        width: 110,
        height: 110,
        borderRadius: "100%",
        backgroundColor: theme.colors.background,
        marginHorizontal: 15,
        borderBlockColor: theme.colors.primary,
        borderWidth: 1,
        flexDirection: "row",
    },
    itemText: {
        height: 170,
        width: 110,
        marginHorizontal: 15,
        alignItems: "center",
    },
    itemHeading: { color: theme.colors.primary, fontWeight: "600" },
    itemImage: {
        width: 60,
        height: 60,
        alignSelf: "center",
        marginLeft: "auto",
        marginRight: "auto",
    },
});