import Image from "next/image";
import owner from "../../public/images/owner.jpg";
import svg1 from "../../public/1.svg";
import svg2 from "../../public/2.svg";
import svg3 from "../../public/3.svg";
import Question from "./components/question/Question";

export default function Home() {
  return (
    <div className="pb-18">
      <div className="simplifying p-12">
        <h2 className="text-2xl text-center pb-4 font-semibold">
          Simplifying parking & charging.
        </h2>
        <p className="text-center">
          JustCharge is our network of bookable, reliable EV home chargers,
          that's changing the way drivers charge in the UK.
        </p>
        <br></br>
        <p className="text-center">
          By using already existing infrastructure, JustCharge is expanding
          access to EV charging points rapidly yet sustainably. Join the
          community by booking or listing a charger today.
        </p>
      </div>

      <div className="accelerate p-12 pb-8">
        <h2 className="text-2xl text-left pb-4 font-semibold">
          Accelerate the switch to EV.
        </h2>
        <p className="pb-6 text-left">
          Over 50% of UK drivers don't have a driveway, so owning an EV home
          charger isn't a possibility. You can help your neighbours switch to an
          EV by expanding your local charging network through JustCharge. With
          more charging possibilities people have less barriers buying an EV.
          And with more EVs in your neighbourhood, you'll benefit from a
          cleaner, safer community.
        </p>
        <button className="w-45 h-10 rounded-md bg-btn-primary text-white font-semibold">
          Liste your charger
        </button>
        <div className="pt-6">
          <Image
            src={owner}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="faq  p-12">
        <h2 className="text-2xl text-left pb-8 font-semibold">
          Frequently asked questions.
        </h2>
        <Question
          question={"What sort of Electric Vehicle charger do I need to have?"}
          answer={
            "Whether you have a Type 1, Type 2, or even a standard outdoor mains plug - you can list your charger with us. We’ll get this information from you when you sign up, and then only send you bookings from people with the right type of vehicle."
          }
        ></Question>
        <Question
          question={"Will I have to ask customers for money?"}
          answer={
            "Nope. We take care of all of that. The customer simply pays for both parking and charging through JustPark, and we then pass on those earnings to you."
          }
        ></Question>
        <Question
          question={"Can I choose when my charger is available?"}
          answer={
            "Yes you can. You can set your charger to be available whenever you want it to be, and you’ll only receive bookings for those times. What’s more, all of our bookings are made in advance, so you’ll always know when your charger is going to be used. mains plug - you can list your charger with us. We’ll get this information from you when you sign up, and then only send you bookings from people with the right type of vehicle."
          }
        ></Question>
        <Question
          question={"How much will I earn?"}
          answer={
            "We’ve had some space owners earn as much as £3000 per year. What you’ll earn depends on where your space is, and how much demand there is in your area. But as we move to a more electrified world, we can only see that demand increasing. It’s an exciting time to come on board."
          }
        ></Question>
        <Question
          question={"Can I set my own price?"}
          answer={
            "Whether you have a Do I have to pay tax on my earnings? 1, Type 2, or Yes! We appreciate that our electrified space owners have different energy costs and are based in areas with high or lower demand. During the set up, you can choose to use the automated pricing, or click to set your own. a standard outdoor mains plug - We’ve had some space owners earn as much as £3000 per year. What you’ll earn depends on where your space is, and how much demand there is in your area. But as we move to a more electrified world, we can only see that demand increasing. It’s an exciting time to come on board. can list your charger with us. We’ll get this information from you when you sign up, and then only send you bookings from people with the right type of vehicle."
          }
        ></Question>
        <Question
          question={"What sort of Electric Vehicle charger do I need to have?"}
          answer={
            "Whether you have a Type 1, Type 2, or even a standard outdoor mains plug - you can list your charger with us. We’ll get this information from you when you sign up, and then only send you bookings from people with the right type of vehicle."
          }
        ></Question>
      </div>
      <div>
        <div className="pt-6 pl-26 pb-6">
          <Image
            src={svg1}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <h5 className="text-semibold text-sm text-center">List your charger</h5>
        <div className="pt-6 pl-26 pb-6">
          <Image
            src={svg2}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <h5 className="text-semibold text-sm text-center">Book a charger</h5>
        <div className="pt-6 pl-26 pb-6">
          <Image
            src={svg3}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <h5 className="text-semibold text-sm text-center">
          Electrify your feet
        </h5>
      </div>
    </div>
  );
}
