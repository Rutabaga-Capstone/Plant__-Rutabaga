import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  login: {
    fontSize: 18,
    textAlign: 'center'
  },
  welcomeContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: '1%',
    marginBottom: 0,
    color: '#000000',
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'yorkten'
  },
  subtitle: {
    color: '#C7CAD4',
    textAlign: 'center',
    alignSelf: 'stretch',
    marginRight: 0,
    marginLeft: 0,
    marginTop: 5,
    fontSize: 15,
    marginBottom: '1%'
  },
  screenText: {
    marginTop: 15,
    color: '#000000',
    fontFamily: 'yorkten',
    fontSize: 12,
    justifyContent: 'center'
  },
  socialLinks: {
    color: '#6CC7BD',
    fontSize: 18
  },
  label: {
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#6CC7BD'
  },
  welcomeImage: {
    width: 80,
    height: 80,
    marginLeft: '4%',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    alignSelf: 'stretch'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: '10%',
    flex: 1,
    marginHorizontal: '10%'
    // marginHorizontal: 80,
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
})

export default styles
