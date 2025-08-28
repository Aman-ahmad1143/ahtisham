import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      year: "2025",
      title: "StartYourCareer Training",
      institution: "ADEM/House of Training, Luxembourg", 
      duration: "2 months",
      type: "Professional Development",
      description: "Defining professional project and individual support. Workshops: codevelopment, my application, job search strategy, my job interview. Soft and digital skills.",
      status: "Completed"
    },
    {
      year: "2024",
      title: "ACCA Qualification",
      institution: "Association of Chartered Certified Accountants",
      duration: "In Progress", 
      type: "Professional Certification",
      description: "Advanced professional accounting qualification with global recognition.",
      status: "In Progress",
      subjects: [
        { name: "Financial Accounting", status: "Passed" },
        { name: "Management Accounting", status: "Passed" },
        { name: "Business and Technology", status: "Passed" },
        { name: "Corporate and Business Law", status: "In Progress" },
        { name: "Taxation", status: "In Progress" }
      ]
    },
    {
      year: "2019-2022",
      title: "Chartered Accountant",
      institution: "The Tips College Accountancy, Pakistan",
      duration: "3 years",
      type: "Professional Level",
      description: "Comprehensive professional accounting education covering advanced financial principles, auditing, and business management.",
      status: "Completed"
    },
    {
      year: "2016-2018", 
      title: "I.com (Intermediate in Commerce)",
      institution: "The Tips College Accountancy, Pakistan",
      duration: "2 years",
      type: "Commerce and Finance",
      description: "Foundation studies in commerce and finance, providing fundamental business and accounting knowledge.",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-700 border-green-200";
      case "Passed": return "bg-blue-100 text-blue-700 border-blue-200";
      case "In Progress": return "bg-orange-100 text-orange-700 border-orange-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="page-transition">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <section className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education & Qualifications
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in accounting and finance
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6"></div>
        </section>

        {/* Education Timeline */}
        <section className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="animate-fade-in-up card-professional p-8"
              style={{animationDelay: `${0.2 * (index + 1)}s`}}
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-primary p-2 rounded-lg">
                      <GraduationCap className="text-primary-foreground" size={20} />
                    </div>
                    <span className="text-2xl font-bold text-primary">{edu.year}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">{edu.title}</h2>
                  <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                    <BookOpen size={18} />
                    <span className="font-semibold">{edu.institution}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                    <Calendar size={18} />
                    <span>{edu.duration}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-end space-y-2">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm">
                    {edu.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(edu.status)}`}>
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* ACCA Subjects */}
              {edu.subjects && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Award className="text-primary mr-2" size={20} />
                    Course Progress
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {edu.subjects.map((subject, subjectIndex) => (
                      <div 
                        key={subjectIndex}
                        className="bg-secondary/30 p-4 rounded-lg hover:bg-secondary/50 transition-colors animate-scale-in"
                        style={{animationDelay: `${0.1 * subjectIndex}s`}}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-foreground">{subject.name}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(subject.status)}`}>
                            {subject.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Academic Excellence */}
        <section className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <div className="card-glass p-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Award className="text-primary" size={32} />
              <h2 className="text-2xl font-bold text-foreground">
                Academic Excellence
              </h2>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Committed to continuous professional development with strong academic foundation 
              in accounting principles, financial management, and business operations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <p className="font-semibold text-foreground">ACCA Papers Passed</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">5+</span>
                </div>
                <p className="font-semibold text-foreground">Years of Study</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <p className="font-semibold text-foreground">Countries Studied</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Education;