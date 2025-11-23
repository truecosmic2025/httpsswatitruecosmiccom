import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MicroStepsSection = () => {
  const techniques = [
    {
      title: "If Inner Speech is chosen:",
      step: 'When the old story shows up ("This always goes wrong"), pause and say your new line once, calmly: "I respond as the version of me it already worked out for." Then move on. No arguments. No debate.',
    },
    {
      title: "If SATS is chosen:",
      step: "Tonight, before sleep, run one 10–20 second scene: One place, One simple touch (a hand squeeze, a hug, a high-five), One short line you hear that confirms it's done. Repeat it twice in a relaxed, drowsy state.",
    },
    {
      title: "If Revision is chosen:",
      step: "Choose one moment from today that carried the old pattern. Re-see it once with the new you: New meaning, New reaction, New outcome. Then let it go and carry on.",
    },
    {
      title: "If somatic grounding is chosen:",
      step: "When triggered, place a hand on your chest, take three slow breaths, and repeat your new identity line on the exhale.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f3460] to-[#16213e]" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Sample Micro-Steps
          </h2>
          <p className="text-xl text-muted-foreground">Based on the technique we choose together</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techniques.map((technique, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{technique.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{technique.step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
