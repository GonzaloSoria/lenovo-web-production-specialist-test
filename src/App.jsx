import { Banner } from './components/Banner'
import { ContentMenu } from './components/ContentMenu'
import { Header } from './components/Header'
import { MainMenu } from './components/MainMenu'
import { SubMenu } from './components/SubMenu'
import { Dashboard } from './components/Dashboard'

export const App = () => {

  return (
    <>
      <Header />
      <MainMenu />
      <SubMenu />
      <Banner />
      <ContentMenu />
      <Dashboard />
    </>
  )
}
