import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import Spacer from "../../../../components/Spacer";
import { hp, wp } from "../../../../components/ResponsiveComponent";
import ResponsiveText from "../../../../components/ResponsiveText"
import { colors } from "../../../../constants";

export const UniqueSeedPhrase = ({ data, onSelect, disabled }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Spacer />
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={<Spacer />}
                removeClippedSubviews={false}
                ListFooterComponent={() => <Spacer height={hp(1)} />}
                numColumns={3}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.seedPhraseMainView}
                        onPress={() => onSelect(item)}
                        disabled={disabled}
                    >
                        <ResponsiveText style={styles.seedPhrase}>{item}</ResponsiveText>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    seedPhraseMainView: {
        width: wp(20),
        borderRadius: 68,
        padding: wp(2),
        backgroundColor: colors.gray1,
        marginHorizontal: wp(3),
    },
    seedPhrase: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.black,
        textAlign: 'center',
    },
})