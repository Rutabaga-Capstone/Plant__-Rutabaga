import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import MapView, {Marker, Circle} from 'react-native-maps'
import SwitchSelector from 'react-native-switch-selector'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2
  }
})

export default class Map extends React.Component {
  render() {
    return (
      <View>
        {this.props.center &&
          this.props.location && (
            <MapView
              style={styles.mapStyle}
              region={this.props.region}
              showsUserLocation={true}
              showsMyLocationButton={true}
            >
              {this.props.pins.map((pin, i) => (
                <Marker
                  key={i}
                  title={pin.title}
                  coordinate={pin.coordinate}
                  pinColor={pin.hasPoisonousPlants ? 'red' : 'green'}
                  description={pin.description}
                />
              ))}
              <Circle
                radius={this.props.radius}
                center={this.props.center.coords}
                fillColor={'rgba(123,239,178,.65)'}
                strokeColor="transparent"
              />
            </MapView>
          )}
        <View
          style={{
            position: 'absolute',
            height: 500,
            width: 360,
            alignSelf: 'center'
          }}
        >
          <SwitchSelector
            initial={2}
            onPress={value => this.setState({pinFilter: value})}
            textColor={'#000'}
            selectedColor={'#fff'}
            buttonColor={'#000'}
            borderColor={'lightgrey'}
            fontSize={12}
            height={30}
            alignSelf={'center'}
            hasPadding
            options={[
              {
                label: 'poisonous',
                value: 'poisonous',
                activeColor: 'red'
              },
              {
                label: 'nonpoisonous',
                value: 'nonpoisonous',
                activeColor: 'green'
              },
              {label: 'all', value: 'all', activeColor: 'black'}
            ]}
            style={{
              alignSelf: 'center'
            }}
          />
        </View>
      </View>
    )
  }
}
