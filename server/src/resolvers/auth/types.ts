import { InputType, Field, ObjectType } from "type-graphql";

@InputType()
export class UsernamePassWordInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
@ObjectType()
export class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
export class ResponseError {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
}