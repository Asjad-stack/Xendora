import React, { useRef, useState } from "react";
import {
    View,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { Images } from "../../../Images";
import { hp, wp } from "../../../components/ResponsiveComponent";
import { colors, Routes } from "../../../constants";
import ResponsiveText from "../../../components/ResponsiveText";
import { Spacer } from "../../../components/Spacer"
import { MainContainer } from "../../../components/MainContainer";

const { width } = Dimensions.get("window");

const onboardingData = [
    {
        id: "1",
        title: "Secure Bitcoin Wallet",
        description: "Safely store and track your Bitcoin in a modern wallet.",
        image: Images.secureBitCoin,
    },
    {
        id: "2",
        title: "Track Transactions",
        description: "Monitor your real-time Bitcoin transactions with ease.",
        image: Images.trackTransaction,
    },
    {
        id: "3",
        title: "Stay Connected",
        description: "Connect with your wallet anytime, anywhere securely.",
        image: Images.stayConnected,
    },
];

const Onboarding = ({ navigation }) => {
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event) => {
        const slideIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
        );
        setCurrentIndex(slideIndex);
    };

    const renderItem = ({ item }) => (
        <View style={[styles.slide, { width }]}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <Spacer />
            <ResponsiveText style={styles.title}>{item?.title}</ResponsiveText>
            <Spacer customHeight={hp(1)} />
            <ResponsiveText style={styles.description}>{item?.description}</ResponsiveText>
        </View>
    );

    return (
        <MainContainer>
            <View>
                <FlatList
                    ref={flatListRef}
                    data={onboardingData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                />

                <View style={styles.dotContainer}>
                    {onboardingData.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                { opacity: currentIndex === index ? 1 : 0.3 },
                            ]}
                        />
                    ))}
                </View>

                {currentIndex === onboardingData.length - 1 ? (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.button}
                        onPress={() => navigation.navigate(Routes.walletSetup)}>
                        <ResponsiveText style={styles.buttonText}>Get Started</ResponsiveText>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.button}
                        onPress={() => {
                            flatListRef.current.scrollToIndex({
                                index: currentIndex + 1,
                                animated: true,
                            });
                        }}>
                        <ResponsiveText style={styles.buttonText}>Next</ResponsiveText>
                    </TouchableOpacity>
                )}
            </View>
        </MainContainer>

    );
};

const styles = StyleSheet.create({

    slide: {
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: wp(50),
        height: hp(30),
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.white,
        textAlign: "center",
    },
    description: {
        fontSize: 16,
        color: colors.gray1,
        textAlign: "center",
    },
    dotContainer: {
        flexDirection: "row",
        marginBottom: wp(4),
        alignSelf: 'center'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.white,
        marginHorizontal: wp(1),
    },
    button: {
        width: wp(86),
        backgroundColor: colors.white,
        padding: wp(4),
        borderRadius: 15,
        marginBottom: hp(3),
        alignSelf: 'center'
    },
    buttonText: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 16,
        textAlign: 'center'
    },
});

export default Onboarding;
