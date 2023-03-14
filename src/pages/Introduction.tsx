import { Affix, Button, rem, Title, Text } from "@mantine/core"
import { VscDebugStart } from 'react-icons/vsc'
export const Introduction = () => {


    return (
        <>
            <Title mt="xl">HCS Emoji Password Entry</Title>
            <Text mt="md">Welcome to our experiment studying the effects of including Emojis in a password on its usability, memorability and security. We will ask you to come up with a regular and emoji-based password and recall them after a short memory game while we keep track of some metrics such as success rate. 
It should take a maximum of 10 minutes to complete the study, thank you for participating. {'\n'}
You are welcome to withdraw from the experiment at any time, please contact us at 2383228f@student.gla.ac.uk if you have any questions. Click the 'Get Started' button to begin. </Text>

            <Affix position={{ bottom: rem(20), right: rem(20)}}>
                <a href="emoji"><Button color="green" leftIcon={<VscDebugStart/>}>Get Started</Button></a>
            </Affix>
        </>    
    )
}