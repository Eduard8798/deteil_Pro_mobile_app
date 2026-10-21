
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { useAppDispatch, useAppSelector } from '../store/storeHooks';
import { setThemeMode } from '../store/slices/themeSlice';
import { AppNavigationProp } from '../navigation/types/types';

interface SettingProps {
    navigation: AppNavigationProp;
}

const Setting = ({ navigation }: SettingProps) => {
    const dispatch = useAppDispatch();

    const mode = useAppSelector(state => state.theme.mode);

    const changeTheme = () => {
        dispatch(setThemeMode(!mode));
    };

    const openChangePassword = () => {
        navigation.navigate('ChangePassword');
    };

    return (
        <View style={mode ? styles.container : styles.containerBlack}>
            <View style={styles.content}>
                <View style={mode ? styles.settingItem : styles.settingItemBlack}>
                    <View>
                        <Text style={mode ? styles.settingTitle : styles.settingTitleBlack}>
                           Dark mode
                        </Text>

                        <Text style={mode ? styles.settingDescription : styles.settingDescriptionBlack}>
                            {mode ? 'On' : 'Off'}
                        </Text>
                    </View>

                    <Switch
                        value={mode}
                        onValueChange={changeTheme}
                    />
                </View>

                <TouchableOpacity
                    onPress={openChangePassword}
                    style={mode ? styles.settingItem : styles.settingItemBlack}
                >
                    <Text style={mode ? styles.settingTitle : styles.settingTitleBlack}>
                        Change password
                    </Text>

                    <Text style={mode ? styles.arrow : styles.arrowBlack}>
                        ›
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:'20%',
        backgroundColor: '#121212',

    },
    containerBlack: {
        flex: 1,
        paddingTop:'20%',
        backgroundColor: '#F5F5F5',


    },
    content: {
        paddingHorizontal: '5%',
        paddingTop: '5%',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#FFFFFF',
    },
    titleBlack: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#222222',
    },
    settingItem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '4%',
        paddingHorizontal: '4%',
        borderRadius: 12,
        marginBottom: '3%',
        backgroundColor: '#252525',
    },
    settingItemBlack: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '4%',
        paddingHorizontal: '4%',
        borderRadius: 12,
        marginBottom: '3%',
        backgroundColor: '#FFFFFF',
    },
    settingTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    settingTitleBlack: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222222',
    },
    settingDescription: {
        fontSize: 13,
        marginTop: 4,
        color: '#BBBBBB',
    },
    settingDescriptionBlack: {
        fontSize: 13,
        marginTop: 4,
        color: '#777777',
    },
    arrow: {
        fontSize: 22,
        color: '#BBBBBB',
    },
    arrowBlack: {
        fontSize: 22,
        color: '#777777',
    },
});


