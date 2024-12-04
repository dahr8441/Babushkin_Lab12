document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('test-sync').addEventListener('click', function () {
        const formData = new FormData(document.getElementById('payment-form'));
        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'https://just-another-one-site.kesug.com/process.php', false);
        xhr.onload = function () {
            if (xhr.status === 200) {
                // Виводимо отриманий HTML як нову сторінку
                document.open();
                document.write(xhr.responseText);
                document.close();
            } else {
                alert('Сервер повернув помилку');
            }
        };

        xhr.onerror = function () {
            alert('Сталася помилка при виконанні запиту.');
        };

        xhr.send(formData);
    });
});
