import React from "react";
import styled from "styled-components/native";
import DefaultButton from "../components/DefaultButton";
import { Image, Text, View, SafeAreaView } from "react-native";


const Container = styled(SafeAreaView)`
    flex: 1 ;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    margin-left: 30px;
    margin-right: 30px;
`;

const WelcomeText = styled(Text)`
    font-size: 22px;
    color: #333;

`;

const WelcomeImage = styled(View)`
    flex: 1;
    justify-content: center;
`;

const WelcomeLogo = styled(Image)`
    width: 200px;
    height: 200px;
`;

const BeginConfigArea = styled(View)`
    width: 100%;
    margin-bottom: 50px;
`;

const ButtonText = styled(Text)`
   color: #FFF; 
`;

const Page = (props) => {


    const start = () => {
        props.navigation.navigate('StarterName');
    }

    return(
        <Container>
            <WelcomeText>Bem vindo(a) ao DevFit</WelcomeText>
            <WelcomeImage>
                <WelcomeLogo source={require('../assets/boneco.png')}/>
            </WelcomeImage>
            <BeginConfigArea>
                <DefaultButton width="100%" bgcolor="#0072C0" underlayColor="#0B7AC6" onPress={start}>
                    <ButtonText>Iniciar Configuração</ButtonText>
                </DefaultButton>
            </BeginConfigArea>
        </Container>
    );
}

Page.navigationOptions = {
    header: null
}

export default Page;