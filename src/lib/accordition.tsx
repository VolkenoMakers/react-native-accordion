import React, { ReactElement } from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  LayoutAnimation,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type AccorditionProps = {
  containerStyle?: StyleProp<ViewStyle>;
  title: string | ReactElement;
  titleStyle?: StyleProp<TextStyle>;
  showIcon?: boolean;
  icon?: ImageSourcePropType;
  iconStyle: StyleProp<ImageStyle>;
  children: any;
};

export function Accordition({
  containerStyle,
  title,
  titleStyle,
  showIcon = true,
  icon = require("./Caret_down.png"),
  children,
  iconStyle,
}: AccorditionProps) {
  const [show, setShow] = React.useState(false);

  let titleComponent: ReactElement | null = null;
  if (typeof title === "string") {
    titleComponent = <Text style={titleStyle}>{title}</Text>;
  } else {
    titleComponent = title;
  }

  return (
    <View style={[{ overflow: "hidden" }, containerStyle]}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setShow((old) => {
            return !old;
          });
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>{titleComponent}</View>
          {showIcon && (
            <View
              style={{
                transform: [{ rotate: !show ? "0deg" : "180deg" }],
                marginHorizontal: 10,
              }}
            >
              <Image
                source={icon}
                style={[{ width: 24, height: 24 }, iconStyle]}
              />
            </View>
          )}
        </View>
      </TouchableOpacity>
      {show && children}
    </View>
  );
}
