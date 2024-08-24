import { AggregateRoot } from '../../Shared/domain/AggregateRoot';
import { RoleId } from './RoleId';
import { RoleName } from './RoleName';
import { RoleState } from './RoleState';

export class Role extends AggregateRoot {
  id: RoleId;
  name: RoleName;
  state: RoleState;

  constructor(id: RoleId, roleName: RoleName, roleState: RoleState) {
    super();
    this.id = id;
    this.name = roleName;
    this.state = roleState;
  }

  static async create(id: RoleId, roleName: RoleName, roleStatus: RoleState): Promise<Role> {
    return new Role(id, roleName, roleStatus);
  }

  async updateFields(roleName: RoleName, roleState: RoleState): Promise<void> {
    this.name = roleName;
    this.state = roleState;
  }

  toPrimitives(): Record<string, unknown> {
    return {
      id: this.id.value,
      roleName: this.name.getValue(),
      roleState: this.state.getValue(),
    };
  }

  static fromPrimitives(data: Record<string, unknown>): Role {
    return new Role(new RoleId(data.id as string), new RoleName(data.name as string), new RoleState(data.state as string));
  }
}
