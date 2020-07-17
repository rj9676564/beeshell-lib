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

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />

          <Text
            style={styles.sectionTitle}
            onPress={() => {
              // this.actionsheet.open();
              customTheme.mtdGrayDarker = 'red';
              useTheme(customTheme);
              color = 'red';
              StyleSheet.setStyleAttributePreprocessor(
                'backgroundColor',
                (nextProp) => {
                  console.log(nextProp);
                },
              );
            }}>
            Step One 变色{JSON.stringify(customTheme)}
          </Text>
          <Button
            style={{marginTop: 12}}
            size="sm"
            type="primary"
            textColorInverse
            onPress={() => {
              this.actionsheet.open();
            }}>
            基础
          </Button>
        </ScrollView>
        <Actionsheet
          ref={(c) => {
            this.actionsheet = c;
          }}
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

      </SafeAreaView>
    </>
  );
};
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
