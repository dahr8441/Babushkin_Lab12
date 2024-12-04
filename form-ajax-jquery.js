$(document).ready(function () {
    $('#test-jquery').on('click', function (event) {
        event.preventDefault();

        const formData = $('#payment-form').serialize();

        $.ajax({
            url: 'https://just-another-one-site.kesug.com/process.php',
            type: 'POST',
            data: formData,
            dataType: 'html', // Очікуємо HTML
            success: function (html) {
                // Відображаємо отриманий HTML як нову сторінку
                document.open();
                document.write(html);
                document.close();
            },
            error: function (xhr, status, error) {
                console.error('Помилка:', error);
            }
        });
    });
});

