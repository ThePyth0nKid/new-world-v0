/**
 * Sets up scroll-synced video playback via GSAP timeline.
 *
 * Mobile browsers ignore preload="auto" to save bandwidth.
 * This function forces the video to load and handles the case
 * where metadata is already available (cached).
 *
 * @param {HTMLVideoElement} video - The video element
 * @param {gsap.core.Timeline} tl - GSAP timeline to add the scrub to
 * @param {string|number} position - Timeline position (0, '<', etc.)
 * @param {number} duration - Scrub duration in the timeline
 */
export function setupScrollVideo(video, tl, position = 0, duration = 3) {
  const addScrub = () => {
    video.pause();
    tl.to(video, {
      currentTime: video.duration,
      duration,
      ease: 'power1.inOut',
    }, position);
  };

  if (video.readyState >= 1) {
    addScrub();
    return;
  }

  video.addEventListener('loadedmetadata', addScrub, { once: true });
  // Mobile browsers ignore preload="auto" — force the load
  video.load();
}
