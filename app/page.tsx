import AuthorityStrip from "./components/home/authorityStrip";
import BlogPreview from "./components/home/blogPreview";
import CaseStudies from "./components/home/caseStudy";
import Hero from "./components/home/hero";
import Industries from "./components/home/industrious";
import PrimaryCTA from "./components/home/primaryCTA";
import Results from "./components/home/result";
import Services from "./components/home/services";
import Testimonials from "./components/home/testimonials";
import WhyUs from "./components/home/whyUs";

export default function Home() {
return (
<main>
<Hero />
 <AuthorityStrip />
<WhyUs />
<Services />
<Results />
<CaseStudies />
<Industries />
<Testimonials />
<PrimaryCTA />
<BlogPreview />
</main>
)
}