<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spheron PHP example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="header">
        <h1>Spheron Network</h1>
        <p class="tagline">Build and deploy applications faster with total control and peace of mind</p>
    </div>

    <div class="container">
        <?php
        // URL of the API
        $apiUrl = "https://jsonplaceholder.typicode.com/posts";

        // Using file_get_contents to fetch data from the API
        $jsonData = file_get_contents($apiUrl);

        // Decoding the JSON data to PHP array
        $posts = json_decode($jsonData, true);

        // Check if the data is correctly fetched
        if (is_array($posts)) {
            // Iterate through each post and display
            foreach ($posts as $post) {
                echo "<div class='post'>";
                echo "<h2>" . htmlspecialchars($post['title']) . "</h2>";
                echo "<p>" . htmlspecialchars($post['body']) . "</p>";
                echo "</div>";
            }
        } else {
            echo "<p>Failed to fetch data from the API.</p>";
        }
        ?>
    </div>
</body>
</html>
