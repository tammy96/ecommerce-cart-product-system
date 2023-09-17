import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// Import your components
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import salesProducts from './pages/productsData';
import CartPage from './pages/CartPage'

// Import context providers
import { CartProvider } from './pages/context/CartContext';

// Layouts
import RootLayout from './Layouts/RootLayout.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="Home" element={<Home />} />
      {salesProducts.map((product, index) => (
        <Route
          key={index}
          path={`product/:index`}
          element={<ProductDetails product={product} />}
        />
      ))}
     
     <Route path="CartPage/:index" element={<CartPage />} />


      {/* <Route path="CartPage" element={<CartPage />} /> */}
    </Route>
  )
);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
