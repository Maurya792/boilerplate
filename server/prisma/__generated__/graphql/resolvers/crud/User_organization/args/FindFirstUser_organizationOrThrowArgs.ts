import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_organizationOrderByWithRelationInput } from "../../../inputs/User_organizationOrderByWithRelationInput";
import { User_organizationWhereInput } from "../../../inputs/User_organizationWhereInput";
import { User_organizationWhereUniqueInput } from "../../../inputs/User_organizationWhereUniqueInput";
import { User_organizationScalarFieldEnum } from "../../../../enums/User_organizationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUser_organizationOrThrowArgs {
  @TypeGraphQL.Field((_type) => User_organizationWhereInput, {
    nullable: true,
  })
  where?: User_organizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [User_organizationOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: User_organizationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => User_organizationWhereUniqueInput, {
    nullable: true,
  })
  cursor?: User_organizationWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [User_organizationScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | "id"
        | "role"
        | "user_id"
        | "slug"
        | "organization_id"
        | "invitation_status"
        | "last_invited"
      >
    | undefined;
}
