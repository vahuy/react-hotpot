import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NoPage from "./components/page/NoPage";
import PageContainer from "./components/page/PageContainer";
import Blog from "./components/page/Blog";
import Contact from "./components/page/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/page/Layout"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageContainer />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
