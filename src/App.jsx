import GitHub, { dataInfo } from "./components/GitHub/GitHub.jsx";
import {
  Home,
  Layout,
  About,
  NotFound,
  Footer,
  Header,
  User,
} from "./components/index.js"; //this is imported from single file index.js , where all the components is imported from its source
// import Header from "./components/Header/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* // /also do like this: need layout to render the main layout with header and footer and content between then will be changed */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="user/:userid" element={<User />} />{" "}
            <Route path="github" element={<GitHub />} />{" "}
            {/* we have access of userid in User component */}
          </Route>
        </Routes>
      </BrowserRouter>
      ;
    </>

    //also like this(in this we dont need layout component)
    // <>
    //   {/* // /also do like this : the header and footer will be rendered the main routes will be change*/}
    //   <BrowserRouter>
    //     <Header />
    //     <Routes>
    //       <Route path="" element={<Home />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //     <Footer />
    //   </BrowserRouter>
    //   ;
    // </>
  );
}

export default App;
