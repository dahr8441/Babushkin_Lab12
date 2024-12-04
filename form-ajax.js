document.getElementById('test-ajax').addEventListener('click', function () {
    const formData = new FormData(document.getElementById('payment-form'));

    fetch('https://just-another-one-site.kesug.com/process.php', { method: 'POST', body: formData })
        .then(response => response.text()) // Очікуємо HTML
        .then(html => {
            // Відображаємо отриманий HTML як нову сторінку
            document.open();
            document.write(html);
            document.close();
        })
        .catch(error => {
            console.error('Помилка:', error);
        });
});

