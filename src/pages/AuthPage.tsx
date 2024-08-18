import { useState } from 'react'
import { SignInForm, SignUpForm } from '../components'
import { SIGN_UP_FORM_TYPE } from '../components/auth/SignUpForm'

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(false)

  const switchForm = () => setIsLoginForm(ps => !ps)

  if(isLoginForm) return <SignInForm switchForm={switchForm} />
  return <SignUpForm switchForm={switchForm} 
  formType={SIGN_UP_FORM_TYPE.REGISTER_USER} />
}

export default AuthPage