document.addEventListener('DOMContentLoaded', function () {
    var id;
    var containerForm = $('form[name="container-form"]');
    var deleteForm = document.forms['form-delete']
    var btnDelete = document.querySelector('#btn-delete')
    var checkboxAll = $('#checkbox-all');
    var hoadonItemsCheckBox = $('input[name="hoadonIds[]"]');
    var btnThucHien = $('.btn-thuchien');

    $('#delete-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        id = button.data('id')
    })

    btnDelete.onclick = function () {
        deleteForm.action = `/send/${id}/delete?_method=DELETE`;
        deleteForm.submit();
    }
})

//Tinh Tong So tien
function formatMoney(str) { // Hàm chuyển tiền về VND
    return str.toString().split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}

const totalElement = document.querySelector('#toal-money')
const moneyItemsElement = document.querySelectorAll('.money')
var total = 0;
var totalNo = 0;
for (let i = 0; i < moneyItemsElement.length; i++) { //Lòng lặp tính tiền
    total = total + Number(moneyItemsElement[i].dataset.money)
    if (moneyItemsElement[i].dataset.phuongthuc == 'NỢ') {
        totalNo = totalNo + Number(moneyItemsElement[i].dataset.money)
    }
}

totalElement.innerHTML = `Tổng số tiền: ${formatMoney(total)} (Nợ: ${formatMoney(totalNo)})`

// Date Time
document.addEventListener('DOMContentLoaded', function () {
    const inputBD = document.querySelector('#input-bd')
    const inputKT = document.querySelector('#input-kt')
    const btnDateTime = $('.btn-time')
    const btnLuaChon = document.querySelector('#btn-luachon')
    btnDateTime.click(function(e) {
        var timeDateBD;
        var timeDateKT;
        const valueTime = e.target.dataset.date;
        const date = new Date()
        const ngay = date.getDate()
        const thang = date.getMonth() + 1
        const nam = date.getFullYear()
        switch (valueTime) {
            case 'thang1':
                timeDateBD = `${nam}-01-01`
                timeDateKT = `${nam}-01-31`
                inputBD.value = timeDateBD
                inputKT.value = timeDateKT
                btnLuaChon.innerHTML = 'Tháng 1'
                break;
            
            case 'thang2':
                timeDateBD = `${nam}-02-01`
                timeDateKT = `${nam}-02-28`
                inputBD.value = timeDateBD
                inputKT.value = timeDateKT
                btnLuaChon.innerHTML = 'Tháng 2'
                break;
                
            case 'thang3':
                timeDateBD = `${nam}-03-01`
                timeDateKT = `${nam}-03-31`
                inputBD.value = timeDateBD
                inputKT.value = timeDateKT
                btnLuaChon.innerHTML = 'Tháng 3'
                break;
                
            case 'thang4':
                timeDateBD = `${nam}-04-01`
                timeDateKT = `${nam}-04-30`
                inputBD.value = timeDateBD
                inputKT.value = timeDateKT
                btnLuaChon.innerHTML = 'Tháng 4'
                break;
                
            case 'thang5':
                timeDateBD = `${nam}-05-01`
                timeDateKT = `${nam}-05-31`
                inputBD.value = timeDateBD
                inputKT.value = timeDateKT
                btnLuaChon.innerHTML = 'Tháng 5'
                break;
                
            case 'thang6':
                timeDateBD = `${nam}-06-01`
                timeDateKT = `${nam}-06-30`
                inputBD.value = timeDateBD
                inputKT.value = timeDateKT
                btnLuaChon.innerHTML = 'Tháng 6'
                break;
                
            case 'thang7':
                timeDateBD = `${nam}-07-01`
                timeDateKT = `${nam}-07-31`
                inputBD.value = timeDateBD
                inputKT.value = timeDateKT
                btnLuaChon.innerHTML = 'Tháng 7'
                break;
                
            case 'thang8':
                timeDateBD = `${nam}-08-01`
                timeDateKT = `${nam}-08-31`
                inputBD.value = timeDateBD
                inputKT.value = timeDateKT
                btnLuaChon.innerHTML = 'Tháng 8'
                break;
                
            case 'thang9':
                timeDateBD = `${nam}-09-01`
                timeDateKT = `${nam}-09-30`
                inputBD.value = timeDateBD
                inputKT.value = timeDateKT
                btnLuaChon.innerHTML = 'Tháng 9'
                break;
                
            case 'thang10':
                timeDateBD = `${nam}-10-01`
                timeDateKT = `${nam}-10-31`
                inputBD.value = timeDateBD
                inputKT.value = timeDateKT
                btnLuaChon.innerHTML = 'Tháng 10'
                break;
                
            case 'thang11':
                timeDateBD = `${nam}-11-01`
                timeDateKT = `${nam}-11-30`
                inputBD.value = timeDateBD
                inputKT.value = timeDateKT
                btnLuaChon.innerHTML = 'Tháng 11'
                break;
                
            case 'thang12':
                timeDateBD = `${nam}-12-01`
                timeDateKT = `${nam}-12-31`
                inputBD.value = timeDateBD
                inputKT.value = timeDateKT
                btnLuaChon.innerHTML = 'Tháng 12'
                break;
        }
    })
})