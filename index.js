// Simulate loading by updating the progress bar
let progressBar = document.getElementById('progress-bar');

// Simulating loading completion over time (5 seconds)
let progress = 0;
let interval = setInterval(function() {
  progress += 1;
  progressBar.style.width = progress + '%';
  
  if (progress >= 100) {
    clearInterval(interval);
  }
}, 50);

// Wait for the page to load fully
window.addEventListener('load', function() {
  // Hide the loading screen after the progress bar completes
  setTimeout(function() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }, 500); // Slight delay to show the full progress bar
});
