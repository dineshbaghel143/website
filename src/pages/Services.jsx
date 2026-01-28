import WebDevelopmentSection from "../components/WebDevelopmentSection";
import AppDevelopmentSection from "../components/AppDevelopmentSection";
import AppToUiDivider from "../components/AppToUiDivider";
import UiUxDesignSection from "../components/UiUxDesignSection";
import SectionWaveDivider from "../components/SectionWaveDivider";
import ErpDevelopmentSection from "../components/ErpDevelopmentSection";
import GlowWaveDivider from "../components/GlowWaveDivider";
import AiMlIntegrationSection from "../components/AiMlIntegrationSection";
import AIMLToCloudDivider from "../components/AIMLToCloudDivider";
import CloudDevOpsSection from "../components/CloudDevOpsSection";
import CloudWaveDivider from "../components/CloudWaveDivider";
import CustomSoftwareSection from "../components/CustomSoftwareSection";
import SoftwareToITConsultingDivider from "../components/SoftwareToITConsultingDivider";
import ITConsultingSection from "../components/ITConsultingSection";
import IndustriesSection from "../components/IndustriesSection";
import FinalCtaSection from "../components/FinalCtaSection";
import ParallaxWaves from "../components/ParallaxWaves";
import ServicesHero from "../components/ServicesHero";
import SectionDivider from "../components/SectionDivider";



const Services = () => {
  return (
    <div className="animated-bg relative overflow-hidden text-white min-h-screen">
      <ParallaxWaves />

      <ServicesHero />

      <WebDevelopmentSection />
      <SectionDivider />
      <AppDevelopmentSection />
      <AppToUiDivider />
      <UiUxDesignSection />
      <SectionWaveDivider />
      <ErpDevelopmentSection />
      <GlowWaveDivider />
      <AiMlIntegrationSection />
      <AIMLToCloudDivider />
      <CloudDevOpsSection />
      <CloudWaveDivider />
      <CustomSoftwareSection />
      <SoftwareToITConsultingDivider />
      <ITConsultingSection />
      <IndustriesSection />
      <FinalCtaSection />
    </div>
  );
};

export default Services;
