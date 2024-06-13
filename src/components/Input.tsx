import { Input as NativeBaseInput, InputField } from "@gluestack-ui/themed"

type Props = {
    placeholderText: string;
    secureTextEntry?: boolean
}

export function Input({ placeholderText, secureTextEntry = false }: Props) {
    return (
        <NativeBaseInput
            bg="$trueGray900"
            h={56}
            $focus-borderWidth={1}
            borderWidth={0}
            size="md"
            mb={16}
            $focus-borderColor="$green500"
        >
            <InputField
                color="$trueGray300"
                fontFamily="$body"
                placeholder={placeholderText}
                secureTextEntry={secureTextEntry}
            />
        </NativeBaseInput>
    )
}