// Understand the Hazards of Using Imperative Code
// tabs is an array of titles of each site open within the window
var Window = function (tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  console.log(this);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  // Splice modifies the original array > use slice!!!
  // var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs after the tab
  // var tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs before the tab
  var tabsBeforeIndex = this.tabs.slice(0, index);
  var tabsAfterIndex = this.tabs.slice(index + 1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  return this;
};

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);