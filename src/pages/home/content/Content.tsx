import { ContactUs } from "./ContactUs/ContactUs";
import { DatasetSection } from "./DatasetSection/DatasetSection";
import { Intro } from "./Intro/Intro";
import { Objectives } from "./Objectives/Objectives";
import { ParticipantsSection } from "./PartcipantSection/ParticipantsSection";

export const Content = (): JSX.Element => {
  return (
    <>
      <Intro />
      <Objectives isHomePage />
      <ParticipantsSection />
      <DatasetSection />
      <ContactUs />
    </>
  );
};
