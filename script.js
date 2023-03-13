function filterVideos() {
    const videos = document.querySelectorAll("ytd-rich-item-renderer");

    videos.forEach(video => {
        let vidText = video.querySelector("span#text");
        if (vidText) {
            const lengthString = vidText.innerHTML;
            const match = lengthString.match(/(\d+):(\d+)/);
            if (match) {
                const minutes = parseInt(match[1]);
                if (minutes < 10) {
                    video.style.display = "none";
                }
            }
        }
        
        const metadata = video.querySelector("#metadata");
    });

    const videos2 = document.querySelectorAll("ytd-compact-video-renderer");

    videos2.forEach(video => {
        let vidText = video.querySelector("span#text");
        if (vidText) {
            const lengthString = vidText.innerHTML;
            const match = lengthString.match(/(\d+):(\d+)/);
            if (match) {
                const minutes = parseInt(match[1]);
                if (minutes < 10) {
                    video.style.display = "none";
                }
            }
        }
    });

    const gamingMeta = document.querySelectorAll("ytd-rich-metadata-row-renderer");

    gamingMeta.forEach((item) => {
        let gaming = item.querySelector("a[href='/gaming']");
        const videos = document.querySelectorAll("ytd-player");
        if (gaming) {
            videos.forEach((video) => {
                video.remove();
            });
        }
    });

    var matches = document.querySelectorAll("ytd-rich-section-renderer");

    matches.forEach((match) => {
        match.style.display = "none";
    });
}
  
const observer = new MutationObserver(filterVideos);
observer.observe(document.body, { childList: true, subtree: true });

window.onload = () => {
    filterVideos();
}
