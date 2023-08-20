import {TarsusHttpApplication,LoadController,LoadInit,LoadServer,LoadStruct,LoadTaro} from 'tarsus/core/httpservice'
import ProxyController from './controller/ProxyController';

@TarsusHttpApplication
class HttpServer{
    static main(){
        LoadController([ProxyController])
        // init
        LoadInit((app)=>{
            const { loadWebpackDev } = require('tarsus-cli/web');
            loadWebpackDev(app)
        });
        LoadStruct()
        LoadTaro()
        // load
        LoadServer({
            load_ms:true
        })
    }
}

HttpServer.main()