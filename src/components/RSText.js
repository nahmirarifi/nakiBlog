import { Text } from 'react-native'
import React from 'react'
import Colors from '../theme/Colors';
import adjust from '../utils/adjust';

const RSText = ({
    h1, h2, h3, h4, h5, p,
    bold, italic,
    title,
    primary, secondary,
    style,
    onPress,
    underLine,
    numberOfLines,
    right, center, left,
    iconLeft, iconRight, red,
    ...rest }) => {

    const colors = Colors()

    return (
        <Text
            numberOfLines={numberOfLines}
            onPress={onPress}
            style={[
                h1 && { fontSize: adjust(30) },
                h2 && { fontSize: adjust(24) },
                h3 && { fontSize: adjust(17) },
                h4 && { fontSize: adjust(14) },
                h5 && { fontSize: adjust(12) },
                p && { fontSize: adjust(10) },
                bold && { fontWeight: 'bold' },
                italic && { fontStyle: 'italic' },
                right && { textAlign: 'right' },
                left && { textAlign: 'left' },
                center && { textAlign: 'center' },
                primary && { color: colors.text },
                red && { color: colors.red },
                secondary && { color: colors.text1 },
                underLine && { textDecorationLine: 'underline' },
                style
            ]}{...rest}>{iconLeft}  {title}  {iconRight}</Text>
    );
}

export default RSText