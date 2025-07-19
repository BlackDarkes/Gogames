import { Hero } from "./Hero/Hero";
import { Plans } from "./Plans/Plans";
import { VRGlasses } from "./VRGlasses/VRGlasses";
import { Xbox } from "./Xbox/Xbox";

export const Main = () => {
  return (
    <main>
      <Hero />
      <VRGlasses />
      <Xbox />
      <Plans />
    </main>
  );
};
