# react-native-accordion

![Single select](https://raw.githubusercontent.com/VolkenoMakers/react-native-accordion/files/demo.gif)

## Add it to your project

- Using NPM
  `npm install @volkenomakers/react-native-accordion`
- or:
- Using Yarn
  `yarn add @volkenomakers/react-native-accordion`

## Usage

```javascript
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Accordition from "@volkenomakers/react-native-accordion";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="default" />
      <Accordition
        containerStyle={{ backgroundColor: "rgba(0,0,0,.03)", padding: 2 }}
        titleStyle={{ padding: 20, fontSize: 18 }}
        title="Collapsible Group Item #1"
      >
        <Text style={{ padding: 20, backgroundColor: "#FFF" }}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS.
        </Text>
      </Accordition>
      <Accordition
        containerStyle={{
          backgroundColor: "rgba(0,0,0,.03)",
          padding: 2,
          marginVertical: 5,
        }}
        titleStyle={{ padding: 20, fontSize: 18, color: "#F00" }}
        iconStyle={{ tintColor: "#F00" }}
        title="Collapsible Group Item #2"
      >
        <Text style={{ padding: 20, backgroundColor: "#FFF" }}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        </Text>
      </Accordition>
      <Accordition
        containerStyle={{
          backgroundColor: "rgba(0,0,0,.03)",
          padding: 2,
          marginVertical: 5,
        }}
        titleStyle={{ padding: 20, fontSize: 18 }}
        icon={{ uri: "http://cdn.onlinewebfonts.com/svg/img_317357.png" }}
        title="Collapsible Group Item #3"
      >
        <Text style={{ padding: 20, backgroundColor: "#FFF" }}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        </Text>
      </Accordition>
      <Accordition
        containerStyle={{
          backgroundColor: "rgba(0,0,0,.03)",
          padding: 2,
        }}
        showIcon={false}
        title="Collapsible Group Item #3"
        titleStyle={{ padding: 20, fontSize: 18 }}
      >
        <Text style={{ padding: 20, backgroundColor: "#FFF" }}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        </Text>
      </Accordition>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 15,
    backgroundColor: "#fff",
  },
});
```

## Properties

| Property name      | Type                           | Description                                                                        |
| ------------------ | ------------------------------ | ---------------------------------------------------------------------------------- |
| **containerStyle** | **Object**                     | Styles for the container                                                           |
| **titleStyle**     | **Object**                     | Styles for the title                                                               |
| **icon**           | **ImageSource**                | the source image of the icon                                                       |
| **iconStyle**      | **Object**                     | custom Styles for the icon                                                         |
| **showIcon**       | **Boolean**                    | show or hide the icon dafault to true                                              |
| **title**          | **string** or **ReactElement** | the title of the accordition it can be string or component like <Text>title</Text> |

**ISC Licensed**
