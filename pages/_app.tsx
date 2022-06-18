import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';
import store from '../StateManageMent/store'
import { Provider } from 'react-redux'
import ShowAllCategoryMealsSelected from '../components/ShowAllCategoryMealsSelected'
import ShowAllCountryMealSelected from '../components/ShowAllCountryMealSelected'
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <Navbar/>
        <ShowAllCountryMealSelected/>
        <ShowAllCategoryMealsSelected/>
        <Component {...pageProps} />
      </Provider>
    );
}

export default MyApp
