const controller = {};
const axios = require('axios').default;

const status = require('../helpers/status_helper');

controller.getRsByKelurahan = async (req, res, next) => {
    let kode_kelurahan = req.query.kodeKelurahan
    let hasil = [];
    try {
        let kelurahan = await getKelurahan();
        let rs = await getRs();

        let arr_kel = kelurahan.find(({ kode_kelurahan }) => kode_kelurahan === kode_kelurahan);
        await Promise.all(rs.map(async element => {
            if (element.kode_kelurahan == kode_kelurahan)
                result = {
                    "id": element.id,
                    "nama_rsu": element.nama_rsu,
                    "jenis_rsu": element.jenis_rsu,
                    "location": {
                        "latitude": element.location.latitude,
                        "longitude": element.location.longitude
                    },
                    "alamat": element.location.alamat,
                    "kode_pos": element.kode_pos,
                    "telepon": element.telepon,
                    "faximile": element.faximile,
                    "website": element.website,
                    "email": element.email,
                    "kelurahan": {
                        "kode": arr_kel.kode_kelurahan,
                        "nama": arr_kel.nama_kelurahan
                    },
                    "kecamatan": {
                        "kode": arr_kel.kode_kecamatan,
                        "nama": arr_kel.nama_kecamatan
                    },
                    "kota": {
                        "kode": arr_kel.kode_kota,
                        "nama": arr_kel.nama_kota
                    }
                }
            hasil.push(result)

        }));
        res.status(status.statusCode.success).json(status.successMessage(hasil))
    } catch (error) {
        console.log(error)
        res.status(status.statusCode.bad).json(status.errorMessage(error.message))
    }

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
        return data.data.data
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
        return data.data.data
    } catch (error) {
        console.log(error);
    }
}


module.exports = controller;