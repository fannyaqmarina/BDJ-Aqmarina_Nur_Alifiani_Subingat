const controller = {};
const axios = require('axios').default;

const status = require('../helpers/status_helper');

controller.getRsByKelurahan = async (req, res, next) => {
    let kode_kelurahan = req.query.kodeKelurahan
    console.log(kode_kelurahan)
    let kelurahan = await getKelurahan();
    // let find = Object.values(kelurahan).filter(kel => {
    //     // console.log(kel)
    //     return kel.kode_kelurahan === kode_kelurahan
    // });
    let res_kelurahan;
    let rs = await getRs();

    res.status(status.statusCode.success).json(status.successMessage(kelurahan))
}

const getKelurahan = async () => {
    try {
        let data = await axios({
            headers: {
                'Authorization': 'LdT23Q9rv8g9bVf8v/fQYsyIcuD14svaYL6Bi8f9uGhLBVlHA3ybTFjjqe+cQO8k'
            },
            method: 'get',
            url: 'http://api.jakarta.go.id/v1/kelurahan'
        })
        return data.data[0]
    } catch (error) {
        console.log(error);
    }
}

const getRs = async () => {
    try {
        let data = await axios({
            headers: {
                'Authorization': 'LdT23Q9rv8g9bVf8v/fQYsyIcuD14svaYL6Bi8f9uGhLBVlHA3ybTFjjqe+cQO8k'
            },
            method: 'get',
            url: 'http://api.jakarta.go.id/v1/rumahsakitumum'
        })
        return data.data[0]
    } catch (error) {
        console.log(error);
    }
}


module.exports = controller;