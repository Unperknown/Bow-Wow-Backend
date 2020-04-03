import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Pet {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  profile: string;
}