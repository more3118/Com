import { ObjectId } from "bson";

class Task {
  /**
   *
   * @param {string} name The name of the task
   * @param {string status The status of the task. Default value is "Open"
   * @param {ObjectId} id The ObjectId to create this task with
   */
  constructor({
    name,
    partition,
    status = Task.STATUS_OPEN,
    id = new ObjectId(),
  }) {
    this._partition = partition;
    this._id = id;
    this.name = name;
    this.status = status;
  }

  static STATUS_OPEN = "Open";
  static STATUS_IN_PROGRESS = "InProgress";
  static STATUS_COMPLETE = "Complete";
  static schema = {
    name: "Task",
    properties: {
      _id: "objectId",
      name: "string",
      status: "string",
    },
    primaryKey: "_id",
  };
}

class Survey {
  constructor({
                partition,
                id = new ObjectId(),
                a1,
                a2,
                a3,
                a4,
                a5,
                createdAt,
              }) {
    this._partition = partition;
    this._id = id;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.a4 = a4;
    this.a5 = a5;
    this.created_at = createdAt;
  }

  static schema = {
    name: "Survey",
    properties: {
      _id: "objectId",
      a1: "string",
      a2: "string",
      a3: "string",
      a4: "string",
      a5: "string",
      created_at: "date",
    },
    primaryKey: "_id",
  };
}

export { Task, Survey };
