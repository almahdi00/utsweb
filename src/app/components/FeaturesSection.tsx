"use client";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Grid Item 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Chats for your distributed teams
          </h1>
          <p className="text-base md:text-lg mb-4">
            Team combines the immediacy of real-time chat with an email
            threading model. With Team, you can catch up on important
            conversations while ignoring irrelevant ones.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Learn more →
          </a>
        </div>
        <div>
          <Image
            src="/images/info1.svg"
            alt="Screenshot of Team app showing chat and collaboration features"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Grid Item 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <Image
            src="/images/info2.svg"
            alt="Person using a laptop for remote work"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Chats for your distributed teams
          </h1>
          <p className="text-base md:text-lg mb-4">
            Team combines the immediacy of real-time chat with an email
            threading model. With Team, you can catch up on important
            conversations while ignoring irrelevant ones.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Learn more →
          </a>
        </div>
      </div>

      {/* Grid Item 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Choose how you want to work
          </h1>
          <p className="text-base md:text-lg mb-4">
            In Team, you’ve got all the flexibility to work when, where and how
            it’s best for you. You can easily chat, send emails or video clips,
            or hop on a huddle to talk things out live.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Learn more →
          </a>
        </div>
        <div>
          <Image
            src="/images/info3.svg"
            alt="Person sitting with a laptop and using Team app"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Grid Item 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/images/info4.svg"
            alt="Person using a laptop with Team app open"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Move faster with your Team tools
          </h1>
          <p className="text-base md:text-lg mb-4">
            With your other work apps connected to Team, you can work faster by
            switching less. And with powerful mobile and desktop apps, you can
            automate your routine tasks.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
}
