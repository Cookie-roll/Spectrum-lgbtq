import dotenv from 'dotenv';
dotenv.config({path: '.env'});

const getPort = function (port) {
    port = parseInt(port, 10);
    if ([0, 80, 443].includes(port)) {
        return '';
    }

    return ':' + port;
};

export const baseUrl = `${process.env.SCHEME}://${process.env.DOMAIN}${getPort(process.env.PORT)}`;
