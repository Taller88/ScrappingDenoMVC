import { Application, isHttpError,Status,Context } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import {Asset} from './app___.ts'
import {router,listrouter} from '../routers/router.ts'
import Conf from '../config.ts'
import * as ink from 'https://deno.land/x/ink/mod.ts'
import * as dejs from 'https://deno.land/x/dejs/mod.ts';


export default async function runServerApp(){
    
}