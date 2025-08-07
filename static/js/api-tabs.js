// API Tabs functionality
function switchTab(button, tabId) {
  // Remove active class from all tabs in this section
  const tabContainer = button.closest('.endpoint-tabs');
  const tabs = tabContainer.querySelectorAll('.tab-button');
  tabs.forEach(tab => tab.classList.remove('active'));
  
  // Add active class to clicked tab
  button.classList.add('active');
  
  // Hide all tab content in this section
  const contentContainer = tabContainer.parentElement;
  const contents = contentContainer.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));
  
  // Show selected tab content
  document.getElementById(tabId).classList.add('active');
}

// Make the function globally available
window.switchTab = switchTab; 