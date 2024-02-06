import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
@Entity()
export class Organization {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt? = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt? = new Date();

  @Field()
  @Property()
  name?: string;

  @Field()
  @Property({ type: "text" })
  slug?: string;

  @Field(() => [User], { nullable: true })
  @ManyToMany(() => User)
  members = new Collection<User>(this);

  @Field(() => [User], { nullable: true })
  @ManyToMany(() => User)
  admins = new Collection<User>(this);
}
