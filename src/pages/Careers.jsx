import React from 'react';

export default function Careers() {
  const jobs = [
    {
      title: 'Process Engineer',
      department: 'Engineering',
      location: 'Mumbai, India',
      type: 'Full-time',
      description: 'Looking for an experienced process engineer to optimize industrial operations.'
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Delhi, India',
      type: 'Full-time',
      description: 'Seeking a project manager to lead large-scale industrial projects.'
    },
    {
      title: 'Automation Specialist',
      department: 'Technology',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'Join our team to implement cutting-edge automation solutions.'
    },
    {
      title: 'Quality Control Engineer',
      department: 'Quality',
      location: 'Pune, India',
      type: 'Full-time',
      description: 'Ensure highest quality standards in our industrial processes.'
    }
  ];

  const benefits = [
    {
      title: 'Professional Growth',
      description: 'Continuous learning and development opportunities',
      icon: (
        <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      icon: (
        <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options',
      icon: (
        <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-orange-900 text-white py-20">
        <div className="container-custom">
          <h1 className="heading-primary text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl max-w-2xl">
            Be part of an innovative team driving industrial excellence and
            sustainable growth.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">
              Why Join Us?
            </h2>
            <p className="text-content max-w-2xl mx-auto">
              Join a team that values innovation, excellence, and personal growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-secondary mb-12 text-center">
            Current Openings
          </h2>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        {job.location}
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-secondary text-white mb-6">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-white text-orange-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Submit Your Resume
          </button>
        </div>
      </section>
    </div>
  );
}