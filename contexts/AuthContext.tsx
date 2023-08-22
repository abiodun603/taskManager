'use client';

// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
// import { useRouter, usePathname, useSearchParams } from 'next/navigation'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from '../configs/auth'

// ** Navigation
import { useNavigation } from '@react-navigation/native';

// ** Types
import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType, SignupOtp, StepperValuesType, ForgetOtp, ResetPassParams } from './types'
import Toast from 'react-native-toast-message';


// ** Defaults
export const defaultProvider: AuthValuesType = {
  user: null,
  loading: false,
  token: '',
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  forgetPass: () => Promise.resolve(),
  resetPass: () => Promise.resolve(),
  pass: () => Promise.resolve(),
  otp: () => Promise.resolve(),
  signinOtp: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

export const StepperProvider: StepperValuesType = {
  userData: null,
  setUserData: () => null,
}

 const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const headers = {
  'Content-Type': 'application/json',
  'X-API-Key': process.env.REACT_APP_API_KEY
}


const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
  const [token, setToken] = useState('')
  // console.log(user)

  //
  const navigation = useNavigation(); // Get the navigation object using the hook




  // useEffect(() => {
  //   const initAuth = async (): Promise<void> => {
  //     const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
  //     setLoading(true)
  //     console.log(storedToken)
  //     if (storedToken) {
  //       const userData = JSON.parse(window.localStorage.getItem(authConfig.storageDatekeyName)!)

  //       setLoading(false)
  //       setUser(userData)
  //       setToken(storedToken)
  //       console.log(user)
  //     } else {
  //       localStorage.removeItem('userData')
  //       localStorage.removeItem('refreshToken')
  //       localStorage.removeItem('accessToken')
  //       setUser(null)
  //       setLoading(false)
  //       if (authConfig.onTokenExpiration === 'logout' && !pathname.includes('login')) {
  //         router.replace('/login')
  //       }
  //       setLoading(false)
  //     }
  //   }

  //   initAuth()
  // }, [])


  // useEffect(() => {
  //   const initAuth = async (): Promise<void> => {
  //     setLoading(true)
  //   if (!user) {
  //       // const userData = JSON.parse(window.localStorage.getItem(authConfig.storageDatekeyName)!)

  //       setLoading(false)
  //       // setUser(userData)
  //       // setToken(storedToken)
  //       // router.push('/')

  //       console.log(user)
  //     } else {
  //       // setUser(null)
  //       // setLoading(false)
  //       // if (user === null) {
  //       //   router.push('/')
  //       // }
  //       setLoading(false)
  //     }
  //   }

  //   initAuth()
  // }, [])

  const handleLog = async (params: LoginParams, errorCallback?: ErrCallbackType) => {
    console.log(headers)
    try {
      setLoading(true)
      await axios
        .post(authConfig.loginEndpoint, 
        {
          email: params.email,
          password: params.password
        },{
          headers: headers,
          withCredentials: true, // Enable sending cookies
        })
        .then(async response => {
          console.log("we re good")
          if(response.status === 200) {
            console.log(response.data);
            setUser({ ...response?.data })
            setLoading(false)
            // navigation.navigate("CustomDrawer")
          }
        }) .catch(err => {
          if (errorCallback) errorCallback(err)
          setLoading(false)
          console.log(err)
        })
        
        } catch (err) {
          setLoading(false)
          console.log(err)
          //toast.error("net::ERR_INTERNET_DISCONNECTED");
        }
    }

  const handleSignup = async (params: SignupOtp, errorCallback?: ErrCallbackType) => {

    try {
      setLoading(true)
      await axios
        .post(authConfig.loginEndpoint, 
        {
          email: params.email
        },{
          headers: headers,
        })
        .then(async response => {
          // params.rememberMe
          //   ? window.localStorage.setItem(authConfig.storageTokenKeyName, response?.data?.data.token)
          //   : null
          if(response.status === 200) {
            setUser({...params})
            navigation.navigate('SetPassword');            
            setLoading(false)
          }
        })
        .catch(err => {
          if (errorCallback) errorCallback(err)
          if(err.response.data.message){
            //toast.success("error");
            //toast.error(err.response.data.message);
          }else{
            //toast.error("Network error, Check your network settings");
          }
          console.log(err.response.data.message)
          setLoading(false)
        })
    } catch (err) {
      setLoading(false)
      //toast.error("net::ERR_INTERNET_DISCONNECTED");
    }
  }

  const handleForgetPassword = async (params: SignupOtp, errorCallback?: ErrCallbackType) => {
    try {
      setLoading(true)
      await axios
        .post(authConfig.forgetPassEndpoint, 
        {
          email: params.email
        },{
          headers: headers,
        })
        .then(async response => {
          setUser({...params})
            if(response.status === 200) {
              navigation.navigate("ResetCode")

            }
          setLoading(false)
        })

        .catch(err => {
          if (errorCallback) errorCallback(err)
          if(err.response.data.message){
            //toast.success("error");
            //toast.error(err.response.data.message);
          }else{
            //toast.error("Network error, Check your network settings");
          }
          console.log(err.response.data.message)
          setLoading(false)
        })
    } catch (err) {
      setLoading(false)
      //toast.error("net::ERR_INTERNET_DISCONNECTED");
    }
  }

  const handleOtp = async (params: ForgetOtp, errorCallback?: ErrCallbackType) => {
    try {
      setLoading(true)
      await axios
        .post(authConfig.verifyTokenEndpoint, 
        {
          token: params.otp
        },{
          headers: headers,
        })
        .then(async response => {
          setUser({...params})
            if(response.status === 200) {
              navigation.navigate("ResetCode")

            }
          setLoading(false)
        })

        .catch(err => {
          if (errorCallback) errorCallback(err)
          if(err.response.data.message){
            //toast.success("error");
            //toast.error(err.response.data.message);
          }else{
            //toast.error("Network error, Check your network settings");
          }
          console.log(err.response.data.message)
          setLoading(false)
        })
    } catch (err) {
      setLoading(false)
      //toast.error("net::ERR_INTERNET_DISCONNECTED");
    }
  }

  const handleSigninOtp = async (params: SignupOtp, errorCallback?: ErrCallbackType) => {
    // console.log(params.otp)
    if( params.otp === '') {
      //toast.error("OTP cannot be empty")
      return
    }
    if(typeof params.email === "undefined") {
      //toast.error("Email not defined, go back to Login and Try again")
      return
    }
    try {
      setLoading(true)
      await axios
        .get( `${authConfig.otpEndpoint}?filter=email,eq,${params.email}&filter=token,eq,${params.otp}`, 
        {
          headers: headers,
          withCredentials: true, 
        })
        .then(async response => {
         const data = response.data?.records
        //  !data.length ? //toast.error("Incorrect OTP, Try again")
        //  : router.push("/auth/signin-email-success")

          // console.log(response.data?.records);
          // response.status === 200 
          setLoading(false)
        })

        .catch(err => {
          if (errorCallback) errorCallback(err)
          //toast.error(err.response.data.message);
          console.log(err.response.data.message)
          setLoading(false)
        })
    } catch (err) {
      setLoading(false)
      //toast.error("net::ERR_INTERNET_DISCONNECTED");
    }
  }

  const handleResetPassword = async (params: ResetPassParams, errorCallback?: ErrCallbackType) => {
    try {
      setLoading(true)
      await axios
        .post(authConfig.resetPassEndpoint, 
        {
          new_password: params.new_password,
          password_confirmation: params.password_confirmation,

        },{
          headers: headers,
        })
        .then(async response => {
          setUser({...params})
            if(response.status === 200) {
              navigation.navigate("ResetSuccess")
            }
          setLoading(false)
        })

        .catch(err => {
          if (errorCallback) errorCallback(err)
          if(err.response.data.message){
            //toast.success("error");
            //toast.error(err.response.data.message);
          }else{
            //toast.error("Network error, Check your network settings");
          }
          console.log(err.response.data.message)
          setLoading(false)
        })
    } catch (err) {
      setLoading(false)
      //toast.error("net::ERR_INTERNET_DISCONNECTED");
    }
  }

  const handlePass = async (params: LoginParams, errorCallback?: ErrCallbackType) => {
    try {
      setLoading(true)
      await axios
        .post(authConfig.registerEndpoint, 
        {
          email: params.email,
          password: params.password
        },{
          headers: headers,
          withCredentials: true, // Enable sending cookies
        })
        .then(async response => {
          console.log(response)
          
          // const returnUrl = searchParams.toString()

          // const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/dashboard'
          // router.replace(redirectURL as string)
          // setUser({...response.data})
          console.log(user)

          if(response.status === 200) {
            const userId = user?.id
            console.log(user)
            console.log(userId)
            const data = {
              userid: response.data.id,
              firstname: "onboarding",
              middlename: "onboarding",
              lastname: "onboarding",
              dateofbirth: null,
              email: response.data.email,
              phonenumber: "",
              address: null,
              stateofresidence: "",
              stateoforigin: "",
              country: "",
              profile_image: null,
              idtype: 1,
              idcard: null,
              issuedate: "",
              expirydate: "",
              kyclevel: 1,
              occupation: "",
              businessname: null,
              businessregnumber: null,
              businessphonenumber: null,
              businessemail: null,
              website: null,
              businessaddress: null,
              businesstype: null,
              businessindustry: null,
              income: null,
              networth: null,
              sourceoffund: null,
              purposeofaccount: null,
              consenttoverifyinfo: null,
              consentshareinfowithreg: null,
              iddocument: null,
              businessregdoc: null,
              financialstatement: null,
              proofofaddress: null     
            }
                
            try {
              setLoading(true)
              await axios
              .post(
                authConfig.createProfile, 
                data,
                {
                  headers: headers,
                  withCredentials: true, // Enable sending cookies
                }
              ).then(async response => {
                console.log(response)
                // response.status === 200 && router.push("/auth/pass-verified")
                setLoading(false)
              }) .catch(err => {
  
                if (errorCallback) errorCallback(err)
                
                setLoading(false)

              })
            } catch (err) {
              setLoading(false)
            }
          }

          setLoading(false)
        })

        .catch(err => {
          if (errorCallback) errorCallback(err)
          //toast.error(err.response.data.message)
          console.log(err)
          setLoading(false)
        })
    } catch (err) {
      setLoading(false)
      //toast.error("net::ERR_INTERNET_DISCONNECTED");
    }
  }

 

  const handleLogout = () => {
    console.log('dfdfd')
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    // router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    token,
    login: handleLog,
    signup: handleSignup,
    otp: handleOtp,
    signinOtp: handleSigninOtp,
    pass: handlePass,
    logout: handleLogout,
    forgetPass: handleForgetPassword,
    resetPass: handleResetPassword
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }



// handleSignin -> signin-verification -> signin-otp -> signin-email-success -> Go to Dashboard

// handleSignUp -> signin-verification -> 