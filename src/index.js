import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identitas />
      </div>
      <div className="bottom">
        <BottomDesc />
        <BottomSkill />
      </div>
    </div>
  );
}

const BadgeSkill = [
  {
    skill: "Javascript",
    badge: "｡🇯‌🇸",
  },
  {
    skill: "ReactJS",
    badge: "⚛️",
  },
  {
    skill: "NodeJS",
    badge: "🗃️",
  },
];

const LinkSocial = [
  {
    icon: "fa-facebook",
    href: "https://www.facebook.com/prabowosaktii/",
  },
  {
    icon: "fa-instagram",
    href: "https://www.instagram.com/prabowo.asli/",
  },
  {
    icon: "fa-linkedin",
    href: "https://www.linkedin.com/in/prabowo-sakti/",
  },
  {
    icon: "fa-github",
    href: "https://github.com/prabowo-saktii",
  },
];

function SocialButton({ icon, link }) {
  return (
    <a onClick={() => window.open(link, "_blank")}>
      <button>
        <i class={`fa-brands ${icon}`}></i>
      </button>
    </a>
  );
}

function Header() {
  const middleIndex = Math.floor(LinkSocial.length / 1.2);
  const socialLeft = LinkSocial.slice(0, middleIndex);
  const socialRight = LinkSocial.slice(middleIndex);
  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((data) => (
          <SocialButton icon={data.icon} link={data.href} key={data.icon} />
        ))}
      </div>
      <div className="social-buttons right">
        {socialRight.map((data) => (
          <SocialButton icon={data.icon} link={data.href} key={data.icon} />
        ))}
      </div>
    </>
  );
}

function Identitas() {
  return (
    <>
      <div className="text">
        <div className="name-wrapper">
          <div className="name">Meow Boss</div>
        </div>

        <div className="title">Meow Engineer</div>
      </div>
    </>
  );
}

function BottomDesc() {
  return (
    <div className="card-bottom">
      <div className="desc">
        <p>
          My name is <b>Blackie</b> and im meow engineer
        </p>
        <p>
          to say that i love software is an understatement, i spend every waking
          hour building something fun & watching tech podcasts or attending
          meetups and conferences
        </p>
      </div>
    </div>
  );
}

function SkillBadge({ text, emoji }) {
  return (
    <button>
      <div className="height">
        {text} {emoji}
      </div>
    </button>
  );
}

function BottomSkill() {
  return (
    <div className="buttons">
      {BadgeSkill.map((data) => (
        <SkillBadge text={data.skill} emoji={data.badge} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
