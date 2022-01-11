import { Application, isHttpError,Status,Context } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import {Asset} from './app___.ts'
import {router,listrouter} from '../routers/router.ts'
import Conf from '../config.ts'
import * as ink from 'https://deno.land/x/ink/mod.ts'
import * as dejs from 'https://deno.land/x/dejs/mod.ts';


export default async function runServerApp(){
    const port:number = Conf.PORT;
    const app = new Application();
    let routeAr:any = await listrouter();
    
    app.use(async(ctx, next)=>{
        await next();
        const rt = ctx.response.headers.get("X-Response-Time");
        console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
    })
    
    app.use(async(ctx, next) => {
        try{
            await next();
        }catch(err){
            if(isHttpError(err)){
                switch (err.status){
                    case Status.NotFound:
                        // Not Found Error 
                        console.log("Error Not Found")
                        break;
                    default:
                        console.log('Error Default')
                }
            }else{
                throw err;
            }
        }
    })
    /*
        Cors(Cross Origin Resource Sharing - 교차 출처 리소스 공유)
            - 추가 HTTP헤더를 사용하여 한 출처에서 실행중인 웹 어플리케이션이 
                다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제

    */
    app.use(oakCors()); // Enable CORS for All Routes
    app.use(router.routes())
    app.use(router.allowedMethods())
    app.use(Asset)

    console.log("http://localhost:"+port+"/ init!")
    await app.listen({ port });
}