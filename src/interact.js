const axios = require('axios');

const API_KEY = "hjfjg";//not able to find
const OPENNODE_API = "https://dev-api.opennode.co/v1";


const getData = async(url, body) =>
{
    return axios
    .post(OPENNODE_API + url, JSON.stringify(body), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': API_KEY,
        }
    })
    .then(function (response) {
       return {
           res : response.data
       };
    })
    .catch(function (error) {
        console.log(error)
        return {
            message: error.message,
        }
       
    });
}


export const createInvoice = async(amount, currency = "USD") =>
{
	const invoice = { "amount": amount, "currency": currency };
	const result  = await getData('/charges', invoice);

	invoice.id = result.id;
	invoice.address = result.lightning_invoice.payreq;
	
	return invoice;
}