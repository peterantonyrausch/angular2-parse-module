export interface IParseEntity {
  objectId: string;
}

export interface IParseInsertableEntity extends IParseEntity {
  createdAt: string;
}

export interface IParseUpdatableEntity {
  updatedAt: string;
}
