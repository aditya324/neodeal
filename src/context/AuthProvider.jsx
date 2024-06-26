import { createContext, useState ,useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from "../axiosInstance/axiosApi";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({});
    const [cart,setCart] = useState(null);
    const [customer,setCustomer] = useState(null);

  const location = useLocation();
  const [route, setRoute] = useState({ 
    to: location.pathname,
    from: location.pathname
  });
  useEffect(()=> {
    setRoute((prev)=> ({to: location.pathname, from: prev.to}) )
  }, [location]);

  const fetchCartAndCustomerByUserId = async(userId) => {
    if(userId){
        try {
            const res = await axios.get('/customer/id/'+userId);
            console.log(res.data);
            setCustomer(res.data?.custDoc);
            const res2 = await axios.get('/cart/customer/'+res.data?.custDoc?._id);
            console.log(res2.data);
            setCart(res2.data.cartDoc);
        } catch (error) {
            console.log(error);
        }
    }
  }

  const fetchFromLocal = async()=> {
    try{
      console.log(sessionStorage.getItem('token'))
      const response =await axios.get('auth/valid',{withCredentials:true})
      console.log(response.data);
      fetchCartAndCustomerByUserId(response.data._id)
      setAuth(response.data)
    }catch(error){
        console.error(error)
    }
    
  }
  useEffect(()=> {
    console.log(auth);
    if(auth.token && !customer && !cart)
        fetchCartAndCustomerByUserId(auth?._id);
    else
        fetchFromLocal();

  },[])

    return (
        <AuthContext.Provider value={{auth,setAuth,route,setRoute,customer,setCustomer,cart,setCart}}>
            {children}
        </AuthContext.Provider>
    )
} 

export default AuthContext;