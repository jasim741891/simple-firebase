import { useContext } from "react";
import AuthContext from "./../Context/AuthProvider";

const useAthu = () => {
    return useContext(AuthContext)
}

export default useAthu;