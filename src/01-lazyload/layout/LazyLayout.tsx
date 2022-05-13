import { NavLink, Switch, Route } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const LazyLayout = () => {
  return (
    <div>
        <h1>
            LazyLayout Page
        </h1>

        <ul>
            <li>
                <NavLink to="/lazyload/lazy1"> Lazy 1</NavLink>
            </li>
            <li>
                <NavLink to="/lazyload/lazy2"> Lazy 2</NavLink>
            </li>
            <li>
                <NavLink to="/lazyload/lazy3"> Lazy 3</NavLink>
            </li>
        </ul>

        <Switch>
            <Route path="/lazyload/lazy1" component={ LazyPage1 } />
            <Route path="/lazyload/lazy2" component={ LazyPage2 } />
            <Route path="/lazyload/lazy3" component={ LazyPage3 } />

            <Route path="/lazyload/*" component={ LazyPage1 } />
        </Switch>
    </div>
  )
}

export default LazyLayout;