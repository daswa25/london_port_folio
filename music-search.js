const apiKey = 'AIzaSyByPc5HgTwRz5FDckPHAA-Hh6D-oyd8T4E'; // Your YouTube API key
let player;

// Initialize YouTube IFrame API
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0', // Hide the video by setting height to 0
        width: '0',  // Hide the video by setting width to 0
        videoId: '',
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
        },
        events: {
            onReady: onPlayerReady,
        },
    });
}

// Called when the player is ready
function onPlayerReady(event) {
    console.log('Player ready');
}

// Search for songs on YouTube
async function searchSong() {
    const query = document.getElementById('songName').value.trim();
    if (!query) {
        alert('Please enter a song name.');
        return;
    }

    const proxyUrl = `http://localhost:5000/api/search?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(proxyUrl);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        displayResults(data.items);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Display search results
function displayResults(videos) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (videos.length === 0) {
        resultsContainer.innerHTML = '<li class="list-group-item">No results found.</li>';
        return;
    }

    videos.forEach((video) => {
        const videoId = video.id.videoId;
        const title = video.snippet.title;
        const thumbnail = video.snippet.thumbnails.default.url;

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex align-items-center';
        listItem.innerHTML = `
      <img src="${thumbnail}" alt="${title}" class="me-3" style="width: 60px; height: 45px;">
      <span>${title}</span>
      <button class="btn btn-sm btn-success ms-auto" onclick="playAudio('${videoId}')">Play</button>
    `;

        resultsContainer.appendChild(listItem);
    });
}

// Play only the audio
function playAudio(videoId) {
    if (player) {
        player.loadVideoById(videoId);
        player.playVideo();
    }
}
