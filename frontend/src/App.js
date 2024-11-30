
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import nike_banner from './Components/Asset/cart_icon.jpg'
import crocs_banner from './Components/Asset/Crocs_logo.png'
import kids_banner from './Components/Asset/cart_icon.jpg'
import NotFound from './Pages/NotFound';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Shop />} />
                    <Route path='/nike' element={<ShopCategory banner={nike_banner} category="nike" />} />
                    <Route path='/crocs' element={<ShopCategory banner={crocs_banner} category="crocs" />} />
                    <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />} />
                    <Route path='/product' element={<Product />}>
                        <Route path=':productId' element={<Product />} />
                    </Route>
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/login' element={<LoginSignUp />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
