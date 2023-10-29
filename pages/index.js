import { TestimonialCards } from "../components/TestimonialCards";

export default function Home() {
  const cards = [
    {
      backgroundColor: "hsl(263, 55%, 52%)",
      color: "hsl(0, 0%, 100%)",
      image: "/image-daniel.jpg",
      name: "Daniel Clifford",
      reviewMain:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
      reviewQuotes:
        "I was an EMT for many years before I joined the bootcamp.I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
      title: "Verified Graduate",
      gridTemplateArea: "a",
    },
    {
      backgroundColor: "hsl(217, 19%, 35%)",
      color: "hsl(0, 0%, 100%)",
      image: "/image-jonathan.jpg",
      name: "Jonathan Walters",
      reviewMain: "The team was very supportive and kept me motivated.",
      reviewQuotes:
        "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company.This was one of the best investments I’ve made in myself.",
      title: "Verified Graduate",
      gridTemplateArea: "b",
    },
    {
      backgroundColor: "hsl(0, 0%, 100%)",
      color: "hsl(217, 19%, 35%)",

      image: "/image-kira.jpg",
      name: "Kira Whittle",
      reviewMain: "Such a life-changing experience. Highly recommended!",
      reviewQuotes:
        "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have.In fact, I’ve often referred to it during interviews as anexample of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
      title: "Verified Graduate",
      gridTemplateArea: "c",
    },
    {
      backgroundColor: "hsl(0, 0%, 100%)",
      color: "hsl(217, 19%, 35%)",
      image: "/image-jeanette.jpg",
      name: "Jeanette Harmon",
      reviewMain: "An overall wonderful and rewarding experience",
      reviewQuotes:
        "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
      title: "Verified Graduate",
      gridTemplateArea: "d",
    },
    {
      backgroundColor: "hsl(219, 29%, 14%)",
      color: "hsl(0, 0%, 100%)",
      image: "/image-patrick.jpg",
      name: "Patrick Abrams",
      reviewMain:
        "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
      reviewQuotes:
        "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ",
      title: "Verified Graduate",
      gridTemplateArea: "e",
    },
  ];

  return (
    <>
      <div className="container stack v">
        <div className="grid">
          {cards.map(function (elem) {
            return (
              <TestimonialCards
                backgroundColor={elem.backgroundColor}
                color={elem.color}
                image={elem.image}
                gridTemplateArea={elem.gridTemplateArea}
                name={elem.name}
                reviewMain={elem.reviewMain}
                reviewQuotes={elem.reviewQuotes}
                title={elem.title}
              />
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .container {
          align-items: center;
          justify-content: center;
          margin: 10rem auto;
          width: 50vw;
          height: 50vh;
        }

        .grid {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-template-areas:
            "a a b c"
            "d e e c";
        }

        @media (max-width: 1390px) {
          .container {
            width: 60%;
            height: 50vh;
            margin: 10rem auto;
          }
        }
        @media (max-width: 900px) {
          .container {
            width: 80%;
            margin: 20rem auto;
          }
        }
        @media (max-width: 420px) {
          .container {
            width: 90%;
            margin: 1rem 0.5rem;
          }
          .grid {
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(6, 0.5fr);
            grid-template-areas:
              "a "
              "a"
              "b"
              "c"
              "e"
              "d";
          }
        }
      `}</style>
    </>
  );
}
