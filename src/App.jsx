import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { Button, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import TopBar from "./global/TopBar";
import SideBar from './global/SideBar'
import { Route, Routes } from "react-router-dom";
import Dashboard from './scenes/dashboard'
import Team from './scenes/team'
import Invoices from './scenes/invoices'
import Contacts from './scenes/contacts'
import Bar from './scenes/bar'
import Form from './scenes/form'
import Line from './scenes/line'
import Pie from './scenes/pie'
import FAQ from './scenes/faq'
import Geography from './scenes/geography'
import Calendar from './scenes/calendar'
import Network from './scenes/network'
import Me from "./scenes/me";
import InProgress from "./scenes/inProgress";

function App() {
  const [theme, colorMode] = useMode();
  const isNonMobileScreen = useMediaQuery('(min-width:800px)')
  // const isNonMobile = useMediaQuery("(min-width:600px)");
  if (!isNonMobileScreen) return (<h1>You're using a mobile device, This 
    app is not optimized for mobile devices.
    Please use a desktop or laptop to view this app.
    <br/>
    Thank you.
    Redirecting to...
    <br/>
    <Button
      sx={{
        backgroundColor:"black" ,
        p:'20px',
        color:'white'
      }}
    onClick={window.location.href='https://etmatrix-ar.netlify.app/'}>
        Another Cool WebSite
    </Button>
  </h1>)
  else 
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar/>
          <main className="content">
                <TopBar/>
                <Routes>
                <Route path={'/'} element={<Me/>}/>
                  <Route path={'/dashboard'} element={<Dashboard/>}/>
                  <Route path={'/team'} element={<Team/>}/>
                  <Route path={'/contacts'} element={<Contacts/>}/>
                  <Route path={'/invoices'} element={<Invoices/>}/>
                  <Route path={'/form'} element={<Form/>}/>
                  <Route path={'/bar'} element={<Bar/>}/>
                  <Route path={'/pie'} element={<Pie/>}/>
                  <Route path={'/line'} element={<Line/>}/>
                  <Route path={'/faq'} element={<FAQ/>}/>
                  <Route path={'/geography'} element={<Geography/>}/>
                  <Route path={'/network'} element={<Network/>}/>
                  <Route path={'/calendar'} element={<Calendar/>}/>
                  <Route path={'/inprogress'} element={<InProgress/>}/> 
                </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
