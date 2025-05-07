import CompanyIcon from '../../assets/icon-company.svg';
import LocationIcon from '../../assets/icon-location.svg';
import TwitterIcon from '../../assets/icon-twitter.svg';
import BlogIcon from '../../assets/icon-website.svg';

import { InfoItem, InfoItemProps } from '../InfoItem';
import { LocalGitHubUser } from 'types';
import styles from './UserInfo.module.scss';

interface UserInfoProps extends Pick<
  LocalGitHubUser,
  'blog' | 'company' | 'location' | 'twitter'
> { }


export const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <img src={LocationIcon} alt={location} />,
      text: location,
    },
    {
      icon: <img src={BlogIcon} alt={blog} />,
      text: blog,
      isLink: true,
    },
    {
      icon: <img src={TwitterIcon} alt={twitter} />,
      text: twitter,
    },
    {
      icon: <img src={CompanyIcon} alt={company} />,
      text: company,
    },
  ]

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
}
