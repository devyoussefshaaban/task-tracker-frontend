import { ReactNode } from 'react'
import MainHeader from './mainHeader'

const MainLayout = (props: {children: ReactNode}) => {
  return (
        <>
            <MainHeader />
            <main>
                {props.children}
            </main>
        </>
  )
}

export default MainLayout