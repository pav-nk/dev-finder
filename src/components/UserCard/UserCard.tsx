import { UserTitle } from '../UserTitle';
import { UserStat } from '../UserStat';
import { UserInfo } from '../UserInfo';
import styles from './UserCard.module.scss';
import { LocalGitHubUser } from 'types';

interface UserCardProps extends LocalGitHubUser { }



export const UserCard = (props: UserCardProps) => {

  return (
    <div className={styles.userCard}>
      <img src={props.avatar} alt={props.login} className={styles.avatar} />
      <UserTitle created={props.created} login={props.login} name={props.name} />
      <p className={`${styles.bio}${!props.bio ? '' : ` ${styles.empty}`}`}>
        {props.bio || 'This profile has no bio'}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  );

};
