// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Navigation/navbar";
// import Footer from "./Footer/footer";
// import Home from "./Routes/Home_page/home";
// import About from "./Routes/About_page/about";
// import Contact from "./Routes/Contact_page/contact";
// import Services from "./Routes/Services_page/services";
// import International_shipping from "./Routes/Products/International_shipping/international_shipping";
// import Nation_wide from "./Routes/Products/Nation-wide/nation_wide";
// import Faq from "./Routes/Faq/faq";
// import Not_found from "./Routes/Not_found/not_found";
// import Medial from "./MedialIcons/medial";
// import ScrollToTop from "./ScrollToTop/scrollToTop";
// import Gallery from "./Routes/Gallery_page/gallery";
// import CarsDetails from "./Routes/Cars_Details_page/carsDetails";
// import Menu from "./Routes/menu_page/menu";
// import MenuDetails from "./Routes/menu_page/MenuDetails";
// import Product from "./Routes/ProductPage/product";
// import ProductDetails from "./Routes/ProductDetails/productDetails";
// import Cart from "./Component/cart"; 
// import ShippingDetails from "./Routes/ShippingDetailsPage/shippingDetails";
// import SignIn from "../src/Auth/Sign_in/signIn";
// import SignUp from "../src/Auth/Sign_up/siginUp";
// import { AuthProvider } from "./Context/authcontext";
// import ProtectedRoute from "../src/Context/protectedRoutes"

// function App() {
//   return (
//     <AuthProvider>
//       <Navbar />
//       <Medial />
//       <ScrollToTop />

//       <Routes>
//         {/* 🔐 Protected Routes (requires sign in) */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <ProtectedRoute>
//               <About />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <ProtectedRoute>
//               <Contact />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/services"
//           element={
//             <ProtectedRoute>
//               <Services />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/international_shipping"
//           element={
//             <ProtectedRoute>
//               <International_shipping />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/nation_wide"
//           element={
//             <ProtectedRoute>
//               <Nation_wide />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/faq"
//           element={
//             <ProtectedRoute>
//               <Faq />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/gallery"
//           element={
//             <ProtectedRoute>
//               <Gallery />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/carsDetails/:id"
//           element={
//             <ProtectedRoute>
//               <CarsDetails />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/menu"
//           element={
//             <ProtectedRoute>
//               <Menu />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/menu/menu/:detailsId"
//           element={
//             <ProtectedRoute>
//               <MenuDetails />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/product"
//           element={
//             <ProtectedRoute>
//               <Product />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/productDetails/:id"
//           element={
//             <ProtectedRoute>
//               <ProductDetails />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/cart"
//           element={
//             <ProtectedRoute>
//               <Cart />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/shippingDetails"
//           element={
//             <ProtectedRoute>
//               <ShippingDetails />
//             </ProtectedRoute>
//           }
//         />

//         {/* 🔓 Public Routes */}
//         <Route path="/signIn" element={<SignIn />} />
//         <Route path="/signUp" element={<SignUp />} />
//         <Route path="*" element={<Not_found />} />
//       </Routes>

//       <Footer />
//     </AuthProvider>
//   );
// }

// export default App;





// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./Navigation/navbar";
// import Footer from "./Footer/footer";
// import Home from "./Routes/Home_page/home";
// import About from "./Routes/About_page/about";
// import Contact from "./Routes/Contact_page/contact";
// import Services from "./Routes/Services_page/services";
// import International_shipping from "./Routes/Products/International_shipping/international_shipping";
// import Nation_wide from "./Routes/Products/Nation-wide/nation_wide";
// import Faq from "./Routes/Faq/faq";
// import Not_found from "./Routes/Not_found/not_found";
// import Medial from "./MedialIcons/medial";
// import ScrollToTop from "./ScrollToTop/scrollToTop";
// import Gallery from "./Routes/Gallery_page/gallery";
// import CarsDetails from "./Routes/Cars_Details_page/carsDetails";
// import Menu from "./Routes/menu_page/menu";
// import MenuDetails from "./Routes/menu_page/MenuDetails";
// import Product from "./Routes/ProductPage/product";
// import ProductDetails from "./Routes/ProductDetails/productDetails";
// import Cart from "./Component/cart";
// import ShippingDetails from "./Routes/ShippingDetailsPage/shippingDetails";
// import SignIn from "../src/Auth/Sign_in/signIn";
// import SignUp from "../src/Auth/Sign_up/siginUp";
// import { AuthProvider, useAuth } from "./Context/authcontext";
// import ProtectedRoute from "../src/Context/protectedRoutes";
// import DashboardLayout from "./Routes/Dashboard_page/dashboard";
// import Notivication from "./Routes/Dashboard_page/Notivication_page/notivication";
// import Setting from "./Routes/Dashboard_page/Setting_page/setting";

// function AppContent() {
//   const { isLoggedIn } = useAuth(); 
//   const {pathname} = useLocation()



//   return (
//     <>

   
    
     
//       {(isLoggedIn && pathname !== '/dashboard') && <Navbar /> }
//       {/* <Medial /> */}
//       {/* <ScrollToTop /> */}
//       <Routes>

       
     
//         <Route path="/signIn" element={<SignIn />} />
//         <Route path="/signUp" element={<SignUp />} />

        
//         <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>  }/>
//         <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute> }/>
//         <Route path="/contact" element={ <ProtectedRoute> <Contact /></ProtectedRoute>  }/>
//         <Route path="/services" element={ <ProtectedRoute> <Services />  </ProtectedRoute>  }/>
//         <Route path="/international_shipping" element={  <ProtectedRoute> <International_shipping /> </ProtectedRoute> }/>
//         <Route path="/nation_wide" element={ <ProtectedRoute> <Nation_wide />  </ProtectedRoute>  }/>
//         <Route path="/faq"element={<ProtectedRoute><Faq /> </ProtectedRoute> }/>
//         <Route path="/gallery" element={ <ProtectedRoute> <Gallery /></ProtectedRoute> }/>
//         <Route path="/carsDetails/:id" element={ <ProtectedRoute> <CarsDetails />  </ProtectedRoute>  }/>
//         <Route path="/menu" element={ <ProtectedRoute>  <Menu /> </ProtectedRoute>  }/>
//         <Route path="/menu/menu/:detailsId" element={ <ProtectedRoute> <MenuDetails /> </ProtectedRoute>  }/>
//         <Route path="/product" element={<ProtectedRoute>< Product /></ProtectedRoute> }/>
//         <Route path="/productDetails/:id" element={<ProtectedRoute> <ProductDetails /> </ProtectedRoute>  } />
//         <Route path="/cart" element={ <ProtectedRoute> <Cart /> </ProtectedRoute>  }/>
//         <Route path="/shippingDetails" element={<ProtectedRoute> <ShippingDetails /></ProtectedRoute> }/>

//         <Route path="/dashboard" element={<DashboardLayout />} />
//         <Route path="/notivication" element={<Notivication />} />
//         <Route path="/setting" element={<Setting />} />


//         <Route path="*" element={<Not_found />} />
//       </Routes>

//       {(isLoggedIn && pathname !== '/dashboard') && < Footer/> }
      
//     </>
//   );
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   );
// }





import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navigation/navbar";
import Footer from "./Footer/footer";
import Home from "./Routes/Home_page/home";
import About from "./Routes/About_page/about";
import Contact from "./Routes/Contact_page/contact";
import Services from "./Routes/Services_page/services";
import International_shipping from "./Routes/Products/International_shipping/international_shipping";
import Nation_wide from "./Routes/Products/Nation-wide/nation_wide";
import Faq from "./Routes/Faq/faq";
import Not_found from "./Routes/Not_found/not_found";
import Gallery from "./Routes/Gallery_page/gallery";
import CarsDetails from "./Routes/Cars_Details_page/carsDetails";
import Menu from "./Routes/menu_page/menu";
import MenuDetails from "./Routes/menu_page/MenuDetails";
import Product from "./Routes/ProductPage/product";
import ProductDetails from "./Routes/ProductDetails/productDetails";
import Cart from "./Component/cart";
import ShippingDetails from "./Routes/ShippingDetailsPage/shippingDetails";
import SignIn from "../src/Auth/Sign_in/signIn";
import SignUp from "../src/Auth/Sign_up/siginUp";
import { AuthProvider, useAuth } from "./Context/authcontext";
import ProtectedRoute from "../src/Context/protectedRoutes";
import DashboardLayout from "./Routes/Dashboard_page/dashboard";
import Notivication from "./Routes/Dashboard_page/Notivication_page/notivication";
import Setting from "./Routes/Dashboard_page/Setting_page/setting";

function AppContent() {
  const { isLoggedIn } = useAuth();
  const { pathname } = useLocation();

  const isDashboardRoute = pathname.startsWith("/dashboard");
  const isAuthPage = pathname === "/signIn" || pathname === "/signUp";

  return (
    <>
      {/* ✅ Show Navbar only if user is logged in and not on dashboard */}
      {isLoggedIn && !isDashboardRoute && !isAuthPage && <Navbar />}

      <Routes>
        {/* Public (Auth) Routes */}
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />

        {/* Protected Main Routes */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
        <Route path="/international_shipping" element={<ProtectedRoute><International_shipping /></ProtectedRoute>} />
        <Route path="/nation_wide" element={<ProtectedRoute><Nation_wide /></ProtectedRoute>} />
        <Route path="/faq" element={<ProtectedRoute><Faq /></ProtectedRoute>} />
        <Route path="/gallery" element={<ProtectedRoute><Gallery /></ProtectedRoute>} />
        <Route path="/carsDetails/:id" element={<ProtectedRoute><CarsDetails /></ProtectedRoute>} />
        <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
        <Route path="/menu/menu/:detailsId" element={<ProtectedRoute><MenuDetails /></ProtectedRoute>} />
        <Route path="/product" element={<ProtectedRoute><Product /></ProtectedRoute>} />
        <Route path="/productDetails/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/shippingDetails" element={<ProtectedRoute><ShippingDetails /></ProtectedRoute>} />

        {/* Dashboard (Nested) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Notivication />} /> {/* Default */}
          <Route path="notivication" element={<Notivication />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<Not_found />} />
      </Routes>

      {/* ✅ Show Footer only if user is logged in and not on dashboard or auth pages */}
      {isLoggedIn && !isDashboardRoute && !isAuthPage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}




