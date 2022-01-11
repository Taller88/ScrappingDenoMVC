const {cwd} = Deno;
import * as dejs from 'https://deno.land/x/dejs/mod.ts';
import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import {fromFileUrl } from "https://deno.land/std@0.120.0/path/mod.ts"
import {readableStreamFromReader } from "https://deno.land/std@0.120.0/streams/conversion.ts"


class view{
    async make(ctx:any, name:string, params:any = {}){

        const u = new URL(`${cwd()}/res/view/${name}.html`, import.meta.url);
        console.log("View make html")
        console.log(`${name} html`)
        const file = await Deno.open(fromFileUrl(u));
    
        // ctx.response.body= 

        // const Rdn = await dejs.renderFileToString(`${cwd()}/res/view/${name}.ejs`,{BaseURL:ctx.request.url.origin,data:params})
        return  ctx.response.body=readableStreamFromReader(file)
    }
}


const View = new view();

export default View;