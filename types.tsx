
import React from 'react';

// A generic SVG props interface for our icons
export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export interface Skill {
  name: string;
  Icon: React.FC<IconProps>;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface EducationItemData {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  link: string;
}
