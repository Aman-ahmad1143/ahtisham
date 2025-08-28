import { Building2, Calendar, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "ACCOUNTANT",
      company: "Kamal Textile Ltd",
      period: "July 2022 - April 2023",
      type: "Full-time Position",
      responsibilities: [
        {
          category: "Booking & Invoicing",
          tasks: "Processed bank receipts and payments, recorded and filed all cheques and invoices, prepared purchase and sales invoices, followed up on collections and allocated payments."
        },
        {
          category: "Payroll & Taxation", 
          tasks: "Prepared payroll sheets on a monthly basis, assisted in filing tax returns."
        },
        {
          category: "Financial Reporting & Analysis",
          tasks: "Performed bookkeeping and handled periodic closings, conducted cost analysis and managed accounts payable, prepared weekly financial reports."
        },
        {
          category: "Audit & Compliance",
          tasks: "Audited, processed, and paid vendor invoices, assisted with accounts distribution and filing."
        },
        {
          category: "Administration & Meetings",
          tasks: "Attended board and bank meetings."
        }
      ]
    },
    {
      title: "INTERNSHIP",
      company: "Nestle Pakistan", 
      period: "January 2022 - February 2022",
      type: "Internship Program",
      responsibilities: [
        {
          category: "Administrative Support",
          tasks: "Assisted with data collection, filing, and data entry."
        },
        {
          category: "Financial Records",
          tasks: "Maintained general ledger and financial records."
        },
        {
          category: "Documentation",
          tasks: "Filed cheques and invoices."
        },
        {
          category: "Payroll Assistance", 
          tasks: "Prepared payroll sheets."
        },
        {
          category: "Operations Support",
          tasks: "Created gate passes for deliveries."
        }
      ]
    }
  ];

  return (
    <div className="page-transition">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <section className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A track record of excellence in accounting and finance across multicultural environments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6"></div>
        </section>

        {/* Experience Timeline */}
        <section className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="animate-fade-in-up card-professional p-8"
              style={{animationDelay: `${0.2 * (index + 1)}s`}}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-6 border-b border-border">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h2>
                  <div className="flex items-center space-x-2 text-primary mb-2">
                    <Building2 size={20} />
                    <span className="text-lg font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar size={18} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
                  <CheckCircle className="text-primary mr-2" size={20} />
                  Key Responsibilities & Achievements
                </h3>
                <div className="space-y-6">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <div 
                      key={respIndex}
                      className="bg-secondary/30 p-6 rounded-lg hover:bg-secondary/50 transition-colors animate-scale-in"
                      style={{animationDelay: `${0.1 * respIndex}s`}}
                    >
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {resp.category}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {resp.tasks}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="card-glass p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Contribute
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              With proven experience in accounting, financial reporting, and compliance, 
              I'm ready to bring value to your organization.
            </p>
            <a 
              href="mailto:Ahtishamahma021@gmail.com"
              className="btn-professional inline-block"
            >
              Get In Touch
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Experience;