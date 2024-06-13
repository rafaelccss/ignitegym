import { useNavigation } from "@react-navigation/native";
import { VStack, Text, Center, Heading, ImageBackground, ScrollView } from "@gluestack-ui/themed";

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <ScrollView bg="$trueGray700">
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
                                Crie sua conta
                            </Heading>

                            <Input placeholderText="E-mail" />

                            <Input placeholderText="Nome" />

                            <Input placeholderText="Senha" secureTextEntry={true} />
                        </Center>

                        <Button title="Criar e acessar" />

                        <Center mt={96}>
                            <Button
                                title="Voltar para o login"
                                variant="outline"
                                onPress={handleGoBack}
                            />
                        </Center>
                    </VStack>
                </ImageBackground>
            </VStack >
        </ScrollView>
    );
}