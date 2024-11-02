import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => (
  <div className={css.container}>
    <div className={css.top}>
      <img className={css.img} src={image} alt="User avatar" />
      <p>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.statsItem}>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li className={css.statsItem}>
        <span>Views</span>
        <span>{stats.views}</span>
      </li>
      <li className={css.statsItem}>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  </div>
);
export default Profile;