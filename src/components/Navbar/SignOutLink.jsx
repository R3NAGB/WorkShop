/* eslint-disable no-unused-vars */

import { SignOutButton } from "@clerk/clerk-react"
import { useToast } from "@/hooks/use-toast"
import { Description } from "@radix-ui/react-toast";
const SignOutLink = () => {
    const { toast } = useToast();

    const handleLogout = () => {
        toast({Description: "Logout successfully"});
    }

    return (
        <SignOutButton redirectUrl="/">
            <button onClick={handleLogout}>
                Logout
            </button>
        </SignOutButton>
    )
}

export default SignOutLink
