import { Outlet } from 'react-router-dom';
import Search from './Search';
import Nav from './NavInspo';
import Disclaimer from './DisclaimerInspo';
import '../../style/Inspiration.css'


const Layout = () => (
  <div className="App servicesContent" data-testid="app-wrapper">
    <Search />
    <Nav />
    <Outlet />
    <Disclaimer />
  </div>
);

export default Layout;