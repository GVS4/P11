import { Helmet } from "react-helmet";
import iconChat from "/images/icon-chat.webp";
import iconMoney from "/images/icon-money.webp";
import iconSecurity from "/images/icon-security.webp";
import FeatureItem from "../../components/FeatureItem";

const features = [
  {
    icon: iconChat,
    title: "You are our #1 priority",
    description:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    icon: iconMoney,
    title: "More savings means higher rates",
    description:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    icon: iconSecurity,
    title: "Security you can trust",
    description:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

function Home() {
  return (
    <>
      <Helmet>
        <title>Argent Bank - Home Page</title>
      </Helmet>
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {features.map((feature, idx) => (
            <FeatureItem key={idx} {...feature} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
