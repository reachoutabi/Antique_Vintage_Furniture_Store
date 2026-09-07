/* ==========================================================================
   Aethelgard & Co. - Interactive Before & After Restoration Drag Slider
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.ba-container');

  containers.forEach(container => {
    const beforeWrapper = container.querySelector('.ba-before-wrapper');
    const beforeImg = container.querySelector('.ba-before-img');
    const handle = container.querySelector('.ba-handle');
    let isDragging = false;

    if (!beforeWrapper || !handle) return;

    function syncImageWidth() {
      if (beforeImg) {
        beforeImg.style.width = `${container.clientWidth}px`;
        beforeImg.style.maxWidth = 'none';
      }
    }
    syncImageWidth();
    window.addEventListener('resize', syncImageWidth);

    function moveSlider(x) {
      const rect = container.getBoundingClientRect();
      let pos = ((x - rect.left) / rect.width) * 100;
      if (pos < 0) pos = 0;
      if (pos > 100) pos = 100;

      beforeWrapper.style.width = `${pos}%`;
      handle.style.left = `${pos}%`;
    }

    // Mouse events
    handle.addEventListener('mousedown', (e) => {
      isDragging = true;
      e.preventDefault();
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      moveSlider(e.clientX);
    });

    // Touch events for mobile responsiveness
    handle.addEventListener('touchstart', (e) => {
      isDragging = true;
    });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        moveSlider(e.touches[0].clientX);
      }
    });

    // Direct click on container
    container.addEventListener('click', (e) => {
      if (e.target !== handle && !handle.contains(e.target)) {
        moveSlider(e.clientX);
      }
    });
  });
});
