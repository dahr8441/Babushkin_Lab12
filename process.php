<?php
// Встановлюємо заголовок для HTML
header('Content-Type: text/html; charset=UTF-8');

// Початок HTML-документу
echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission Result</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f4f4f4; }
        .success { color: green; }
        .error { color: red; }
    </style>
</head>
<body>';

// Перевірка на наявність помилок
$messages = [];
$requiredFields = ['full-name', 'address', 'city', 'zip', 'country', 'card-name', 'card-number', 'exp-month', 'exp-year', 'cvc'];

foreach ($requiredFields as $field) {
    if (empty($_POST[$field])) {
        $messages[] = "Поле <b>$field</b> не заповнене.";
    }
}

if (!empty($messages)) {
    echo '<h3 class="error">Помилки у формі:</h3><ul>';
    foreach ($messages as $message) {
        echo "<li>$message</li>";
    }
    echo '</ul>';
} else {
    echo '<h3 class="success">Дані успішно отримані:</h3>';
    echo '<table>
        <tr><th>Поле</th><th>Значення</th></tr>';
    foreach ($_POST as $key => $value) {
        echo '<tr><td>' . htmlspecialchars($key, ENT_QUOTES, 'UTF-8') . '</td>';
        echo '<td>' . htmlspecialchars($value, ENT_QUOTES, 'UTF-8') . '</td></tr>';
    }
    echo '</table>';
}

// Кінець HTML-документу
echo '</body>
</html>';
?>
