import Requester from './requester';

const addOrder = function(options) {
    Requester.send({
        url: '/order/addOrder',
        type: 'post',
        data: options.order,
        success(response) {
            options.success&&options.success(response);
        },
        error(response) {
            options.error&&options.error(response);
        }
    })
};

const getOrder = function(options) {
    Requester.send({
        url: '/order/getOrder',
        type: 'post',
        // data: options.order,
        success(response) {
            options.success&&options.success(response);
        },
        error(response) {
            options.error&&options.error(response);
        }
    })
};

export {
    addOrder,
    getOrder
};