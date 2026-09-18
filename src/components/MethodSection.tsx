import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import methodIllustration from "@/assets/method-illustration.jpg";
import { openClauddeChat } from "@/lib/claudde";

export const MethodSection = () => {
  const steps = [
    {
      number: "1",
      title: "Name the End as a state of being",
      description: "We phrase your outcome not as \"a thing to get\", but as who you are in the life where it's already normal.",
    },
    {
      number: "2",
      title: "Find the hidden script",
      description: "We gently uncover the quiet, automatic phrases and felt reactions that keep recreating the same pattern.",
    },
    {
      number: "3",
      title: "Rewrite the inner command",
      description: "We choose one replacement line—simple, believable, and powerful—that matches the version of you who already lives that reality.",
    },
    {
      number: "4",
      title: "Anchor it to your day",
      description: "We attach the new line/state to a real moment (waking up, checking your phone, walking into work) so it actually gets used.",
    },
    {
      number: "5",
      title: "Support tool (as needed)",
      description: "We add a short, custom support practice—SATS, Revision, breath, or inner speech—for those \"wobble\" moments.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Dark blue background */}
      <div className="absolute inset-0 bg-[#16213e]" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Inner Power & Subconscious Reset</span> Work
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Amara's Inner Power Method
          </p>
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <p className="text-lg text-muted-foreground italic">
              You don't attract what you want — You attract what you're being at a subconscious level.
            </p>
          </div>
          <div className="max-w-md mx-auto mb-8">
            <img 
              src={methodIllustration} 
              alt="5-Step Method Process Diagram" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <Card key={step.number} className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/30 backdrop-blur border border-primary/30 rounded-lg p-6 mb-8">
          <p className="text-lg text-foreground text-center">
            <span className="font-semibold">Outcome:</span> Your inner command stops arguing with your desire. Action feels less forced, and life begins to mirror a steadier, stronger you.
          </p>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            onClick={() => {
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              openClauddeChat();
            }}
          >
            Find Your Best-Fit Path
          </Button>
        </div>
      </div>
    </section>
  );
};
