import type { BaseEntity } from '../domain/AggregateRoot';
import type { IRepository } from '../domain/IRepository';

export class LocalRepository<T extends BaseEntity> implements IRepository<T> {
  protected entities: T[] = [];

  async create(entity: T): Promise<void> {
    this.entities.push(entity);
    console.log(this.entities);
  }

  async update(entity: T): Promise<void> {
    const index = this.entities.findIndex((e) => e.id === entity.id);
    if (index !== -1) {
      this.entities[index] = entity;
    }
  }

  async delete(entity: T): Promise<void> {
    const index = this.entities.findIndex((e) => e.id === entity.id);
    if (index !== -1) {
      this.entities.splice(index, 1);
    }
  }

  async getAll(): Promise<T[]> {
    return this.entities;
  }

  async getById(id: string): Promise<T | null> {
    const entity = this.entities.find((e) => e.id === id);
    return entity ?? null;
  }
}
