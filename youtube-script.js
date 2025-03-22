// youtube-script.js
// This script attempts to fetch and display content from YouTube.

// Function to fetch and display YouTube content
async function fetchYouTube() {
  try {
    // Fetch the YouTube homepage
    const response = await fetch('https://www.youtube.com');
    const text = await response.text();

    // Display the fetched content in a new window
    const newWindow = window.open();
    newWindow.document.write(text);
    newWindow.document.close();

    // Log success to the console
    console.log('YouTube content fetched and displayed successfully!');
  } catch (error) {
    // Log any errors to the console
    console.error('Error fetching YouTube content:', error);
  }
}

// Execute the function
fetchYouTube();
