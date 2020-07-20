/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Rate} from './src/components/Rate';
import {Dialog} from './src/components/Dialog';
import {Actionsheet} from './src/components/Actionsheet';
import {Button} from './src/components/Button';
import {customTheme} from './customTheme';
import {useTheme} from './src/common/styles/variables';
import {Badge} from "./src/components/Badge";
import {BottomModal} from "./src/components/BottomModal";
import {Calendar} from "./src/components/Calendar";
import {Cascader} from "./src/components/Cascader";
import {optionsX} from "./data/demoData";
import {ThemeContext, ThemeProvider} from "./src/common/theme/ThemeProvider";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            valueA: ['sweetie'],
            valueX: ['baiziwan'],
            optionsB: [],
            valueB: [],
        }
    }

    render() {
        let actionsheet: Actionsheet;
        let bottomModal: BottomModal;
        return (
            <ThemeProvider>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Button onPress={() => actionsheet.open()}>ActionSheet open</Button>
                        <Rate value={3} iconColor={'red'}/>
                        <Badge label={3} style={{width: 20, height: 20}} labelStyle={{color: '#FFF'}}/>
                        <Button onPress={() => bottomModal.open()}>Bottom Modal</Button>
                        <Text style={styles.header}>基础</Text>
                        <Calendar
                            date={'2018-08-09'}
                            startDate={'2018-04-11'}
                            endDate={'2018-06-22'}

                            onChange={(date) => {
                                this.setState({
                                    date
                                })
                            }}>
                        </Calendar>


                        <Button
                            style={{marginTop: 12}}
                            size="sm"
                            type="primary"
                            textColorInverse
                            onPress={() => actionsheet.open()}>
                            基础
                        </Button>
                    </ScrollView>
                    <Actionsheet
                        ref={(c) => actionsheet = c}
                        header="标题"
                        data={[
                            {label: '选项一', value: '1'},
                            '选项二',
                            {label: '选项三', value: '3'},
                            {label: '选项四', value: '4'},
                            {label: '选项五', value: '5'},
                            {label: '选项六', value: '6'},
                        ]}
                        cancelable={true}
                        onPressConfirm={(item) => {
                            console.log(item);
                        }}
                        onPressCancel={() => {
                            console.log('cancel');
                        }}
                    />

                    <BottomModal
                        ref={(c) => {
                            bottomModal = c
                        }}
                        title='选择品类'
                        cancelable={true}
                        leftCallback={() => {
                            console.log('cancel')
                        }}
                        rightCallback={() => {
                            console.log('confirm')
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: '#fff',
                                height: 300,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Cascader
                                style={{height: 200, marginBottom: 50}}
                                data={optionsX}
                                dataStructureType='flattened'
                                value={this.state.valueX}
                                onChange={(value, info) => {
                                    console.log(value, info)
                                    this.setState({
                                        valueX: value
                                    })
                                }}
                            />

                            <Text>自定义内容</Text>
                        </View>
                    </BottomModal>
                </SafeAreaView>
            </ThemeProvider>);
    }
}

let color = Colors.black;
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },

    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: color,
    },
});

export default App;
