function switchTab(button, tabId) {
  const tabContainer = button.closest('.endpoint-tabs');
  const tabs = tabContainer.querySelectorAll('.tab-button');
  tabs.forEach(tab => tab.classList.remove('active'));
  
  button.classList.add('active');
  
  const contentContainer = tabContainer.parentElement;
  const contents = contentContainer.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));
  
  document.getElementById(tabId).classList.add('active');
}

window.switchTab = switchTab; 