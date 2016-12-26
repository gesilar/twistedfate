import Requester from './requester';

const addGoodsList = function(options) {
    Requester.send({
        url: '/store/addGoodsList',
        type: 'post',
        data: {
            goodsList:options.goodsList
        },
        success(response) {
            options.success&&options.success(response);
        },
        error(response) {
            options.error&&options.error(response);
        }
    })
};

const getGoodsList = function(options) {
    Requester.send({
        url: '/store/getGoodsList',
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
    addGoodsList,
    getGoodsList
};