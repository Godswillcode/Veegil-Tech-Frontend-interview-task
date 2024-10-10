import { PageIntro } from "src/components/PageIntro";
// import { CompanyProfile } from "../components/CompanyProfile";
import { RealtorProfile } from "../components/Profile";

const Profile = () => {
  return (
    <div>
      <PageIntro
        title="Profile"
        arrowBack={false}
        description="View & edit your profile on the system"
      />
      {/* <CompanyProfile /> */}
      <RealtorProfile />
    </div>
  );
};

export default Profile;
