document.addEventListener('DOMContentLoaded', function() {
  let currentActiveCategory = null;

  function collapseAllCategories() {
    const categories = document.querySelectorAll('.theme-doc-sidebar-item-category-level-1');
    categories.forEach(category => {
      category.classList.add('theme-doc-sidebar-item-category-level-1--collapsed');
      category.classList.remove('theme-doc-sidebar-item-category-level-1--active');
    });
  }

  function expandOnlyCategory(categoryName) {
    collapseAllCategories();
    
    const categories = document.querySelectorAll('.theme-doc-sidebar-item-category-level-1');
    categories.forEach(category => {
      const categoryLabel = category.querySelector('.theme-doc-sidebar-item-category-label');
      if (categoryLabel && categoryLabel.textContent.trim() === categoryName) {
        category.classList.remove('theme-doc-sidebar-item-category-level-1--collapsed');
        category.classList.add('theme-doc-sidebar-item-category-level-1--active');
        currentActiveCategory = categoryName;
        
        sessionStorage.setItem('activeSidebarCategory', categoryName);
      }
    });
  }

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
      setTimeout(() => {
        expandOnlyCategory(targetCategory);
      }, 300);
    }
  }

  const navbarLinks = document.querySelectorAll('.navbar__item a, .navbar__link');
  navbarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href) {
        handleNavbarClick(href);
      }
    });
  });

  window.addEventListener('popstate', function() {
    const currentPath = window.location.pathname;
    const targetCategory = getCategoryForPath(currentPath);
    if (targetCategory) {
      setTimeout(() => {
        expandOnlyCategory(targetCategory);
      }, 100);
    }
  });

  setTimeout(() => {
    const currentPath = window.location.pathname;
    const targetCategory = getCategoryForPath(currentPath);
    if (targetCategory) {
      expandOnlyCategory(targetCategory);
    }
  }, 100);
}); 