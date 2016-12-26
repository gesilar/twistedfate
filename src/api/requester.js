import $ from 'jquery';

const defaultOptions = {
    dataType:"json"
};
class Requester {
    
}
Requester.send = function (options) {
    let xhrOptions = Object.assign({}, defaultOptions, options);
    xhrOptions.url = `http://localhost:3000${xhrOptions.url}`;
    $.ajax(xhrOptions);
    return;
}

export default Requester;