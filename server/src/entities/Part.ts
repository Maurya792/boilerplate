import {
    Entity,
    ManyToOne,
    PrimaryKey,
    Property,
  } from "@mikro-orm/core";
  import { Field, ObjectType } from "type-graphql";
  import { Trace } from "./Trace";
  @ObjectType()
  @Entity()
  export class Part {
    @Field()
    @PrimaryKey()
    id!: number;
  
    @Field(() => String)
    @Property({ type: "date" })
    createdAt? = new Date();
  
    @Field(() => String)
    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt? = new Date();
  
    @Field(() => Number)
    @Property({ type: "numeric" })
    activeTime?: number;
  
    @Field(() => Number)
    @Property({ type: "numeric" })
    inActiveTime?: number;
  
    @Field(()=>Trace, { nullable : true})
    @ManyToOne(()=> Trace)
    trace? : Trace
  }
  