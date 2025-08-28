import { Mail, Phone, MapPin, Linkedin } from "lucide-react";


const Home = () => {
  const skills = {
    professional: [
      "Accountability",
      "Financial Reporting & Reconciliation",
      "Bookkeeping", 
      "Payroll Processing",
      "Taxation & Compliance"
    ],
    technical: [
      "Microsoft Office (Excel, Word, PowerPoint)",
      "Oracle",
      "Teams & Zoom"
    ]
  };

  const hobbies = ["Badminton", "Travelling"];

  return (
    <div className="page-transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="animate-fade-in-up">
            <div className="relative inline-block mb-8">
              <img 
                src="/public/Bhai.png"
                alt="Ahtisham Ahmad - Professional Accountant"
                className="w-48 h-48 rounded-full object-cover shadow-[var(--shadow-hover)] animate-float border-4 border-white"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ahtisham Ahmad
            </h1>
            <p className="text-xl text-primary font-semibold mb-2">
              Professional Accountant
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="card-professional p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">Professional Summary</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              More than 1 year of professional experience in accounting field in a multicultural environment. 
              Professional with the ability to work under pressure, attention to detail and good team spirit.
            </p>
          </div>
        </section>

        {/* Skills and Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Skills Section */}
          <section className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="card-professional p-8 h-full">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Skills & Expertise</h2>
              
              {/* Professional Skills */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Professional
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {skills.professional.map((skill, index) => (
                    <div 
                      key={skill}
                      className="bg-secondary/50 p-3 rounded-lg text-foreground font-medium hover:bg-secondary transition-colors animate-scale-in"
                      style={{animationDelay: `${0.1 * index}s`}}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Technical
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {skills.technical.map((skill, index) => (
                    <div 
                      key={skill}
                      className="bg-secondary/50 p-3 rounded-lg text-foreground font-medium hover:bg-secondary transition-colors animate-scale-in"
                      style={{animationDelay: `${0.1 * (skills.professional.length + index)}s`}}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="card-professional p-8 h-full">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="bg-primary p-3 rounded-lg">
                    <Phone className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+352 691 154 775</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="bg-primary p-3 rounded-lg">
                    <Mail className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground break-all">Ahtishamahma021@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="bg-primary p-3 rounded-lg">
                    <MapPin className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">118 rue d'Esch, L-4440 Soleuvre<br/>Luxembourg</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="bg-primary p-3 rounded-lg">
                    <Linkedin className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/ahtisham-ahmad-539b78252/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow transition-colors text-sm break-all"
                    >
                      linkedin.com/in/ahtisham-ahmad-539b78252
                    </a>
                  </div>
                </div>
              </div>

              {/* Hobbies */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-primary mb-4 text-center">Hobbies & Interests</h3>
                <div className="flex justify-center space-x-4">
                  {hobbies.map((hobby) => (
                    <div key={hobby} className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                      {hobby}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default Home;