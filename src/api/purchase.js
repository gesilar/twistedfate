import Requester from './requester';

const addOrder = function(options) {
    Requester.send({
        url: '/purchase/addOrder',
        type: 'post',
        data: {
            order:options.order
        },
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
        url: '/purchase/getOrder',
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