import { Sidebar } from './Sidebar';
import { ProfileFeed } from './ProfileFeed';
import { User } from '../../utils/types/user';
import { UserPhoto } from '../../utils/types/userphoto';

const Profile = ({ user, userPhotos }: { user: User; userPhotos: UserPhoto[] }) => {
  return (
    <div className='flex lg:flex-row flex-col'>
      <Sidebar data={user} />
      <ProfileFeed userPhotos={userPhotos} />
    </div>
  );
};

export default Profile;
