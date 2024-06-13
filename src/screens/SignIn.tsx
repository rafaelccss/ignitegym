import { useNavigation } from "@react-navigation/native";
import { VStack, Text, Center, Heading, ImageBackground, ScrollView } from "@gluestack-ui/themed";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function handleNewAccount() {
        navigation.navigate("signUp")
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} bg="$trueGray700">
            <VStack flex={1} bg="$trueGray700">
                <ImageBackground
                    source={BackgroundImg}
                    style={{ flex: 1, justifyContent: "center" }}
                >

                    <VStack bg="gray.700" px={10} pb={16}>
                        <Center my={96}>
                            <LogoSvg />

                            <Text color="$trueGray100" fontSize="$sm">
                                {"Treine sua mente e o seu corpo."}
                            </Text>
                        </Center>

                        <Center>
                            <Heading color="$trueGray100" fontSize="$xl" mb={24} fontFamily="$heading">
                                Acesse a conta
                            </Heading>

                            <Input placeholderText="E-mail" />

                            <Input placeholderText="Senha" secureTextEntry={true} />
                        </Center>

                        <Button title="Acessar" />

                        <Center mt={96}>
                            <Text color="$trueGray100" fontSize="$sm" mb={12} fontFamily="body">
                                Ainda não tem acesso?
                            </Text>
                        </Center>

                        <Button
                            title="Criar conta"
                            variant="outline"
                            onPress={handleNewAccount}
                        />
                    </VStack>
                </ImageBackground>
            </VStack >
        </ScrollView>
    );
}