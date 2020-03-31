import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Hospital {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  location: string;
}