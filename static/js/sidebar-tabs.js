// Sidebar Tab-like Behavior
document.addEventListener('DOMContentLoaded', function() {
  // Function to force collapse all sidebar categories
  function forceCollapseAll() {
    const allCategories = document.querySelectorAll('.theme-doc-sidebar-item-category-level-1');
    allCategories.forEach(cat => {
      // Force collapse by adding the collapsed class
      cat.classList.add('theme-doc-sidebar-item-category-level-1--collapsed');
      // Remove any active states
      cat.classList.remove('theme-doc-sidebar-item-category-level-1--active');
    });
  }

  // Function to expand a specific category and collapse others
  function expandOnlyCategory(categoryName) {
    // First, force collapse all categories
    forceCollapseAll();
    
    // Find the target category
    const categoryHeaders = document.querySelectorAll('.theme-doc-sidebar-item-category-level-1 > .theme-doc-sidebar-item-category-label');
    const targetCategory = Array.from(categoryHeaders).find(header => 
      header.textContent.trim() === categoryName
    );
    
    if (targetCategory) {
      const category = targetCategory.closest('.theme-doc-sidebar-item-category-level-1');
      
      // Remove collapsed class and add active class
      category.classList.remove('theme-doc-sidebar-item-category-level-1--collapsed');
      category.classList.add('theme-doc-sidebar-item-category-level-1--active');
      
      // Store the active category
      sessionStorage.setItem('activeSidebarCategory', categoryName);
    }
  }

  // Handle navbar link clicks with a more aggressive approach
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
    } else if (href.includes('/docs/reference/') || href.includes('/docs/changelog/')) {
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

  // Also listen for navigation events
  window.addEventListener('popstate', function() {
    const currentPath = window.location.pathname;
    const currentCategory = getCategoryForPath(currentPath);
    if (currentCategory) {
      setTimeout(() => {
        expandOnlyCategory(currentCategory);
      }, 100);
    }
  });

  // Handle sidebar category clicks
  const categoryHeaders = document.querySelectorAll('.theme-doc-sidebar-item-category-level-1 > .theme-doc-sidebar-item-category-label');
  categoryHeaders.forEach(header => {
    header.addEventListener('click', function(e) {
      const category = this.closest('.theme-doc-sidebar-item-category-level-1');
      const isCurrentlyExpanded = !category.classList.contains('theme-doc-sidebar-item-category-level-1--collapsed');
      
      // If this category is already expanded, allow normal collapse
      if (isCurrentlyExpanded) {
        return;
      }
      
      // Get the category name
      const categoryName = this.textContent.trim();
      
      // Collapse all others and expand this one
      expandOnlyCategory(categoryName);
    });
  });
  
  // Restore active category on page load
  const activeCategoryName = sessionStorage.getItem('activeSidebarCategory');
  if (activeCategoryName) {
    setTimeout(() => {
      expandOnlyCategory(activeCategoryName);
    }, 100);
  }
  
  // Handle direct link clicks to auto-expand the relevant category
  const currentPath = window.location.pathname;
  const currentCategory = getCategoryForPath(currentPath);
  if (currentCategory) {
    setTimeout(() => {
      expandOnlyCategory(currentCategory);
    }, 100);
  }

  // Additional cleanup on page load to ensure only one category is expanded
  setTimeout(() => {
    const expandedCategories = document.querySelectorAll('.theme-doc-sidebar-item-category-level-1:not(.theme-doc-sidebar-item-category-level-1--collapsed)');
    if (expandedCategories.length > 1) {
      // If multiple categories are expanded, collapse all and expand only the current one
      const currentPath = window.location.pathname;
      const currentCategory = getCategoryForPath(currentPath);
      if (currentCategory) {
        expandOnlyCategory(currentCategory);
      }
    }
  }, 500);
});

// Helper function to determine which category a path belongs to
function getCategoryForPath(path) {
  if (path.includes('/docs/validators/')) {
    return 'For Validators';
  } else if (path.includes('/docs/api/builder/')) {
    return 'For Builders';
  } else if (path.includes('/docs/api/') || path.includes('/docs/websocket/')) {
    return 'For Developers';
  } else if (path.includes('/docs/getting-started/')) {
    return 'Overview';
  } else if (path.includes('/docs/reference/') || path.includes('/docs/changelog/')) {
    return 'Resources';
  }
  return null;
} 