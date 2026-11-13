import { portfolioData } from "./portfolio";

const isExternalUrl = (value: string) => value.startsWith("https://");

export const portfolioDataIsValid =
  portfolioData.skills.length === 5 &&
  portfolioData.projects.length === 4 &&
  portfolioData.about.description.length <= 500 &&
  portfolioData.hero.description.length <= 280 &&
  portfolioData.projects.every((project) => isExternalUrl(project.githubUrl)) &&
  isExternalUrl(portfolioData.personal.githubUrl) &&
  isExternalUrl(portfolioData.personal.linkedinUrl);
