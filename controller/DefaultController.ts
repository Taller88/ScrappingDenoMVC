import View from '../.core/view___.ts'
import {Controller} from '../.core/controller___.ts'

export class DefaultController extends Controller{

     public async hello(ctx:any){
         
         console.log("hello function ")
         ctx.response.body =await View.make(ctx,'hello')
     }

     public async show(ctx:any){
        const body = await ctx.request.body();  // get body
        console.log(await body.type); // get type
        console.log(await body.value); // get value
        
        const formData = await body.value.read(); // read formdata
        console.log(formData.fields); // get formdata field
        console.log(formData.files); // get formdata files
        ctx.response.body = 'success'
     }
 }