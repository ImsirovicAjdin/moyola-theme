// Put your application javascript here

if (document.getElementById('sort_by') != null) {
    document.querySelector('#sort_by').addEventListener('change', function(e) {
        let url = new URL(window.location.href);
        url.searchParams.set('sort_by', e.currentTarget.value);

        window.location = url.href;
    });
}

if(document.getElementById('AddressCountryNew') != null) {
    document.getElementById('AddressCountryNew').addEventListener('change', function(event) {
        let provinces = this.options[this.selectedIndex].getAttribute('data-provinces');
        let provinceSelector = document.getElementById('AddressProvinceNew');
        let provinceArray = JSON.parse(provinces);

        //console.log(provinceArray);
        if(provinceArray.length < 1) {
            provinceSelector.setAttribute('disabled', 'disabled');
        } else {
            provinceSelector.removeAttribute('disabled');
        }

        provinceSelector.innerHTML = '';
        let options = '';
        for(let i = 0; i < provinceArray.length; i++) {
            options += '<option value="' + provinceArray[i][0] +'">' + provinceArray[i][0] + '</option>';
        }
        provinceSelector.innerHTML = options;
    })
}

if(document.getElementById('forgotPassword') != null) {
    document.getElementById('forgotPassword').addEventListener('click', function(event) {
        const element = document.querySelector('#forgot_password_form');
        if(element.classList.contains('d-none')) {
            element.classList.remove('d-none');
            element.classList.add('d-block');
        }
    });
}

let localeItems = document.querySelectorAll('#localeItem');
if (localeItems.length > 0) {
    localeItems.forEach(item => {
        item.addEventListener('click', event => {
            document.getElementById('localeCode').value = item.getAttribute("lang");
            document.getElementById('localization_form_tag').submit();
        })
    });
}

let productInfoAnchors = document.querySelectorAll('#productInfoAnchor');
let productModal = new bootstrap.Modal(document.getElementById('productInfoModal', {}));
if(productInfoAnchors.length > 0) {
    productInfoAnchors.forEach(item => {
        item.addEventListener('click', event => {

            let url = '/products/' + item.getAttribute('product-handle') + '.js';
            fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);

                document.getElementById('productInfoImg').src = data.images[0];
                document.getElementById('productInfoTitle').innerHTML = data.title;
                document.getElementById('productInfoPrice').innerHTML = item.getAttribute('product-price');
                document.getElementById('productInfoDescription').innerHTML = data.description;

                productModal.show();
            });
        });
    });
};
