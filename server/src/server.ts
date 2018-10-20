import * as bodyParser from "body-parser";
import * as core from "express-serve-static-core";
import * as express from 'express';
import {Express} from "express";

export class Server {

    public express:Express;
    public port:number = 786;
    public router:core.Router;
    public currentPath:string;

    constructor () {
        this.express = express();
        this.mountRoutes();

        this.express.listen(this.port, (err:any) => {
            if (err) {
                return console.log(err)
            }
            return console.log(`server is listening on ${this.port}`)
        });
    }

    private mountRoutes (): void {
        this.router = express.Router();
        const router = this.router;
        let folderList = __dirname.split('\\');
        folderList.length = folderList.length - 2;


        router.use('/dist', function (req, res, next) {
            const url = req.url;
            const extJs = url.substr(url.length-".js".length);
            const extMap = url.substr(url.length-".js.map".length);
            if(extJs != ".js" && extMap != ".js.map"){
                req.url = req.url + ".js";
            }
            next()
        });
        router.use('',express.static(folderList.join('\\')+ '\\ui'));


        router.use(bodyParser.json());
        router.use(bodyParser.urlencoded({
            extended: true,
            limit : '50mb'
        }));
        this.express.use('/', router);
    }
}