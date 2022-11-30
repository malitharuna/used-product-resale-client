import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    
    useEffect(() => {
        if (email) {
            fetch(`https://resale-items-online-server.vercel.app/users/admin?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data){
                        setIsAdminLoading(false);
                        setIsAdmin(data.isAdmin);
                    }
                    
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;