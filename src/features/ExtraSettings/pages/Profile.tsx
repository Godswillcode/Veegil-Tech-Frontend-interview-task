import { PageIntro } from "src/components/PageIntro";
import { UserProfile } from "../components/Profile";

const Profile = () => {
  return (
    <div>
      <PageIntro
        title="Profile"
        arrowBack={false}
        description="View & edit your profile on the system"
      />
      <UserProfile />
    </div>
  );
};

export default Profile;
