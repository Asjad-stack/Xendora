import { useState } from "react"

const useCreateWallet = () => {

    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return {
        newPassword, setNewPassword,
        confirmPassword, setConfirmPassword
    }
}

export default useCreateWallet
