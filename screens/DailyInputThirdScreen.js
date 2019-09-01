import React from 'react';
import { Text, View, Button, Slider, ScrollView, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';


class DailyInputThirdScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            timeFirstMeal: 9,
            minTimeFirstMeal: 6,
            maxTimeFirstMeal: 12,

            timeLastMeal: 8,
            minTimeLastMeal: 5,
            maxTimeLastMeal: 12,

            cupsOfCaffeine: 2,
            minCupsofCaffeine: 0,
            maxCupsofCaffeine: 4,

            numDrinks: 2,
            minNumDrinks: 0,
            maxNumDrinks: 5
        } 
    } 

    render(props) {
        return (
        <ScrollView style={styles.container}>
            <Progress.Bar alignSelf="center" color="blue" progress={0.666} width={300} />
            <Text style={styles.getStartedText}>What time was your first meal yesterday?</Text>
            <Slider
                style={{width: 300, height: 40, alignSelf: "center"}}
                step={1}
                minimumValue={this.state.minTimeFirstMeal}
                maximumValue={this.state.maxTimeFirstMeal}
                value = {this.state.timeFirstMeal}
                onValueChange={val => this.setState({ timeFirstMeal: val })}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
            <View style={styles.textCon}>
                <Text style={styles.colorGrey}>{this.state.minTimeFirstMeal} AM</Text>
                <Text style={styles.colorYellow}>
                    {this.state.timeFirstMeal}
                </Text>
                <Text style={styles.colorGrey}>{this.state.maxTimeFirstMeal} PM</Text>
            </View>
            

            <Text style={styles.getStartedText}>What time was your last meal yesterday?</Text>
            <Slider
                style={{width: 300, height: 40, alignSelf: "center"}}
                step={1}
                minimumValue={this.state.minTimeLastMeal}
                maximumValue={this.state.maxTimeLastMeal}
                value = {this.state.timeLastMeal}
                onValueChange={val => this.setState({ timeLastMeal: val })}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
            <View style={styles.textCon}>
                <Text style={styles.colorGrey}>{this.state.minTimeLastMeal} PM</Text>
                <Text style={styles.colorYellow}>
                    {this.state.timeLastMeal}
                </Text>
                <Text style={styles.colorGrey}>{this.state.maxTimeLastMeal} AM</Text>
            </View>

            <Text style={styles.getStartedText}>How many cups of coffe/caffeine did you have yesterday?</Text>
            <Slider
                style={{width: 300, height: 40, alignSelf: "center"}}
                step={1}
                minimumValue={this.state.minCupsofCaffeine}
                maximumValue={this.state.maxCupsofCaffeine}
                value = {this.state.cupsOfCaffeine}
                onValueChange={val => this.setState({ cupsOfCaffeine: val })}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
            <View style={styles.textCon}>
                <Text style={styles.colorGrey}>{this.state.minCupsofCaffeine} AM</Text>
                <Text style={styles.colorYellow}>
                    {this.state.cupsOfCaffeine}
                </Text>
                <Text style={styles.colorGrey}>{this.state.maxCupsofCaffeine} AM</Text>
            </View>

            <Text style={styles.getStartedText}>How much alcohol did you have yesterday?</Text>
            <Slider
                style={{width: 300, height: 40, alignSelf: "center"}}
                step={1}
                minimumValue={this.state.minNumDrinks}
                maximumValue={this.state.maxNumDrinks}
                value = {this.state.numDrinks}
                onValueChange={val => this.setState({ numDrinks: val })}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
            <View style={styles.textCon}>
                <Text style={styles.colorGrey}>{this.state.minNumDrinks} standard drinks</Text>
                <Text style={styles.colorYellow}>
                    {this.state.numDrinks}
                </Text>
                <Text style={styles.colorGrey}>{this.state.maxNumDrinks} standard drinks</Text>
            </View>

            <Button
                title="Finish"
                onPress = {() => {
                    this.props.navigation.navigate('Home')
                }}
            ></Button>
        </ScrollView>
        
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignContent: 'center',
    backgroundColor: '#7d85b0',
  },
    textCon: {
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    colorGrey: {
        color: '#d3d3d3'
    },
    colorYellow: {
        color: 'rgb(252, 228, 149)'
    },
    getStartedText: {
        fontSize: 17,
        color: '#fff',
        lineHeight: 24,
        textAlign: 'center',
        paddingTop: 20
    }
});

export default DailyInputThirdScreen;