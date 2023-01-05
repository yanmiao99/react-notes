import {NavLink, Link, Route, Switch, Redirect} from "react-router-dom";
import Home from "./home";
import Category from "./category";
import Products from "./products";
import React from "react";

//switch：映射第一个，匹配到一个以后就不继续匹配了，性能更好
//replace：路由跳转使用replace模式，默认push模式
//exact：精准匹配查找

const Router5 = () => {
    return (
        <>

            {/*跳转路由的标签 */}
            <div><Link to="/">Home</Link></div>
            <div><Link to="/category">Category</Link></div>
            <div><Link to="/products">Products</Link></div>

            <div><NavLink to="/">Home</NavLink></div>
            <div><NavLink to="/category">Category</NavLink></div>
            <div><NavLink to="/products">Products</NavLink></div>

            {/* 如果当前路径与 path 匹配就会渲染对应的组件 */}
            {/*所以如果你期望的是根据一个安全匹配的 path 去渲染对应的组件，你就应该考虑使用属性 exact 了。*/}
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/category" component={Category}/>
                <Route path="/products" component={Products}/>

                {/*如果 URL 是 /products ，那么 path 为 /products 和 /:id 的路由会一起在页面渲染出来，这就是这样设计的。然而，这种行为基本不可能是我们所期待的，所以才要用到 <Switch> ，有了 <Switch> ，只有第一个与当前 URL 匹配到的子 <Route> 才会被渲染：*/}

                <Route path="/:id">
                    123
                </Route>
                {/*//兜底，没有匹配的重定向*/}
                <Redirect to='/'/>
            </Switch>
        </>
    )
}


export default Router5
