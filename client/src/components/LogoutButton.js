import React from "react"
import {useAuth0} from "@auth0/auth0-react"
import Button from '@material-ui/core/Button';



const LogoutButton = (props)=>{
    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();

    return(
       
            !isAuthenticated && (
                <Button className={props.className} target={props.target} color={props.color} onClick={()=>loginWithRedirect()}>
                    Log in/Sign up
                </Button>

            )
        
        
    )
    
       
}

export default LogoutButton