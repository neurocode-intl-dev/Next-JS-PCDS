
import Image from "next/image";

import LandingPage from "@/components/LandingPage";
import ExploreServices from "@/components/ExploreServices";
import MissionVision from "@/components/MissionVision";
import OurServices from "@/components/OurServices";
import CompanionshipCare from "@/components/CompanionshipCare";
import DomesticAssistance from "@/components/DomesticAssistance";

export default function Home() {
  return (
  <>
<LandingPage />
<ExploreServices/>
<MissionVision/>
<OurServices/>
<CompanionshipCare/>
<DomesticAssistance/>

  </>  );
}
