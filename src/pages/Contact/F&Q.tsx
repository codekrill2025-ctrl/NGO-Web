import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./F&Q.scss";

type FaqItem = {
  question: string;
  answer: string;
};

const generalFaqs: FaqItem[] = [
  {
    question: "WHAT IS THE BELIEF BEHIND SMILE FOUNDATION?",
    answer:
      "Smile Foundation believes that education, healthcare, livelihood, and women empowerment are essential for sustainable social change.",
  },
  {
    question: "DOES SMILE FOUNDATION WORK IN INDIA OR OTHER COUNTRIES TOO?",
    answer:
      "Smile Foundation is a national level development organization with its welfare projects spread across India.",
  },
  {
    question: "WHAT IS THE SCENARIO IN INDIA, PRESENTLY?",
    answer:
      "India has made progress in many areas, yet many children and families still need support for education, health, livelihood, and social development.",
  },
  {
    question: "HOW OLD IS SMILE FOUNDATION?",
    answer:
      "Smile Foundation was established in 2002 and has been working for social development since then.",
  },
  {
    question: "WHAT IS THE MISSION OF SMILE FOUNDATION?",
    answer:
      "The mission is to enable sustainable change in the lives of underserved children, youth, women, and communities.",
  },
  {
    question: "WHO ARE THE PEOPLE BEHIND SMILE FOUNDATION?",
    answer:
      "Smile Foundation is run by professionals, development workers, volunteers, partners, and supporters.",
  },
  {
    question: "WHICH AREAS DOES SMILE FOUNDATION WORK IN?",
    answer:
      "Smile Foundation works in education, healthcare, livelihood, women empowerment, disaster response, and grassroots development.",
  },
  {
    question:
      "WHY DO YOU STRESS ON EDUCATION, WHEN THERE ARE OTHER EQUALLY PRESSING ISSUES IN THE COUNTRY?",
    answer:
      "Education empowers children and families, creating long-term change and helping break the cycle of poverty.",
  },
  {
    question: "WHAT IS THE WORKING MODEL OF SMILE FOUNDATION?",
    answer:
      "Smile Foundation works through a lifecycle approach and implements programmes in partnership with communities and institutions.",
  },
  {
    question: "WHAT IS SOCIAL VENTURE PHILANTHROPY MODEL?",
    answer:
      "It is a model where resources, partnerships, and professional management are used to create measurable social impact.",
  },
  {
    question: "WHAT IS THE OUTREACH MODEL?",
    answer:
      "The outreach model focuses on taking services directly to underserved communities.",
  },
  {
    question: "WHAT IS THE LIFECYCLE APPROACH OF SMILE FOUNDATION?",
    answer:
      "The lifecycle approach supports people across stages of life through education, health, skill building, and empowerment.",
  },
  {
    question: "WHAT IS THE SOURCE OF FUNDING FOR THE ORGANIZATION?",
    answer:
      "Funding comes through donations, corporate partnerships, institutions, and individual supporters.",
  },
  {
    question: "HOW CAN AN NGO APPLY FOR ASSISTANCE?",
    answer:
      "NGOs can contact Smile Foundation through official communication channels with details of their work and requirements.",
  },
  {
    question: "HOW DOES SMILE CHOOSE THE PROJECTS / GRASSROOTS NGOS TO WORK WITH?",
    answer:
      "Projects and partners are selected based on need, credibility, impact potential, and alignment with programme goals.",
  },
  {
    question: "WHO ALL ARE THE TARGET BENEFICIARIES?",
    answer:
      "Children, youth, women, families, and underserved communities are the primary beneficiaries.",
  },
  {
    question:
      "AT PRESENT HOW MANY PEOPLE ARE DIRECTLY BENEFITTING FROM VARIOUS PROGRAMMES OF SMILE FOUNDATION?",
    answer:
      "Smile Foundation reaches lakhs of children and families through multiple programmes every year.",
  },
  {
    question: "HOW CAN ONE ASSOCIATE WITH THE ORGANIZATION?",
    answer:
      "You can associate as a donor, volunteer, corporate partner, institution, or supporter.",
  },
  {
    question: "DOES SMILE PROVIDE INTERNSHIPS? IF YES, HOW CAN I APPLY FOR IT?",
    answer:
      "Yes, internship opportunities may be available. Applicants can contact the organization through the official website.",
  },
  {
    question: "HOW CAN I WORK FOR SMILE?",
    answer:
      "You can check career opportunities and apply through the official career/contact channels.",
  },
  {
    question:
      "WHAT ARE THE AWARDS AND ACCREDITATION THAT SMILE HAS RECEIVED TILL DATE?",
    answer:
      "Smile Foundation has received several recognitions and accreditations for its work in social development.",
  },
  {
    question: "HOW CAN I DONATE TO SMILE FOUNDATION?",
    answer:
      "You can donate through the official donation page or contact the donation support team.",
  },
  {
    question: "DOES SMILE HAVE ANY MERCHANDISE?",
    answer:
      "Merchandise availability may vary. Please contact Smile Foundation for current details.",
  },
  {
    question: "WHAT ARE THE WAYS OF MEASURING IMPACTS OF THE VARIOUS PROGRAMMES?",
    answer:
      "Impact is measured through monitoring, reporting, beneficiary tracking, field reviews, and programme outcomes.",
  },
  {
    question: "HOW DOES SMILE FOUNDATION WORK FOR THE EDUCATION OF UNDERPRIVILEGED CHILDREN?",
    answer:
      "Smile Foundation supports education through learning centres, school support, nutrition, and community engagement.",
  },
  {
    question: "WHERE IS MISSION EDUCATION PROGRAMME LOCATED?",
    answer:
      "Mission Education projects operate in multiple locations across India.",
  },
  {
    question: "WHAT CURRICULUM DO YOU FOLLOW IN THE EDUCATION PROGRAMMES?",
    answer:
      "The curriculum is aligned with children’s learning needs and relevant education standards.",
  },
  {
    question: "WHAT IS YOUR HEALTHCARE PROGRAMME?",
    answer:
      "Healthcare programmes provide medical support, awareness, and access to underserved communities.",
  },
  {
    question: "WHAT IS THE IDEA BEHIND SMILE ON WHEELS?",
    answer:
      "Smile on Wheels takes healthcare services to communities with limited access to medical facilities.",
  },
  {
    question: "WHAT KIND OF MEDICAL SERVICES ARE PROVIDED THROUGH SMILE ON WHEELS?",
    answer:
      "Services include basic medical consultation, medicines, health awareness, and referrals.",
  },
  {
    question:
      "ON AN AVERAGE HOW MANY PEOPLE RECEIVE BENEFIT THROUGH SMILE ON WHEELS?",
    answer:
      "Many people benefit through mobile healthcare services depending on project location and reach.",
  },
  {
    question: "HOW MANY SMILE ON WHEELS ARE CURRENTLY OPERATIONAL IN INDIA?",
    answer:
      "The number of operational units may vary based on current projects.",
  },
  {
    question: "WHAT IS THE LIVELIHOOD PROGRAMME OF SMILE FOUNDATION?",
    answer:
      "The livelihood programme focuses on skill training and placement support for underserved youth.",
  },
  {
    question: "WHICH AGE GROUP DOES STEP CATER TO?",
    answer:
      "STEP mainly supports youth in employable age groups.",
  },
  {
    question: "HOW MANY STEP CENTRES ARE THERE NOW?",
    answer:
      "The number of centres may vary depending on programme operations.",
  },
  {
    question: "IS THERE A SPECIFIC CURRICULUM FOR THE STEP PROGRAMME?",
    answer:
      "Yes, the programme uses employability-focused training modules.",
  },
  {
    question: "HOW MANY YOUTHS HAVE BENEFITTED THROUGH THIS PROGRAMME?",
    answer:
      "Many youth have benefited through skill training and placement support.",
  },
  {
    question: "HOW DOES SMILE FOUNDATION WORK IN THE AREA OF WOMEN EMPOWERMENT?",
    answer:
      "Smile Foundation works with women and girls through education, health, livelihood, and awareness programmes.",
  },
  {
    question: "WHAT IS THE MODEL OF SWABHIMAN?",
    answer:
      "Swabhiman focuses on empowering women and girls through community-based interventions.",
  },
  {
    question: "HOW MANY WOMEN AND GIRLS ARE BENEFITTED THROUGH SWABHIMAN?",
    answer:
      "The programme benefits women and girls through direct community outreach.",
  },
];

const donorFaqs: FaqItem[] = [
  {
    question: "WHAT INFORMATION IS SENT TO THE DONORS?",
    answer:
      "The donor gets an instant acknowledgement mail along with an SMS. On receiving the reconciliation statement from the bank, a receipt is sent via e-mail immediately, followed by a hard copy by post within India. The receipt is accompanied by a welcome pack as a token of appreciation. The donor receives updates and an annual impact report during a year’s time.",
  },
  {
    question: "WHAT WILL SMILE DO WITH MY DONATION?",
    answer:
      "Your donation is used to support education, healthcare, livelihood, women empowerment, and other social development programmes.",
  },
  {
    question:
      "HOW DOES SMILE FOUNDATION ENSURE THAT THE DONOR'S CONTRIBUTION IS BEING UTILIZED IN THE INTENDED WAY?",
    answer:
      "Smile Foundation follows monitoring, reporting, audits, and programme tracking to ensure responsible utilization of donations.",
  },
  {
    question: "DOES SMILE ACCEPT DONATIONS IN USD OR POUNDS?",
    answer:
      "Donation options may depend on applicable rules and available payment methods.",
  },
  {
    question:
      "HOW MUCH SHOULD I DONATE? (WE CAN GIVE BREAK UP OF MONTHLY EXPENDITURE OF A CHILD)",
    answer:
      "You may donate any amount based on your preference and the available campaigns.",
  },
  {
    question: "IS THE WEBSITE SAFE TO MAKE ONLINE PAYMENTS?",
    answer:
      "Online payments should be made only through the official secure donation page.",
  },
  {
    question: "WHAT IS THE PROCESS OF KEEPING THE DONOR’S INFORMATION SAFE?",
    answer:
      "Donor information is handled with privacy and used only for official communication and records.",
  },
  {
    question: "WHAT ARE THE TAX BENEFITS THAT A DONOR WILL GET?",
    answer:
      "Tax benefits depend on applicable laws and the type of donation.",
  },
  {
    question: "DO YOU ISSUE TAX RECEIPTS? HOW SOON WILL THE RECEIPTS ARRIVE?",
    answer:
      "Receipts are issued after successful donation processing and verification.",
  },
  {
    question: "WHAT HAPPENS IF THE TAX RECEIPT IS LOST?",
    answer:
      "You may contact donor support for assistance with duplicate receipt details.",
  },
  {
    question: "CAN ONE DONATE IN KIND (OLD CLOTHES, BOOKS, STATIONARY ETC)?",
    answer:
      "Donation in kind may depend on current programme requirements and location.",
  },
  {
    question:
      "IS IT POSSIBLE FOR A CONSISTENT SUPPORTER TO MEET THE BENEFICIARY PERSONALLY?",
    answer:
      "Beneficiary visits may be arranged based on privacy, safety, programme guidelines, and feasibility.",
  },
];

export default function Faq() {
  return (
    <>
      <Header />

      <main className="faqPage">
        <Container maxWidth="lg">
          <Box className="faqBreadcrumb">
            <HomeIcon fontSize="small" />
            <span>HOME</span>
            <KeyboardArrowRightIcon fontSize="small" />
            <span>PAGES</span>
            <KeyboardArrowRightIcon fontSize="small" />
            <span className="green">FAQS</span>
          </Box>
        </Container>

        <Container maxWidth="lg">
          <Box className="faqLayout">
            <Box className="faqLeft">
              <Typography className="faqHeading">
                FREQUENTLY ASKED QUESTIONS
              </Typography>
              <Typography className="moreQuestions">
                More Questions ❯
              </Typography>
            </Box>

            <FaqList items={generalFaqs} defaultOpen={1} />
          </Box>
        </Container>

        <Container maxWidth="lg">
          <Box className="faqLayout donorLayout">
            <Box className="faqLeft">
              <Typography className="faqHeading">
                FAQ'S FOR INDIVIDUAL DONORS
              </Typography>
              <Typography className="moreQuestions">
                More Questions ❯
              </Typography>
            </Box>

            <FaqList items={donorFaqs} defaultOpen={0} />
          </Box>
        </Container>
      </main>

      <Footer />
    </>
  );
}

function FaqList({
  items,
  defaultOpen,
}: {
  items: FaqItem[];
  defaultOpen: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | false>(defaultOpen);

  return (
    <Box className="faqCard">
      {items.map((item, index) => (
        <Accordion
          key={`${item.question}-${index}`}
          expanded={openIndex === index}
          onChange={() => setOpenIndex(openIndex === index ? false : index)}
          className="faqAccordion"
        >
          <AccordionSummary
            expandIcon={<KeyboardArrowRightIcon />}
            className="faqSummary"
          >
            <Typography className={openIndex === index ? "question active" : "question"}>
              {item.question}
            </Typography>
          </AccordionSummary>

          <AccordionDetails className="faqDetails">
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}