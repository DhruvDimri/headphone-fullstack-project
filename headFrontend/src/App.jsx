import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import Main from "./components/Main";
import ExploreResult from "./components/ExploreResult";
import HeadphoneProduct from "./components/HeadphoneProduct";
import Registration from "./components/Registration";
import Login from "./components/Login";
import RegLog from "./components/RegLog";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const headUrl = [
    "https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-realistic-3d-render-of-headphones-image_3796612.jpg",
    "https://wallpaperaccess.com/full/2068799.jpg",
    "https://th.bing.com/th/id/OIP.K-a_80FA8cqcHicFXOPPwAHaEJ?pid=ImgDet&w=184&h=103&c=7&dpr=1.3",
    "https://th.bing.com/th/id/OIP.sPyTHrR3XKN26yuemfNeXgHaE8?w=1950&h=1300&rs=1&pid=ImgDetMain",
    "https://img.freepik.com/premium-photo/3d-rendering-showcases-headphones-as-ultimate-audio-listening-device_892776-13381.jpg",
    "https://www.wallpaperflare.com/static/800/486/460/headphones-yellow-background-music-black-wallpaper.jpg",
    "https://images.alphacoders.com/109/1090856.jpg",
    "https://th.bing.com/th/id/OIP.lP8SiQbyAHEr7VlvNhnS9gHaFj?w=1093&h=820&rs=1&pid=ImgDetMain",
    "https://hdwallpaperim.com/wp-content/uploads/2017/08/24/113252-Sennheiser-music-headphones.jpg"
  ];
  const headHeading = "Headphone";
  const rupee = [1690,2130,4990,5930,3120,1280,3320,2800,900];

  const earUrl = [
    "https://th.bing.com/th/id/R.0431e2268d4c7fe7019e77665fcbc85e?rik=6W8FI%2bwiDSI35w&riu=http%3a%2f%2ftoolsandtoys.net%2fwp-content%2fuploads%2f2012%2f09%2fTT-2012-09-13-earpods-600x432.jpeg&ehk=HN9cZSOBT3VWIoTUnI%2fcaIMsrTpXRW2gA9DHdFefXCM%3d&risl=&pid=ImgRaw&r=0",
    "https://freepngimg.com/thumb/earphone/142377-earphone-hd-image-free.png",
    "https://th.bing.com/th/id/OIP.BwZtxEIni6BFnjhYozAhggAAAA?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.vY2Bcjuc3ORk0hNrp-9T0QHaNK?pid=ImgDet&w=474&h=842&rs=1",
    "https://live.staticflickr.com/54/277891176_ed295082da.jpg",
    "https://live.staticflickr.com/8447/7998388473_6d733b542e.jpg",
    "https://www.helpingmehear.com/wp-content/uploads/2017/10/earbuds-768x576.jpg",
    "https://cdn1.smartprix.com/rx-iqso8x5g0-w1200-h1200/qso8x5g0.jpg",
    "https://th.bing.com/th/id/OIP.t9GRrACbsLA5b3ZISTMHUQAAAA?rs=1&pid=ImgDetMain"
  ];
  const earHeading = "Earphone";

  const airUrl = [
    "https://rukminim1.flixcart.com/image/832/832/xif0q/headphone/n/x/h/latest-earbuds-tws-xpods-m10-buds-true-wireless-bluetooth-5-1-v-original-imagmfy4gkcktehh.jpeg?q=70",
    "https://wallpaperaccess.com/full/4340617.jpg",
    "https://images.thequint.com/thequint/2019-10/e1dd655f-57f4-4263-9ba3-bb557c5e704f/Screen_Shot_2019_10_28_at_10_30_45_PM.png?auto=format%2Ccompress",
    "https://th.bing.com/th/id/OIP.bjlp1Bj4QjMvAdZLVXIXbAHaEK?pid=ImgDet&w=474&h=266&rs=1",
    "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8YXBwbGUlMjBhaXJwb2RzfHwwfHx8fDE2Mjc4NDkxMjM&ixlib=rb-1.2.1&q=80&w=1080",
    "https://i5.walmartimages.com/asr/3579ac88-ad01-4427-9ae2-a8d7ea7b836c_1.55858b9824db1b732905220e1eb110ce.jpeg",
    "https://i.etsystatic.com/25485724/r/il/58aa3b/2874165292/il_1588xN.2874165292_qq83.jpg",
    "https://i5.walmartimages.com/asr/5404d377-a5bc-43c1-8b96-141ca97c3e2e_1.c700f52e6de17d18cf61f80cb9e30bf7.jpeg",
    "https://th.bing.com/th/id/OIP.2F8Ji-GFXxJP5MZN4F7gWQHaHO?w=1500&h=1463&rs=1&pid=ImgDetMain"
  ];
  const airHeading = "Air-Pod";

  return (
    <AuthProvider>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<RegLog />}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<ProtectedRoute element={Main}/>}/>
          <Route path="/about" element={<ProtectedRoute element={About}/>}/>
          <Route path="/product" element={<ProtectedRoute element={Explore}/>}/>
          <Route path="/contact" element={<ProtectedRoute element={Contact}/>}/>
          <Route path="/explore" element={<ProtectedRoute element={Explore}/>}/>
          <Route path="/explore-headphone-result" element={<ProtectedRoute element={ExploreResult} name={headUrl} rupee={rupee} title={headHeading}/>}/>
          <Route path="/explore-earphone-result" element={<ProtectedRoute element={ExploreResult} name={earUrl} rupee={rupee} title={earHeading}/>}/>
          <Route path="/explore-airpod-result" element={<ProtectedRoute element={ExploreResult} name={airUrl} rupee={rupee} title={airHeading}/>}/>
          <Route path="/explore-result-product" element={<ProtectedRoute element={HeadphoneProduct}/>}/>
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;