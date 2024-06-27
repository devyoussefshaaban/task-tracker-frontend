import { useState } from 'react'
import { SignInForm, SignUpForm } from '../components'

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(false)

  const switchForm = () => setIsLoginForm(ps => !ps)

  if(isLoginForm) return <SignInForm switchForm={switchForm} />
  return <SignUpForm switchForm={switchForm} />
}

export default AuthPage