import {router,Route,} from '../.core/Router___.ts'
import View from '../.core/view___.ts'
import { ControllerRoute as Controller } from '../.core/controller___.ts'

Route.get("/", async(ctx) => {
    return await View.make(ctx, "index");
})

Route.get("/hello", await Controller.set("DefaultController", "hello"));
Route.get("/gf", await Controller.set("DefaultController", "show"));
Route.get("/webconfig", await Controller.set("ConfigController/controller", "get"))
Route.get("/webconfig/create", await Controller.set("ConfigController/controller", "create"))

let listrouter = async() => {
    return Route.ShowRoute()
}

export {router, listrouter, Route}