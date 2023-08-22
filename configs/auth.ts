// eslint-disable-next-line import/no-anonymous-default-export
export default {
  meEndpoint: '/auth/me',
  loginEndpoint:`https://collateam.onrender.com/api/v1/sign-in`,
  forgetPassEndpoint:`https://collateam.onrender.com/api/v1/forgot-password`,
  verifyTokenEndpoint:`https://collateam.onrender.com/api/v1/verify-password-reset-token`,
  resetPassEndpoint:`https://collateam.onrender.com/api/v1/reset-password`,
  registerEndpoint:`${process.env.REACT_APP__ABA_BASE_URL_KEY}/register`,
  sendOtpEndpoint:`${process.env.REACT_APP__ABA_BASE_URL_KEY}/records/validateotp`,
  otpEndpoint:`${process.env.REACT_APP__ABA_BASE_URL_KEY}/records/validateotp`,
  createProfile:`${process.env.REACT_APP__ABA_BASE_URL_KEY}/records/profile`,
  storageTokenKeyName: 'accessToken',
  storageDatekeyName: 'userData',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}


