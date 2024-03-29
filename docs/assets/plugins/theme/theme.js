(() => {
  if (!window.$docsify) {
    throw new Error('Docsify must be loaded before installing this plugin.');
  }

  window.$docsify.plugins.push((hook, vm) => {
    hook.mounted(function () {
      let isDark = localStorage.getItem('theme') === 'xena-theme-dark';
      const sidebarToggle = document.querySelector('.sidebar-toggle');
      const noTransitions = Object.assign(document.createElement('style'), {
        textContent: '* { transition: none !important; }'
      });
      const toggle = Object.assign(document.createElement('xena-icon-button'), {
        name: isDark ? 'sun' : 'moon',
        label: 'Toggle dark mode'
      });
      toggle.classList.add('theme-toggle');

      // Set initial theme
      if (isDark) {
        document.body.classList.add('xena-theme-dark');
      }

      // Toggle theme
      toggle.addEventListener('click', () => {
        isDark = !isDark;
        isDark ? localStorage.setItem('theme', 'xena-theme-dark') : localStorage.removeItem('theme');
        toggle.name = isDark ? 'sun' : 'moon';

        // Disable transitions as the theme changes
        document.body.appendChild(noTransitions);
        requestAnimationFrame(() => {
          document.body.classList.toggle('xena-theme-dark', isDark);
          requestAnimationFrame(() => document.body.removeChild(noTransitions));
        });
      });

      sidebarToggle.insertAdjacentElement('afterend', toggle);
    });
  });
})();
