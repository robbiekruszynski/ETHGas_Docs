// Sidebar tab-like behavior
document.addEventListener('DOMContentLoaded', function() {
  // Store the current active category
  let currentActiveCategory = null;

  // Function to collapse all categories
  function collapseAllCategories() {
    const categories = document.querySelectorAll('.theme-doc-sidebar-item-category-level-1');
    categories.forEach(category => {
      category.classList.add('theme-doc-sidebar-item-category-level-1--collapsed');
      category.classList.remove('theme-doc-sidebar-item-category-level-1--active');
    });
  }

  // Function to expand only one category
  function expandOnlyCategory(categoryName) {
    // First collapse all categories
    collapseAllCategories();
    
    // Find and expand the target category
    const categories = document.querySelectorAll('.theme-doc-sidebar-item-category-level-1');
    categories.forEach(category => {
      const categoryLabel = category.querySelector('.theme-doc-sidebar-item-category-label');
      if (categoryLabel && categoryLabel.textContent.trim() === categoryName) {
        category.classList.remove('theme-doc-sidebar-item-category-level-1--collapsed');
        category.classList.add('theme-doc-sidebar-item-category-level-1--active');
        currentActiveCategory = categoryName;
        
        // Store in session storage
        sessionStorage.setItem('activeSidebarCategory', categoryName);
      }
    });
  }

  // Function to get category name for a given path
  function getCategoryForPath(path) {
    if (path.includes('/docs/validators/') || path.includes('validators')) {
      return 'For Validators';
    } else if (path.includes('/docs/api/builder/') || path.includes('builder')) {
      return 'For Builders';
    } else if (path.includes('/docs/api/') || path.includes('/docs/websocket/') || path.includes('api') || path.includes('websocket')) {
      return 'For Developers';
    } else if (path.includes('/docs/getting-started/') || path.includes('overview')) {
      return 'Overview';
    } else if (path.includes('/docs/reference/') || path.includes('/docs/changelog/') || path.includes('/docs/community')) {
      return 'Resources';
    }
    return null;
  }

  // Handle navbar link clicks with aggressive collapse
  function handleNavbarClick(href) {
    let targetCategory = null;
    
    if (href.includes('/docs/validators/') || href.includes('validators')) {
      targetCategory = 'For Validators';
    } else if (href.includes('/docs/api/builder/') || href.includes('builder')) {
      targetCategory = 'For Builders';
    } else if (href.includes('/docs/api/') || href.includes('/docs/websocket/') || href.includes('api') || href.includes('websocket')) {
      targetCategory = 'For Developers';
    } else if (href.includes('/docs/getting-started/') || href.includes('overview')) {
      targetCategory = 'Overview';
    } else if (href.includes('/docs/reference/') || href.includes('/docs/changelog/') || href.includes('/docs/community')) {
      targetCategory = 'Resources';
    }
    
    if (targetCategory) {
      // Use a longer delay to ensure Docusaurus has finished its navigation
      setTimeout(() => {
        expandOnlyCategory(targetCategory);
      }, 300);
    }
  }

  // Add click listeners to navbar links
  const navbarLinks = document.querySelectorAll('.navbar__item a, .navbar__link');
  navbarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href) {
        handleNavbarClick(href);
      }
    });
  });

  // Handle browser back/forward navigation
  window.addEventListener('popstate', function() {
    const currentPath = window.location.pathname;
    const targetCategory = getCategoryForPath(currentPath);
    if (targetCategory) {
      setTimeout(() => {
        expandOnlyCategory(targetCategory);
      }, 100);
    }
  });

  // Initialize on page load
  setTimeout(() => {
    const currentPath = window.location.pathname;
    const targetCategory = getCategoryForPath(currentPath);
    if (targetCategory) {
      expandOnlyCategory(targetCategory);
    }
  }, 100);

  // Network tabs functionality
  function initializeNetworkTabs() {
    const tabButtons = document.querySelectorAll('.tab-button[data-tab]');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        const tabContainer = this.closest('.network-tabs');
        
        // Remove active class from all buttons and panes in this container
        const buttons = tabContainer.querySelectorAll('.tab-button');
        const panes = tabContainer.querySelectorAll('.tab-pane');
        
        buttons.forEach(btn => btn.classList.remove('active'));
        panes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        this.classList.add('active');
        
        const targetPane = document.getElementById(tabId);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }

  // Initialize network tabs when DOM is ready
  initializeNetworkTabs();
  
  // Also initialize on navigation (for SPA behavior)
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('tab-button')) {
      // Re-initialize tabs if new ones are added dynamically
      setTimeout(initializeNetworkTabs, 100);
    }
  });
}); 