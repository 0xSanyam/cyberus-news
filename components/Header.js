import headerStyles from "../styles/Header.module.css";

const Header = () => {
  //   const x = 4;
  return (
    <div>
      <h1 className=/*"title" */ {headerStyles.title}>
        <span>Cyberus</span> News
      </h1>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style> */}
      <p className={headerStyles.description}>
        Keep up to date with the latest cyber world news
      </p>
    </div>
  );
};

export default Header;
