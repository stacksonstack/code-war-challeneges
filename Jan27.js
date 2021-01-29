// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, 
// which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. 
// The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1

function PaginationHelper(collection, itemsPerPage) {
    this.group = collection
    this.pageItems = itemsPerPage
  }
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function () {
    return this.group.length
  }
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function () {
    return Math.ceil(this.itemCount() / this.pageItems)
  }
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    let items = this.itemCount() - pageIndex * this.pageItems
    if (items > this.pageItems) {
      return this.pageItems
    } else if (items < 1) {
      return -1
    } else {
      return items
    }
  }
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function (itemIndex) {
    if (itemIndex > this.itemCount() || itemIndex < 0 || this.itemCount() === 0) {
      return -1
    } else if (itemIndex < this.pageItems) {
      return 0
    } else {
      return Math.floor(itemIndex / this.pageItems)
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  