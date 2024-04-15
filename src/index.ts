class Item {
  id: string;
  name: string;
  constructor(id: string, name: string) {
      this.id = id;
      this.name = name;
  }
}

class ItemManager {
  items: Item[];

  constructor() {
      this.items = [];
  }

  createItem(name: string): void {
      const id = Math.random().toString(36).substr(2, 9); // Generate a random ID
      const newItem = new Item(id, name);
      this.items.push(newItem);
  }

  getItemById(id: string): Item | undefined {
      return this.items.find(item => item.id === id);
  }

  updateItem(id: string, newName: string): boolean {
      const item = this.getItemById(id);
      if (item) {
          item.name = newName;
          return true;
      }
      return false;
  }

  deleteItem(id: string): boolean {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
          this.items.splice(index, 1);
          return true;
      }
      return false;
  }

  getAllItems(): Item[] {
      return this.items;
  }
}

// Example usage:
const itemManager = new ItemManager();

// Create items
itemManager.createItem("Item 1");
itemManager.createItem("Item 2");
itemManager.createItem("Item 3");

// Get all items
console.log("All items:", itemManager.getAllItems());

// Get item by ID
const itemId = itemManager.getAllItems()[0].id;
console.log("Item by ID:", itemManager.getItemById(itemId));

// Update item
const updated = itemManager.updateItem(itemId, "Updated Item");
console.log("Item updated:", updated);
console.log("All items after update:", itemManager.getAllItems());

// Delete item
const deleted = itemManager.deleteItem(itemId);
console.log("Item deleted:", deleted);
console.log("All items after deletion:", itemManager.getAllItems());