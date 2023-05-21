import Basket from "../pages/Basket/Basket";
import Add from "../pages/Site/Add/Add";
import Home from "../pages/Site/Home/Home";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";

export const ROUTES=[{
    path:"/",
    element:<SiteRoot/>,
    children:[
{
    path:"",
    element:<Home/>
},
{
    path:"add",
    element:<Add/>
},
{
    path:"basket",
    element:<Basket/>
}
    ]
}]