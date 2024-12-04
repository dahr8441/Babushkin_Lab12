$(document).ready(function () { 
    $.validator.addMethod("regex", function(value, element, pattern) {
        return this.optional(element) || pattern.test(value);
    }, "Невірний формат введення.");
    $.validator.addMethod("creditcard", function (value, element) {
    return this.optional(element) || /^[0-9]{16}$/.test(value);
}, "Будь ласка, введіть коректний номер картки.");

    $("#payment-form").validate({
        rules: {
            "full-name": {
                required: true,
                regex: /^[A-Za-z\s]+$/  
            },
            "address": {
                required: true
            },
            "city": {
                required: true
            },
            "zip": {
                required: true,
                digits: true,  
                minlength: 5,
                maxlength: 5  
            },
            "country": {
                required: true
            },
            "card-name": {
                required: true,
                regex: /^[A-Za-z\s]+$/  
            },
            "card-number": {
                required: true,
                creditcard: true  
            },
            "exp-month": {
                required: true
            },
            "exp-year": {
                required: true
            },
            "cvc": {
                required: true,
                digits: true,  
                minlength: 3,
                maxlength: 3  
            }
        },
        messages: {
            "full-name": {
                required: "Будь ласка, введіть ваше ім'я.",
                regex: "Ім'я може містити лише літери та пробіли."
            },
            "address": {
                required: "Будь ласка, введіть адресу."
            },
            "city": {
                required: "Будь ласка, введіть місто."
            },
            "zip": {
                required: "Будь ласка, введіть поштовий індекс.",
                digits: "Індекс повинен містити лише цифри.",
                minlength: "Поштовий індекс має складатися з 5 цифр.",
                maxlength: "Поштовий індекс має складатися з 5 цифр."
            },
            "country": {
                required: "Будь ласка, виберіть країну."
            },
            "card-name": {
                required: "Будь ласка, введіть ім'я власника картки.",
                regex: "Ім'я може містити лише літери та пробіли."
            },
            "card-number": {
                required: "Будь ласка, введіть номер картки.",
                creditcard: "Будь ласка, введіть правильний номер картки."
            },
            "exp-month": {
                required: "Будь ласка, виберіть місяць закінчення терміну."
            },
            "exp-year": {
                required: "Будь ласка, виберіть рік закінчення терміну."
            },
            "cvc": {
                required: "Будь ласка, введіть CVC код.",
                digits: "CVC має складатися лише з цифр.",
                minlength: "CVC має містити 3 цифри.",
                maxlength: "CVC має містити 3 цифри."
            }
        },
        submitHandler: function (form) {
            form.submit();  
        }
    });
});