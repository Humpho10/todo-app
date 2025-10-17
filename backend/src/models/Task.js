class Task {
  constructor(id, title, description = '', completed = false, createdAt = new Date()) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.createdAt = createdAt;
    this.updatedAt = new Date();
  }
}

module.exports = Task;