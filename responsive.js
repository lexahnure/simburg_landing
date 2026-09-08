// Responsive navigation helper for mobile drawer
(function() {
  function setupResponsiveMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const header = document.querySelector('.site-header');
    if (!toggle) return;

    toggle.addEventListener('change', function() {
      if (header) {
        if (toggle.checked) {
          header.classList.add('menu-open');
        } else {
          header.classList.remove('menu-open');
        }
      }
    });

    // Close menu when clicking any link inside the mobile drawer
    document.addEventListener('click', function(e) {
      const link = e.target.closest('.mobile-drawer a');
      if (link && toggle.checked) {
        toggle.checked = false;
        if (header) header.classList.remove('menu-open');
      }

      // Close menu when tapping outside header
      if (toggle.checked && !e.target.closest('.site-header')) {
        toggle.checked = false;
        if (header) header.classList.remove('menu-open');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupResponsiveMenu);
  } else {
    setupResponsiveMenu();
  }

  // Also re-run after React mounts
  setTimeout(setupResponsiveMenu, 300);
  setTimeout(setupResponsiveMenu, 1000);
})();
