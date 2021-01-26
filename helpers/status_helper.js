'use strict';


const status = {};

status.successMessage = ress => (
    {
        status: 'success',
        count: ress.length,
        data: ress
    }
);
status.saveMessage = ress => (
    {
        code: '01',
        status: true,
        message: 'Berhasil Menyimpan Data',
        data: ress
    }
);

status.updateMessage = ress => (
    {
        code: '01',
        status: true,
        message: 'Berhasil Memperbarui Data',
        data: ress
    }
);

status.emptyMessage = ress => (
    {
        status: 'empty',
        count: '0',
        data: ress
    }
);

status.failUpload = ress => (
    {
        code: '02',
        status: true,
        message: 'Data yang di Input Tidak Sesuai',
        data: ress
    }
);

status.errorMessage = ress => (
    {
        code: '02',
        status: false,
        message: 'Error',
        data: ress
    }
);

status.forbiddenMessage = (M) => (
    {
        code: '02',
        status: false,
        message: M
    }
);

status.emptyFile = M => (
    {
        code: '02',
        status: false,
        message: M
    }
);

status.statusCode = {
    success: 200,
    error: 500,
    notfound: 404,
    unauthorized: 401,
    conflict: 409,
    created: 201,
    bad: 400,
    nocontent: 204,
    forbidden: 403,
};

status.trip_statuses = {
    active: 1,
    notactive: 0
}



module.exports = status;
