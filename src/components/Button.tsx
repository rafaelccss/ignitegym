import { Button as ButtonNativeBase, ButtonText } from '@gluestack-ui/themed';

type Props = {
    title: string;
    variant?: 'solid' | 'outline';
    onPress?: () => void
}

export function Button({ title, variant = "solid", onPress }: Props) {
    return (
        <ButtonNativeBase
            w={"$full"}
            borderColor='$green500'
            backgroundColor={variant === "outline" ? "$transparent" : "$green700"}
            borderWidth={variant === 'outline' ? 1 : 0}
            h={56}
            rounded={'$sm'}
            $active-opacity={0.7}
            onPress={onPress}
        >
            <ButtonText
                color={variant === "outline" ? "$green500" : "$white"}
                fontSize={'$sm'}
                fontFamily='$heading'
            >
                {title}
            </ButtonText>
        </ButtonNativeBase>
    );
}
