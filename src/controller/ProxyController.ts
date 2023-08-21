import { Controller, Get, INVOKE, $Transmit } from 'tarsus/core/httpservice'

@Controller("/proxy")
class ProxyController {

    @INVOKE("/invoke")
    invoke(req, res) {
        debugger;
        $Transmit(req, res);
    }
}

export default ProxyController;