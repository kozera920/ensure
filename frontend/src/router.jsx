import {createBrowserRouter} from 'react-router-dom';
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx';
import Users from './pages/Users.jsx';
import NotFound from './pages/NotFound.jsx';
import DefaultLayout from './components/Layouts/DefaultLayout.jsx';
import GuestLayout from './components/Layouts/GuestLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { Navigate } from 'react-router-dom';
import UserProfile from './pages/UserProfile.jsx';
import PolicyDetails from './pages/policies/PolicyDetails';
import InactivePolicies from './pages/InactivePolicies.jsx';
import InprogressPolicies from './pages/InprogressPolicies.jsx';
import BuyNewPolicy from './pages/BuyPolicy/BuyNewPolicy.jsx';

const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to = '/dashboard'/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/active_policies',
                element:<Dashboard/>
            },
            {
                path:'/inactive_policies',
                element:<InactivePolicies/>
            },
            {
                path:'/inprogress_policies',
                element:<InprogressPolicies/>
            },
            {
                path:'/buy_new_policy',
                element:<BuyNewPolicy/>
            },
            {
                path:'/personal_information',
                element:<UserProfile/>
            },
            {
                path:'/policy/:id',
                element: <PolicyDetails />
            }
        ]
    },
    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
                path:'/login',
                element:<Login/>
                
            },
            {
                path:'/register',
                element:<Register/>
            },
        ]    
    },      
    {
        path:'*',
        element:<NotFound/>
    }
])


export default router;