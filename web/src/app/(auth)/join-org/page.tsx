import { joinOrg } from "@/api/server-actions/user-actions";
import { RegisterForm } from "@/components/forms/register-form";
import routes from "@/lib/routes";
import JWT from "jsonwebtoken";

const joinOrgPage = async ({
  searchParams,
}: {
  searchParams: { token?: string };
}) => {
  let isVerified = false;
  let isNewUser = false;
  const org = JWT.decode(searchParams?.token ?? "") as {
    orgName: string;
    orgId: number;
    username: string;
  };
  if (searchParams?.token) {
    const res = await joinOrg({ token: searchParams?.token as string });
    isVerified = !!res.data?.joinOrg.isSuccess;
    isNewUser = !!res.data?.joinOrg.isNewUser;
  }
  return (
    <div>
      <div>
        {isNewUser ? (
          <RegisterForm
            username={org.username}
            preJoinedOrgs={org.orgId ? [org.orgId] : []}
            successMessage={
              <div className="text-black">
                <div>
                  Created account and Joined the organization{" "}
                  <strong>{org.orgName}</strong> successfully!
                </div>
                <div>
                  Please check your account confirmation email on{" "}
                  <strong>{org.username}</strong>.
                </div>
              </div>
            }
          />
        ) : isVerified ? (
          <div className="text-white text-lg text-left">
            <span>Thanks for joining Organization ({org?.orgName})</span>
          </div>
        ) : (
          <div className="text-white text-lg text-left">
            Oops, Looks like your joining link has been expired! <br /> Please
            try again by{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default joinOrgPage;
