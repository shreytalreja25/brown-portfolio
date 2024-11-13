import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { Tabs } from "../components/Tabs";
import { Award, PenTool, Calendar, Mail } from "lucide-react";

export default function Home() {
  const servicesTabs = [
    { 
      value: "tutoring", 
      label: "Tutoring", 
      content: (
        <Card title="Tutoring Services" description="Personalized academic support">
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>Development studies and policy analysis</li>
            <li>Social sciences research methodologies</li>
            <li>Academic writing and project management</li>
            <li>Qualitative and quantitative research skills</li>
          </ul>
        </Card>
      )
    },
    { 
      value: "consultation", 
      label: "Consultation", 
      content: (
        <Card title="Consultation Services" description="Expert guidance for researchers and professionals">
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>Policy analysis and research methodology</li>
            <li>Data collection strategies and literature reviews</li>
            <li>Presentation coaching for academic conferences</li>
          </ul>
        </Card>
      )
    },
    { 
      value: "speaking", 
      label: "Speaking", 
      content: (
        <Card title="Speaking Engagements" description="Conferences, workshops, and guest lectures">
          <p className="text-sm text-muted-foreground">
            Available for speaking engagements on topics related to global development, policy analysis, and research methodologies. Workshops and guest lectures can be tailored to your audience&apos;s needs.
          </p>
        </Card>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header style={{display:"flex",flexDirection:"column",alignItems:"center"}} className="mb-12 text-center">
        <Avatar src="/avatar.jpeg" alt="Jasmit Kaur" fallback="JK" />
        <h1 className="text-4xl font-bold">Jasmit Kaur</h1>
        <p className="text-xl text-muted-foreground">Development Studies | Policy Analysis | Community Engagement</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <Card>
          <p className="text-muted-foreground">
            Jasmit Kaur is a dedicated academic and professional in the fields of development studies, policy analysis, and community engagement, currently pursuing her Master&apos;s in Development Studies at the University of New South Wales (UNSW). With a strong foundation in research methodologies, policy evaluation, and international development, she has contributed extensively to projects in both academic and professional settings.
          </p>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Research Assistant" description="Institute for Conflict Management">
            <p className="text-sm text-muted-foreground">
              Tracked insurgency and extremism developments, focusing on regions like Punjab and Jammu & Kashmir, publishing regular updates on critical security issues.
            </p>
          </Card>
          <Card title="Research Intern" description="Project Statecraft">
            <p className="text-sm text-muted-foreground">
              Engaged in policy and governance research, authoring insightful content and collaborating on research initiatives.
            </p>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <Tabs tabs={servicesTabs} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <div className="flex flex-wrap gap-2">
          <Badge><Award className="w-4 h-4 mr-1" /> &apos;Future of Change&apos; Scholarship</Badge>
          <Badge><Award className="w-4 h-4 mr-1" /> &apos;International Student Award&apos; at UNSW</Badge>
          <Badge><Award className="w-4 h-4 mr-1" /> 100% Academic Scholarship at Amity University</Badge>
          <Badge><PenTool className="w-4 h-4 mr-1" /> Certified in Advanced Makeup Artistry</Badge>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact & Booking</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Button><Calendar className="mr-2 h-4 w-4" /> Book a Session</Button>
          <Button variant="outline"><Mail className="mr-2 h-4 w-4" /> Contact Me</Button>
        </div>
      </section>

      <footer className="text-center text-sm text-muted-foreground mt-8">
        <p>&copy; 2024 Jasmit Kaur. All rights reserved.</p>
      </footer>
    </div>
  );
}
