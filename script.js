document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.getElementById("videoContainer");
  
    // Array of video data (replace with your actual data)
    const videos = [
      { id: "JwftOMKYSns", title: "Video Title 1", description: "Description of the video content 1." },
      { id: "YZdQiiWEbeA", title: "Video Title 2", description: "Description of the video content 2." }
      // Add more video data as needed
    ];
  
    videos.forEach(video => {
      const videoElement = document.createElement("div");
      videoElement.classList.add("video");
      videoElement.innerHTML = `
        <iframe width="100%" height="200" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
        <h3>${video.title}</h3>
        <p>${video.description}</p>
      `;
      videoContainer.appendChild(videoElement);
    });
  });
  