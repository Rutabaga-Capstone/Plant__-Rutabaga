const ApolloClient = require('apollo-boost').default
const gql = require('graphql-tag')
const fetch = require('node-fetch')
const EXPRESS_SERVER_PORT = process.env.EXPRESS_SERVER_PORT

const client = new ApolloClient({
  uri: `http://localhost:${EXPRESS_SERVER_PORT}/graphql`,
  fetch
})

client
  .mutate({
    mutation: gql`
      mutation {
        u1: CreateUser(
          id: 6
          name: "Randy"
          email: "randydxp@gmail.com"
          password: "1234"
          leaves: 0
          regDate: {formatted: "2019-09-20"}
        ) {
          id
          name
          email
          leaves
        }
        u2: CreateUser(
          id: 7
          name: "Fernando"
          email: "fer@innovaresip.com"
          password: "1234"
          leaves: 0
          regDate: {formatted: "2019-09-21"}
        ) {
          id
          name
          email
          leaves
        }
        u3: CreateUser(
          id: 8
          name: "Sean"
          email: "gatewaywebdesign18@gmail.com"
          password: "1234"
          leaves: 0
          regDate: {formatted: "2019-09-22"}
        ) {
          id
          name
          email
          leaves
        }
        u4: CreateUser(
          id: 9
          name: "Pawel"
          email: "pawel3ala@gmail.com"
          password: "1234"
          leaves: 0
          regDate: {formatted: "2019-09-23"}
        ) {
          id
          name
          email
          leaves
        }
        u5: CreateUser(
          id: 10
          name: "cc"
          email: "cc"
          password: "cc"
          leaves: 0
          regDate: {formatted: "2019-09-24"}
        ) {
          id
          name
          email
          leaves
        }
        p1: CreatePlant(
          id: 7
          commonName: "Poison Ivy"
          scientificName: "Toxicodendron radicans"
          imageURL: "https://www.petguide.com/wp-content/uploads/2019/03/poison-ivy-dogs-668x444.jpg"
          description: "A poisonous Asian and Eastern North American flowering plant in the genus Toxicodendron. Causes rashes when touched"
          isPoisonous: true
        ) {
          id
          commonName
          scientificName
          imageURL
          description
          isPoisonous
        }
        p2: CreatePlant(
          id: 8
          commonName: "Poison Oak"
          scientificName: "Toxicodendron diversilobum"
          imageURL: "http://nativeplantspnw.com/wp-content/uploads/2017/01/Poison-Oak-624x470.png"
          description: "A woody vine or shrub in the sumac family, Anacardiaceae. Causes rashes when touched"
          isPoisonous: true
        ) {
          id
          commonName
          scientificName
          imageURL
          description
          isPoisonous
        }
        p3: CreatePlant(
          id: 9
          commonName: "Poison Sumac"
          scientificName: "Toxicodendron diversilobum"
          imageURL: "https://cdn.britannica.com/50/198250-050-2D0D4360/Poison-sumac-Massachusetts.jpg"
          description: "A woody shrub or small tree growing to 9 m (30 ft) tall. Causes a rash when touch"
          isPoisonous: true
        ) {
          id
          commonName
          scientificName
          imageURL
          description
          isPoisonous
        }
        p4: CreatePlant(
          id: 10
          commonName: "Fly Agaric"
          scientificName: "Amanita Muscaria"
          imageURL: "https://cdn.britannica.com/50/198250-050-2D0D4360/Poison-sumac-Massachusetts.jpg"
          description: "Commonly known to be the mushroom which Mario Mario's Growth mushroom is based off of, fly agaric is a basidiomycete of the genus Amanita. It is also a muscimol mushroom. It can cause liver toxicity, hallucinations, and death when eaten"
          isPoisonous: true
        ) {
          id
          commonName
          scientificName
          imageURL
          description
          isPoisonous
        }
        p5: CreatePlant(
          id: 11
          commonName: "Locoweed"
          scientificName: "Oxytropis"
          imageURL: "https://www.aspca.org/sites/default/files/styles/medium_image_300x200/public/field/image/plants/loco-weed-r.jpg?itok=vq-D8CBK"
          description: "Locoweed (also crazyweed and loco) is a common name in North America for any plant that produces swainsonine, a phytotoxin harmful to livestock."
          isPoisonous: true
        ) {
          id
          commonName
          scientificName
          imageURL
          description
          isPoisonous
        }
        p6: CreatePlant(
          id: 12
          commonName: "Morning Glory"
          scientificName: "Oxytropis"
          imageURL: "https://smhttp-ssl-17653.nexcesscdn.net/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/m/o/morn-glory-mailbox.jpg"
          description: "Morning glory (also written as morning-glory) is the common name for over 1,000 species of flowering plants in the family Convolvulaceae, whose current taxonomy and systematics are in flux."
          isPoisonous: false
        ) {
          id
          commonName
          scientificName
          imageURL
          description
          isPoisonous
        }
        pin1: CreatePin(id: 7, lat: 41.895506, lng: -87.639014) {
          id
          lat
          lng
        }
        pin2: CreatePin(id: 8, lat: 41.896461, lng: -87.641228) {
          id
          lat
          lng
        }
        pin3: CreatePin(id: 9, lat: 41.895506, lng: -87.639014) {
          id
          lat
          lng
        }
        pin4: CreatePin(id: 10, lat: 41.895060, lng: -87.639914) {
          id
          lat
          lng
        }
        pin5: CreatePin(id: 11, lat: 41.897461, lng: -87.641328) {
          id
          lat
          lng
        }
        pin6: CreatePin(id: 12, lat: 41.896506, lng: -87.632014) {
          id
          lat
          lng
        }
        up1: AddUserPlants(from: {id: 7}, to: {id: 7}) {
          from {
            name
          }
          to {
            commonName
            description
          }
        }
        upin1: AddUserPins(from: {id: 8}, to: {id: 8}) {
          from {
            name
          }
          to {
            lat
            lng
          }
        }
        pp1: AddPinPlants(from: {id: 9}, to: {id: 9}) {
          from {
            lat
            lng
          }
          to {
            commonName
            description
          }
        }

        up2: AddUserPlants(from: {id: 6}, to: {id: 7}) {
          from {
            name
          }
          to {
            commonName
            description
          }
        }
        upin2: AddUserPins(from: {id: 6}, to: {id: 8}) {
          from {
            name
          }
          to {
            lat
            lng
          }
        }
        pp2: AddPinPlants(from: {id: 7}, to: {id: 8}) {
          from {
            lat
            lng
          }
          to {
            commonName
            description
          }
        }

        up3: AddUserPlants(from: {id: 7}, to: {id: 9}) {
          from {
            name
          }
          to {
            commonName
            description
          }
        }
        upin3: AddUserPins(from: {id: 8}, to: {id: 3}) {
          from {
            name
          }
          to {
            lat
            lng
          }
        }
        pp3: AddPinPlants(from: {id: 7}, to: {id: 8}) {
          from {
            lat
            lng
          }
          to {
            commonName
            description
          }
        }

        up4: AddUserPlants(from: {id: 7}, to: {id: 8}) {
          from {
            name
          }
          to {
            commonName
            description
          }
        }
        upin4: AddUserPins(from: {id: 8}, to: {id: 9}) {
          from {
            name
          }
          to {
            lat
            lng
          }
        }
        pp4: AddPinPlants(from: {id: 9}, to: {id: 8}) {
          from {
            lat
            lng
          }
          to {
            commonName
            description
          }
        }
        up5: AddUserPlants(from: {id: 8}, to: {id: 10}) {
          from {
            name
          }
          to {
            commonName
            description
          }
        }
        upin5: AddUserPins(from: {id: 9}, to: {id: 8}) {
          from {
            name
          }
          to {
            lat
            lng
          }
        }
        pp5: AddPinPlants(from: {id: 8}, to: {id: 9}) {
          from {
            lat
            lng
          }
          to {
            commonName
            description
          }
        }

        up6: AddUserPlants(from: {id: 10}, to: {id: 10}) {
          from {
            name
          }
          to {
            commonName
            description
          }
        }
        upin6: AddUserPins(from: {id: 9}, to: {id: 12}) {
          from {
            name
          }
          to {
            lat
            lng
          }
        }
        pp6: AddPinPlants(from: {id: 12}, to: {id: 12}) {
          from {
            lat
            lng
          }
          to {
            commonName
            description
          }
        }
      }
    `
  })
  .then(() => console.log('Done seeding the DB!!!'))
  .catch(error => console.error(error))
