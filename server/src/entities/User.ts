import {
  Collection,
  Entity,
  Enum,
  ManyToMany,
  OneToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Field, ObjectType, registerEnumType } from "type-graphql";
import { Trace } from "./Trace";
import { Organization } from "./Organization";


export enum USER_ROLE {
  admin = "admin",
  user = "user",
}
// Register the enum type with TypeGraphQL
registerEnumType(USER_ROLE, {
  name: "USER_ROLE", // GraphQL Enum type name
  description: "Possible roles for a user", // Description for the GraphQL documentation,
});

@ObjectType()
@Entity()
export class User {
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
  @Property({ type: "text", unique: true })
  username!: string;

  @Field({ nullable: true })
  @Property({ type: "text", nullable: true })
  name?: string;

  @Property({ type: "text" })
  password!: string;

  @Field(() => [Trace], { nullable: true })
  @OneToMany(() => Trace, "user")
  trace = new Collection<Trace>(this);

  @Field(() => USER_ROLE, { nullable: true })
  @Enum({ items : () => USER_ROLE, default : USER_ROLE.user })
  role?: USER_ROLE ;

  @Field(() => [Organization], { nullable: true })
  @ManyToMany(() => Organization, org => org.members)
  organizations = new Collection<Organization>(this);
}
