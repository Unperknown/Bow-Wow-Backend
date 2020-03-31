import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Post {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  pictures: Array<string>;

  @Column()
  content: string;

  @Column()
  liked: Array<string>;
}