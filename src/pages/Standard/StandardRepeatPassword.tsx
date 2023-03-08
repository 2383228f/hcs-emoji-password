import { Title,Text, Affix, Button, rem } from "@mantine/core"
import { useEffect, useState } from "react"
import { Timer } from "timer-node"
import { PasswordEntry } from "../../components/PasswordEntry"

export const StandardRepeatPassword = () => {
    const [password, setPassword] = useState("")
    const [time, setTime] = useState(new Timer())

    const SaveToLocalStorage = () => {
        localStorage.setItem("standard_reentry", password);
        time.pause();
        localStorage.setItem("standard_time", (time.ms().toString()));

        window.location.replace("/complete")
    }

    useEffect(()=>{
        time.start();
    },[])

    return (

        <>
            <Title>Standard password re-entry</Title>

            <Text>Re-enter the password you previously created.</Text>
            <div style={{marginTop:100}}>
            <PasswordEntry isEmoji={false} password={[password, setPassword]} />
            </div>

            <Affix position={{ bottom: rem(20), right: rem(20)}}>
                <Button onClick={SaveToLocalStorage} color="green">Complete task</Button>
            </Affix>   
            
        </>
    )
}